# Scripts for building the website

This folder contains several scripts for building our splash page and Jupyter Book website. At a high level, human-friendly configuration files are read and translated into HTML to post to a static website hosting server.

* `build_resources.sh`
  1. reads `cookiecutter.yaml` and runs `cookiecutter` to insert variables into the splash page HTML
  2. reads Jupyter Book files under the `book/` directory and runs `jupyter book build` to render the Jupyter Book part of the website.

* `yaml_tools.py` and `yaml2json.py` are helper scripts to create intermediate `json` files that are required by `cookiecutter`
