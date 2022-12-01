# Workflow for contributing to our JupyterBook (or any GitHub project)

*Modeled after [NASA OpenScapes Cookbook](https://nasa-openscapes.github.io/earthdata-cloud-cookbook/).*

Your workflow can be from whatever software you are most comfortable
with: you can develop chapters working in an integrated development
environment (IDE) like RStudio or Spyder, notebook interface like
JupyterLab, or a text editor. You'll develop content like you normally
would, executing all code like you normally would as you develop your
`.ipynb` , `.Rmd`, and `.md` files. By default, when we build
the JupyterBook it will not execute code in Jupyter notebooks, you 
need to have already excuted when you save for the outputs to show in the book.

Then, when you're ready to update your contribution in the JupyterBook,
JupyterBook will combine all the files to make the JupyterBook (or other books
like it!). Below is a full workflow but depending on how you're
contributing, you may have more focus on different parts of it.

## Quickstart reference

```{admonition} Summary of GitHub commands detailed here

``` bash
## check which branches exist, where you are, and pull recent from main branch
git branch
git checkout main
git pull

## create and switch to new branch
git checkout -b newbranchname

## develop content: write prose in markdown, code in R and Python
## render your content to check for problems after you have loaded the cryocloud environment
jupyter-book build yourbookname/

## commit changes
git add filename (or --all)
git status
git commit -m "my commit message here"

## push changes
git push -u origin newbranchname  # connect your branch to github.com and push

## create a pull request
## from GitHub.com, create a pull request, and add a `preview` label to the pull request. Once it passes 
all tests, a reviewer signs off on it, and it is merged, delete your branch.

## delete branch
git checkout main           # switch to the main branch
git pull                    # pull merged updates from github.com
git branch -d newbranchname # delete old local  branch

## other useful github commands
git mv filename newfilename # rename while keeping git history for file
git rm filename             # delete file
git rm -r directoryname     # delete directory
git log                     # show commit logs
git status                  # the state of the working directory and the staging area - which changes have been staged, which haven’t, and which files aren’t being tracked by Git. Status output does not show you any information regarding the committed project history. For this, you need to use git log.
```
```

## GitHub Workflow {#github-workflow}

First let's talk about the GitHub part of the workflow.

We will work in branches so as to not overwrite each other's work, and
let GitHub do what it does best.

The `main` branch will be the current approved version of the book. The
main branch is what displays at <https://cryocloud.github.io>.

A nice clean workflow with branches is to consider them temporary. You
pull the most recent from `main`, you create a branch locally, you make
your edits, you commit regularly, you push regularly to github.com, and
then you create a pull request for it to be merged into `main`, and when
it's approved the branch is deleted on github.com and you also delete it
locally. That's the workflow we'll walk through here. A great resource
on GitHub setup and collaboration is the ICESat-2 Hackweek [Git and GitHub 
tutorial notebooks and video records]
(https://github.com/ICESAT-2HackWeek/2020_ICESat-2_Hackweek_Tutorials#03-git-and-github)
by Fernando Perez, Fernando Paolo, Shane Grigsby, and Daniel Shapiro, which 
includes fantastic background philosophy as well as bash commands for setup, 
workflows, and collaboration.

**The following assumes you've completed the initial setup (*under production*) from the previous chapter.

### Branch setup

First off, check what branch you're on and pull the most recent edits
from the main branch. If you need to switch branches, use
`git checkout`. \*Note: a new alternative to `git checkout` is
`git switch` (see [this
blog](https://www.banterly.net/2021/07/31/new-in-git-switch-and-restore/));
when you updated git consider using it here instead too.

``` bash
git branch          # returns all local branches
git checkout main   # switch branch to main
git pull            # pull most recent from the main branch
```

If you are already on the `main` branch, git will tell you, and that's
fine.

(If you have any residual branches from before, you'll likely want to
start off by deleting them --- assuming they were temporary and have
been merged into github.com. You can delete a branch with
`git branch -d newbranchname`).

From the main branch or when you first open git, you will want to set a few variables. Git will require
your user name and email to push content. You can set these for all of your branches
and repositories. You can remove the --global while in a branch to set only for that 
repository. If you want to override this with a different name or email address for specific 
projects, you can run the command without the --global option when you’re in that project.

``` bash
git config --global user.name "YourGithubUserName"
git config --global user.email you@example.com
git config --global pull.rebase true  # this sets all pulls to do a rebase
```

You can control the color scheme of your window so that files with different status 
are visualized in different colors.

```bash
git config --global color.ui "auto"
```

You can also check your global configurations.

```bash
git config --global -l
```

Next, create a new branch, then switch to that branch to work in. Below
is a one-step approach for the two-step process of
`git branch newbranchname` then `git checkout newbranchname` (read
[more](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)).

``` bash
git checkout -b newbranchname  # create and switch to new branch
```

### Develop content

Time to edit and develop content, and run your JupyterBook Workflow -- see
[specific instructions below](#develop-cookbook-content). While you're
developing, you'll want to frequently commit and push your changes.

### Commit changes

You'll commit your work regularly as you go, likely using the following,
which commits one or more files you've affected within the JupyterBook project:

``` bash
git add filename
git commit -m "my commit message here"
```
Or to commit all files you've affected:

``` bash
git add --all
git commit -m "my commit message here"
```

You can check your commits using `git log`.

From [R Packages](https://r-pkgs.org/git.html#git-commit) by Hadley
Wickham:

> A commit takes a snapshot of your code at a specified point in time.
> Using a Git commit is like using anchors and other protection when
> climbing. If you're crossing a dangerous rock face you want to make
> sure you've used protection to catch you if you fall. Commits play a
> similar role: if you make a mistake, you can't fall past the previous
> commit.

Here are more of Hadley's suggested [best
practices](https://r-pkgs.org/git.html#commit-best-practices).

### Push changes

When you're ready to push changes you've made in your branch, you'll
first need to connect it to github.com by pushing it "upstream" to the
"origin repository" (`-u` below is short for `--set-upstream`):

``` bash
git push -u origin newbranchname  # connect your branch to github.com and push
```

The above is a one-time command to connect your local branch back to
github.com. After you've pushed successfully the first time, then as you
continue to commit, you'll be able to push as normal:

``` bash
git push
```

### Delete your local changes

There are several ways to delete your local changes if you were playing
around and want to reset. Here are a few:

**Burn it all down** - delete the whole repo that you have locally, and
then reclone.

``` bash
cd 2021-Cloud-Hackathon
rm -rf 2021-Cloud-Hackathon 
```

**Undo changes you've maybe saved or committed, but not pushed**. This
is less time and internet intensive (no new clone/download).

If you've got changes saved, but not yet staged, committed, or pushed,
you'll delete unstaged changes in the working directory with clean:

``` bash
cd 2021-Cloud-Hackathon
git clean -df
git checkout -- .
```

Here is a whole blog on how to do this, with conceptual diagrams,
command line code, and screenshots from RStudio.
<https://ohi-science.org/news/github-going-back-in-time>

### Update local branch with remote main branch

If while you're working you would like to update your local
`newbranchname` with the most recent updates on the `main` branch on
GitHub.com, there are several ways to do this.

#### checkouts and merge main

[Git Update Local Branch with remote
Master](https://stackoverflow.com/questions/34656523/git-update-local-branch-with-remote-master)

``` bash
git checkout main
git pull
git checkout newbranchname
git merge main
```

#### or fetch and merge origin/main

``` bash
git checkout newbranchname
git fetch
git merge origin/main
```

### Pull Request

Now you've synced your work to github.com. It is currently online, in a
separate branch from the `main` branch. Go to
<https://github.com/cryointhecloud/CryoCloudWebsite>, find your
branch, and do a pull request. Write a suitable subject heading and submit
the pull request. 

Now that you have a pull request open, it will go start automatic checks based
on what files folders you have made changes to. Additionally, if you are 
contributing to the JupyterBook, you need to go to the right side within the 
pull request, click the gear button next to `Labels`, and type preview. This 
will add a Netlify and Test check to your pull request.

You will need another reviewer with write priveledges to review your request.
Once they have reviewed your PR, you and they will be able to `squash and merge`.
You will want to make sure to update the branch first if any other pull requests
have been approved since you pushed. 

When the pull request is merged, delete the branch on github.com. GitHub
will prompt you with a button at the end of the merge.

### Delete Branch

Once your pull request is merged and you've deleted the branch from
github.com, then come back to your local setup and delete the branch
locally:

``` bash
git checkout main           # switch to the main branch
git pull                    # pull merged updates from github.com
git branch -d newbranchname # delete old local  branch
```

## JupyterBook Workflow

Now the fun part! Our overall workflow will be to serve the book at the
beginning, develop/edit chapters as simple text files
(`.md`) or executable notebooks (`.ipynb`) that will all
render into the book.

JupyterBook lets us easily convert between file types, so depending on how
you prefer to work and how you'd like to interact with different
audiences, we can go between formats as we wish. For example, we can
convert an existing `.ipynb` to `.md` to collaborate during
development, and then convert back to `.ipynb` files for our workshops.
See [Jupyter text formats](https://jupytext.readthedocs.io/en/latest/formats.html) for details.

As you work, you'll follow our GitHub workflow above, committing
regularly. Remember to execute code in your Jupyter notebook (
`.ipynb file)`as you're working so that your changes will be be included
in the JupyterBook before pushing to github.com.

### JupyterBook preview

The thing to do first is to "preview" the JupyterBook so that we can see
what it looks like as we develop the chapters.

Run the following from your branch in your `CryoCloudWebsite/book/`
directory from the command line:

``` bash
jupyter-book build mybookname/
```

After it is served, paste the url into your browser to see the
development version of the JupyterBook.

### Develop JupyterBook Content {#develop-jupyterbook-content}

You can develop JupyterBook chapters in the text editor, IDE, or notebook
editor of your choice.

## Jupyter Book Structure

Each chapter in our JupyterBook is a separate file (`.md`/
`.ipynb`/`.Rmd`). These are stored in our `files` directory,
organized by sub-directory.

The JupyterBook structure (i.e. the order of sections and chapters) is
determined in the `_toc.yml` file in the root directory. We can
shuffle chapter order by editing the `_toc.yml` file, and add new
chapters by adding to the `_toc.yml` and creating a new file in the
appropriate sub-directory that is indicated in `_toc.yml`.

Please experiment, add new chapters and sections; we can shuffle chapter
order and subsections as we continue to develop the JupyterBook, nothing is
set in stone.

## JupyterHub Workflow

We use the CryoCloud [2i2c](https://2i2c.org/) JupyterHub to run notebooks.

### Log into the JupyterHub

1.  Go to the [CryoCloud Hub](https://hub.cryointhecloud.com). *You should see the CryoCloud logo.*
2.  Click on the orange "Log in to continue" button.
3.  Click the "Sign in with Github" button and log in. *If you aren't
    already logged into Github, you should see the login prompt.
    Otherwise, you will be logged in automatically.*

### Start a 2i2c JupyterHub session

At this point, what you see depends on whether or not you have an active
session. If your session is active, JupyterLab will load and you can
start your work. If not, you'll need to start a new session:

1.  Select a server based on the size of your job. Most of the time during 
    code development, you will only need the smallest instance. Each larger 
    instance costs more money per minute used. *You should see a
    progress window showing you what 2i2c is doing to get your session
    started. It may take several minutes, but you'll eventually see a
    JupyterLab instance.*

### Create a different Jupyter kernel to run notebooks

The default jupyter kernel may not have all the libraries you need to
run a notebook. Fortunately, you can make a new kernel on the fly to use
with the notebook.

1.  Open a terminal in JupyterLab.

    1.  Click on the large blue "+" button on the upper left. *You
        should get a new Laucher tab.*
    2.  In the Launcher tab, click on "Terminal" under "Other." *You
        should get a tab with a command line prompt.*

2.  Create a conda environment using your [favorite
    method](https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html).

3.  Activate the new environment with
    `conda activate YOUR_ENVIRONMENT_HERE`. *You should see the name of
    the new environment in your command line prompt.*

4.  Create a new kernel by calling
    `ipython kernel install --name YOUR_ENVIRONMENT_HERE --user`. *You
    should get a response saying saying the kernel has been installed.*

To use this new kernel,

1.  Open the notebook you want to run. *You should see the notebook in a
    tab.*
2.  Click on the current kernel on the upper right. The default kernel
    is called `Python 3`. *You should see a kernel selection widget.*
3.  Select the new kernel you created and click the "Select" button.
    *The kernel on the upper right should now give the name of your
    custom kernel.*


### Dockerfile

To update the Dockerfile, see [2i2c’s Configurator](https://docs.2i2c.org/en/latest/admin/howto/configurator.html).

