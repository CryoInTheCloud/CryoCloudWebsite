#!/usr/bin/env bash
cd "${BASH_SOURCE%/*}/" || exit

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

echo "Building the Jupyter Book"
cd ../book/
jupyter book build

check_success
