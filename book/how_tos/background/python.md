# Python Installation

## Overview

While we will be using a cloud-hosted computing environment during the hackweek
({ref}`event-jupyterhub`), it is often desirable to run Python code on your laptop.
We also want to ensure that hackweek tutorials or other scientific code is
reproducible and can be run on different computers and operating systems.

This lesson takes you through our recommended procedure for managing Python
environments and software on your personal computer. We suggest you follow these
instructions in advance so that we can help you troubleshoot during the hackweek
and have a fully functioning environment after.

## Python Software

Python software is distributed as a series of *libraries* that are called within your code to perform certain tasks. There are many different collections, or *distributions* of Python software. Generally you install a specific distribution of Python and then add additional libraries as you need them. There are also several different *versions* of Python. Support for Python 2 ended in 2020, so you should use Python>=3!

```{note}
If you open a terminal on your computer, chances are if you type `python` you will find it is already installed! But it is best-practice to create separate environments or _virtual environments_ to not interfere with existing installations. This also allows you to have different projects in 
different workspaces, each one of them with different Python versions and different packages installed. You can use {term}`conda` for this.
```

## What is Conda?
[**Conda**](http://conda.pydata.org/docs/) is an **open source `package` and `environment` management system** for installing multiple versions of software packages, their dependencies and switching easily between them. Conda works with many programming languages but is very popular in the Python community. It works on Linux, OS X and Windows.

## Installing Miniconda

[Miniconda](http://conda.pydata.org/miniconda.html) is a command line tool which contains only Python and essential packages. We recommend installing it because it is the easiest way to use conda for Python environment management without taking up too much space.

### Windows
Click [here](http://conda.pydata.org/miniconda.html) to download the proper installer for your Windows platform (64 bits).
We recommend to download the Python 3 version of Miniconda.

When installing, you will be asked if you wish to make the Anaconda Python your default Python for Windows.
If you do not have any other installation that is a good option. If you want to keep multiple versions of python on your machine (e.g. ESRI-supplied python, or 64 bit versions of Anaconda), then don't select the option to modify your path or modify your windows registry settings.

### Linux and OS X
You may follow manual steps from [here](http://conda.pydata.org/miniconda.html) similar to the instructions on Windows (see above). Alternatively, you can execute these commands on a terminal shell (in this case, the bash shell):

```bash
# For MacOSX
url=https://repo.continuum.io/miniconda/Miniconda3-latest-MacOSX-x86_64.sh
# For Linux
url=https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
wget $url -O miniconda.sh
bash miniconda.sh -b -p $HOME/miniconda
```
Notice that this last command is using `bash`. If bash is not already your default shell, you need to set it to be so (use the `chsh -s /bin/bash` command to change your default shell to bash).

### Installing Anaconda (Optional)

[Anaconda](https://www.anaconda.com/distribution/) is a data science platform that comes with a lot of packages. At its core, Anaconda uses the conda package management system. The list of packages included can be found [*here*](https://docs.anaconda.com/anaconda/packages/pkg-docs).

1. To install Anaconda, please click on the link below for your operating system, and follow the instructions on the [site](https://www.anaconda.com/download/).
2. Once Anaconda installation step is finished run `python` in the command line to test if Anaconda is installed correctly. **Note: For windows, please use the Anaconda prompt as the command line. It should be installed with your installation of Anaconda**.
If Anaconda is installed correctly, you should have this prompt, which emphasizes **Anaconda**:

```bash
$ python
Python 3.7.3|Anaconda custom (x86_64)| (default, Mar 27 2019, 22:11:17)
...
```

### Installing mamba (Optional)

The installation with `conda` may take quite some time... A better option is to use `mamba` instead.
In order to do so, first install mamba in your base environment:
```bash
conda install mamba
```
Then, in all the commands following in the next sections you can replace all the `conda` commands by `mamba` commands (except the `conda activate`! That is the only command for which you need to use `conda`). 


## Working in an environment 

Once miniconda/conda has been installed, we can use it to create new virtual environments we can use to install different libraries we want to use for our
project. 
````{note}
By default, conda environments are not currenlty being keep persistent in the CryoCloud Hub. 
We encourage users to create a folder in their home directory that they can use to store all the customized environments. 
You can do this directly from the terminal by first creating a containing folder
```bash
mkdir envs
```
and then create (also in your home directory) a new file called `.condarc` (the name is important! don't forget the initial dot `.`) with the following contents
```
# .condarc

envs_dirs:
  - ~/envs
```
This will indicates to conda that all the new environmnets have to live inside `~envs`. 
````

You can now create a new environment with conda You can do this from scratch, for example, 
```bash
conda env reate --name <ENVIRONMENT NAME> python=3.9
```
where you have to replace `<ENVIRONMENT NAME>` with the name you want to put to your new environment. 
Alternatively, you can create an environment directly from a `.yml` file
```bash
conda env create -f environment.yml
```
This second option is particulary practical for reproducibily and collaboration. 

You can check that the creation and installation of the new environment has worked by first activating the environment
```bash 
conda activate <ENVIRONMENT NAME>
```
and then check if you have the correct Python version installed
```bash
which python
python --version
```

### Making the environment accesible to the iPython kernel

In order to show the kernel associated to our new environment from a Jupyter Notebook, we need to install `ipykernel`. We first activate the 
new environment, 
```bash
conda activate <ENVIRONMENT NAME>
```
and then install `ipykernel`:
```bash
conda install ipykernel
```
This steps are not needed if you created the environment directly from a `.yml` file that includes ipykernel as dependency. 

Then we create the kernel with  
```bash
python -m ipykernel install --user --name <ENVIRONMENT NAME> --display-name "IPython - <NAME>"
``` 
to create the associated kernel. Replace `<NAME>` with the name you want to call the iPython kernel.  

You are done! Next time you start your JupyterHub session, you will see the new kernel available from your launcher or from the upper right corner
of any Jupyter Notebook. 