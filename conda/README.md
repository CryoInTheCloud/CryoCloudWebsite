# Conda environment management

**The only file you should need to edit in this folder is `conda/environment.yml`. This file defines the set of conda-packages needed to render the full website.**

Although we refer to "conda" environments, we recommend using [mamba](https://github.com/mamba-org/mamba) as a drop in replacement for the `conda` package manager. Mamba performs operations in parallel, which we've found to be important for creating complex hackweek environments involving many packages!

Lockfiles ensure that everyone working on this project has an identical development environment, whether working on a personal computer or running on our hosted JupyterHub cloud infrastructure.

If you edit `conda/environment.yml` to change package versions or add new ones, be sure to _re-lock_ the environment by running `./lock-environment.sh`:

```
mamba remove --name hackweek --all
mamba env create --name hackweek --file conda-linux-64.lock.yml
mamba activate hackweek
```
Originally built by eScience Hackweeks.
