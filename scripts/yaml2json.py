# converts yaml configuration file to json file
# usage: python <yaml_input_filename> <json_output_filename>
# called by build_resources.sh script

import json
import sys
import yaml

from yaml_tools import Loader

yaml_file = sys.argv[1]
json_file = sys.argv[2]

Loader.add_constructor('!include', Loader.include)

with open(yaml_file, 'r') as yaml_in, open(json_file, "w") as json_out:
    yaml_object = yaml.load(yaml_in, Loader=Loader) 
    json.dump(yaml_object, json_out)
