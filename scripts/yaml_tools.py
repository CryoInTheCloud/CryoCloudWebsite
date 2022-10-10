import glob
import os
import yaml


# Create include directive for yaml file
# From: https://stackoverflow.com/questions/528281/how-can-i-include-a-yaml-file-inside-another
# Base code taken from below link :-
# Ref:https://stackoverflow.com/a/9577670
class Loader(yaml.SafeLoader):

    def __init__(self, stream):

        self._root = os.path.split(stream.name)[0]

        super(Loader, self).__init__(stream)

    def include(self, node):
        consolidated_result = None
        filename = os.path.join(self._root, self.construct_scalar(node))

        # Below section is modified for supporting UNIX wildcard patterns
        filenames = glob.glob(filename)
        
        # Just to ensure the order of files considered are predictable 
        # and easy to debug in case of errors.
        filenames.sort()
        for file in filenames:
            with open(file, 'r') as f:
                result = yaml.load(f, Loader)

            if isinstance(result, list):
                if not isinstance(consolidated_result, list):
                    consolidated_result = []
                consolidated_result += result
            elif isinstance(result, dict):
                if not isinstance(consolidated_result, dict):
                    consolidated_result = {}
                consolidated_result.update(result)
            else:
                consolidated_result = result

        return consolidated_result
