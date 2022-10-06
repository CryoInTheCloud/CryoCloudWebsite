# GitHub Actions

This folder contains continuous integration workflows to perform a variety of tasks such as checking for spelling errors and broken links, ensuring HTML is generated without errors, and publishing the website. Based on the eScience Hackweek Jupyterbook Template. 

## Actions

the `actions/` subfolder contains common [composite actions steps](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) that any workflow can use.

#### [setupconda](./actions/setupconda/action.yaml)
Steps to configure conda environment required to build the website.

#### [buildresources](./actions/buildresources/action.yaml)
Steps to build the hackweek landing webpage and JupyterBook.


## Workflows

The `workflows/` subfolder contains continuous integration workflows

#### [binder-badge.yaml](./actions/workflows/binder-badge.yaml)
Create [binder](https://mybinder.readthedocs.io/en/latest/howto/gh-actions-badges.html) badges with links to test tutorial notebooks

#### [deploy.yaml](./actions/workflows/deploy.yaml)
Render and publish the websites (JupyterBook and landing page) to GitHub Pages

#### [manual.yaml](./actions/workflows/manual.yaml)
Bypass usage of the cache to manually trigger a full rebuild of the JupyterBook and landing page

#### [netlifypreview.yaml](./actions/workflows/netlifypreview.yaml)
Creates public preview, via [netlify](https://jupyterbook.org/publish/netlify.html), of changes by building from a PR

#### [qaqc.yaml](./actions/workflows/qaqc.yaml)
Quality assessment and quality control. Standardizes formatting including spell check, hyperlink check, and clearing notebook outputs

#### [repo2docker.yaml](./actions/workflows/repo2docker.yaml)
[Build a Docker image](https://github.com/jupyterhub/repo2docker-action) for JupyterHub/BinderHub

#### [test.yaml](./actions/workflows/test.yaml)
Build the websites (JupyterBook and front page). Run on Pull Requests against every commit and via a 'cron' schedule to maintain caching [since otherwise the cache expires if untouched in 7 days](https://docs.github.com/en/actions/advanced-guides/caching-dependencies-to-speed-up-workflows#usage-limits-and-eviction-policy)

#### [update_fr_template.yaml](./actions/workflows/update_fr_template.yaml)
Update the current repo from the original template (`uwhackweek/jupyterbook-template`). Run manually to collect any updates made to template files listed in `.templaterc.json`, commit them to a new branch, and submit a PR the repo created from the template.

## Security

It's desirable for hackweek websites to have contributions from anyone, so the website repository should allow for changes via pull requests from forks. By default workflows running off forked repositories do not have access to secrets, but [following security best practices](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/) you can require adding a label to a pull request in order to run a workflow that requires secrets. For an example, see the [netlifypreview.yaml](./actions/workflows/netlifypreview.yaml) workflow.
