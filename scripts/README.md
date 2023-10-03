# Scripts for building the website

This folder contains several scripts for building our splash page and Jupyter Book website. At a high level, human-friendly configuration files are read and translated into HTML to post to a static website hosting server.

* `build_resources.sh`
  1. reads Jupyter Book files under the `book/` directory and runs `jupyter book build` to render the Jupyter Book part of the website.
  Note: This script previously also handled (with a few helper scripts) the building of a splash page.
  See the [template repository](https://github.com/uwhackweek/jupyterbook-template) for the original functionality.

* `notebook_import.py`
  1. imports external notebooks from other github repos and assigns credit at the top of the imported notebook. External notebook locations are 
  added to assets.json and the script requires that the import_notebook environment from environment.yml be activated. To run, use the command line 
  from the CryoCloudWebsite/scripts directory: \
          `conda env update -f environment.yml` \
          `conda activate notebook-import` \
          `python notebook_import.py -f assets.json` 
