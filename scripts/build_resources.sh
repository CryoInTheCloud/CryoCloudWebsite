#!/usr/bin/env bash
cd "${BASH_SOURCE%/*}/" || exit

JSON_FILE=../cookiecutter.json
YAML_FILE=../cookiecutter.yaml

if [ -f "$JSON_FILE" ]; then
   rm "$JSON_FILE"
   echo "Removed JSON file"
fi

if [ -f "$YAML_FILE" ]; then
   echo "Converting yaml to json"
   python yaml2json.py "$YAML_FILE" "$JSON_FILE"
fi


if [ -d "../book/_build/html/assets" ]; then
   rm -rf ../book/_build/html/assets
   echo "Removed jupyterbook assets"
fi

check_success() {
  if [[ $? -ne 0 ]]; then
    printf "\033[1;31m ERROR \033[0m\n"
    exit 1
  else
    printf "\033[1;32m SUCCESS \033[0m\n"
  fi
}

printf "Building the splash page -"
cookiecutter ../. -f --no-input -o ../book/_build

check_success

echo "Building the Jupyter Book"
cd ../
jupyter-book build book/ --warningiserror --keep-going

check_success
