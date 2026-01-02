# Fundamentals 

Based on previous experience, participants gain better access to all of the tools CryoCloud 
has to offer after they have a preliminary understand of some of the foundational tools of 
data science workflows. These skills include knowing how to:

* Navigate a [Jupyter Notebook](https://jupyter.org/) environment
* Conduct file management, text editing and other basic tasks from a command line interface
* Add and commit changes in Git, and push and pull content from GitHub
* Create simple scientific workflows in Python

## Software Carpentry Session

We strongly encourage participants to review this two-day recorded fundamentals of Python and open-source workflows crash course ([Software Carpentry Schedule](./swc.md)). You may choose whichever topics you'd like to brush up on or learn. Monthly office hours will also provide an opportunity for asking questions and troubleshooting any issues you encounter.

## Required setup

```{attention}
Please make sure to find some time to go through the below material before
orientation and getting onto the CryoCloud.
```

### GitHub Account

Everyone attending the CryoCloud Orientation will need to obtain a GitHub account and request access to join the CryoCloud organization and CryoCloudUser team.
Visit our [GitHub instruction page](github.md) to learn how!

### Slack Account

All of our communication about the CryoCloud and any issues will be done using the
[CryoCloud Slack space](cryospherecloud.slack.com).
With your invite to the CryoCloud, you should also have received a separate
email to join the Slack workspace. Upon accepting the invite please take a moment to update your profile picture with a fun picture of your and your info. This will help us more easily identify each other and build community.

### JupyterHub

We will offer all tutorials within the Jupyter Hub computing environment.
Visit our [Introduction to Jupyter Hub](./jupyterhub.md) page to learn more!

### Git

All content for the CryoCloud will be shared via GitHub and interacting with the
website will be done via the `git` command. Visit [Setting up the `git` command](./git.md)
to learn how to configure that!

### EarthData Login

To download data  from NSIDC for your tutorials and projects.
Visit our [Earthdata](./earthdata.md) page to learn how to access and Earthdata login account if you don't already have one!

## Optional setup

### Google Earth Engine Sign-Up
The ICESat-2 visualization tutorial will have an interactive component that uses Google Earth Engine (GEE) to query for 
additional data to help put ICESat-2 data into context. 
If you would like to follow this part interactively, please visit our [Earth Engine](earthengine.md) page to learn how to sign up, 
if you haven't already!

### Python
Dive deeper into how [Python is managed and installed](python.md) on the JupyterHub
and how you can install that on your personal machine.

### Nbdime
Jupyter notebooks are useful, rich media documents stored in a plain text JSON format. This format is relatively easy to 
parse. However, primitive line-based diff and merge tools do not handle well the logical structure of notebook documents. 
[`nbdime`](https://nbdime.readthedocs.io/en/latest/), on the other hand, provides “content-aware” diffing and merging of 
Jupyter notebooks. It understands the structure of notebook documents. Therefore, it can make intelligent decisions when 
diffing and merging notebooks. Checkout our [Nbdime](../nbdime/nbdime-hub.ipynb) page to learn how to use this versioning tool.
