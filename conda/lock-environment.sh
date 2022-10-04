#!/usr/bin/env bash
# This script will re-generate reproducible lockfiles
# Execution needs to be from inside the `conda` folder

ENV_FILE="environment.yml"
LOCK_ENV='CondaLock'

# Generate CondaLock environment unless present
conda env list | grep ${LOCK_ENV} > /dev/null

if [[ $? -eq 1 ]]; then
  conda create -q -y -n ${LOCK_ENV} -c conda-forge conda-lock=1.1.1 mamba=0.27
fi

# https://github.com/conda/conda/issues/7980#issuecomment-492784093
eval "$(conda shell.bash hook)"
conda activate ${LOCK_ENV}

if [[ ! -s "${ENV_FILE}" ]]; then
    >&2 printf " Missing ${ENV_FILE} to generate environments with\n"
    >&2 printf " Are you inside the 'conda' folder?\n"
    exit 1
fi

# Local environments
## Generate explicit lock files
conda-lock lock --mamba -f ${ENV_FILE}

# BinderHub support
## Generate environment.yml for binder compatibility
printf "Generate environment.yml for BinderHub \n"
conda-lock render -k env

# Remove CondaLock environment when the last command was successful
if [[ $? -eq 0 ]]; then
  conda deactivate
  conda remove -q -y --name ${LOCK_ENV} --all
fi
