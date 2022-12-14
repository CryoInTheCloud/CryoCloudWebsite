# Scripts for building the website

This folder contains several scripts for building our splash page and Jupyter Book website. At a high level, human-friendly configuration files are read and translated into HTML to post to a static website hosting server.

* `build_resources.sh`
  1. reads Jupyter Book files under the `book/` directory and runs `jupyter book build` to render the Jupyter Book part of the website.
  Note: This script previously also handled (with a few helper scripts) the building of a splash page.
  See the [template repository](https://github.com/uwhackweek/jupyterbook-template) for the original functionality.