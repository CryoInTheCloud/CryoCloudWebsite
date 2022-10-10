#!/usr/bin/env python3
"""
Convert team.yaml to CITATION.cff
"""
import yaml

with open('../book/team.yaml') as f:
  team = yaml.safe_load(f)


with open('../CITATION.cff') as f:
  citation = yaml.safe_load(f)

people = []
for person in team['people']:
    first,last = person['title'].rsplit(" ", 1)
    org = person['organizations'][0]['name']
    entry = {'family-names':last,
             'given-names':first,
             'affiliation':org}
    people.append(entry)
    
citation['authors'] = people
    
with open('../CITATION.cff', 'w') as f:
    yaml.dump(citation, f, sort_keys=False)
