# CryoCloud Best Practices

Who and how you can access the CryoCloud - Setup instructions in the [Getting Started section](../content/Getting_Started.md) 

***

Close out your browser tab every time that you log out. This keeps each log in clean and can prevent weird artifacts from popping up on your next log in.

***

To save money for us, when you finish on the Hub
* Go to `File` > `Hub Control Panel` > push `Stop Server`
* Once that button disappears, your server has stopped
* Click `Log Out`
* Close that browser tab before starting CryoCloud again to prevent errors --> You may receive an error if you try to restart CryoCloud from this same tab

<font color="red">The hub will automatically shut off after 90 minute of no active use or by the user logging off</font>

***

Keep personal storage to <10 Gb unless you talk to us about it
* We recommend that you stream data (no download) or download and delete automatically where possible
* You can use this handy terminal command `du -hs --exclude="shared*" ~/` to check how much disk space you have used 
* It costs $90 a month to store 2 Tb of data
* Reach out if you need more storage because we can apply for more cloud credits if needed

***

The `shared` drive is a folder everyone can read files from and only admins can write to. `shared-public` everyone can read and write to. When deleting files, please be careful to leave other users' files intact in those directories. This means that while it is easy to share data, especially `shared-public` carries an inherent risk of losing the data if someone else accidentally deletes it. We do not recommend this folder for long term storage unless the files are copies or easily recreated. This storage space is best suited for sharing files and then deleting those files as soon as your team is done using them. 

***

Pip installs on your hub last only for that session
* If multiple people use a missing package, let us know and we will add it to everyone's environment
* Guidance for adding packages in [Contributing/Workflows](../contributing/workflow.md)
* Otherwise you have two options to maintain shareability and replicability:
   * Install the package each time you open CryoCloud using `%pip install packagename` or `%conda install packagename` run in the first cell of your Jupyter notebook (`%pip` is better than `!pip` because it ensures installation to the right directory)
   * Create a persistent environment by building a new kernel, using instructions in [Python Installation and Environments](../how_tos/background/python.md)
 
***

Using `Other` docker images and environments at startup. 

When selecting server size, you have a dropdown with options of selecting Python, R, Matlab, and Other. What you choose here determines what software tools you will have access to and what coding environment you will start with. You are choosing what is called a 'Docker image'. Choosing a different docker image is like choosing between two laptops that have different apps and capabilities installed. If you want to use a different environment/docker image than what we have as the defaults or if you want an older version of our current environments, select `Other` and then you can input a link, known as a 'tag', to another docker image so that CryoCloud knowns to build a different setup for you. A box, called 'Custom', will appear when you select `Other` and you can put in the tag there. This is how you can find the tag you want: 

If you want to use an older/different environment from our CryoCloud repositories
* Go to [https://quay.io/organization/cryointhecloud](https://quay.io/organization/cryointhecloud)
* Select the image you want - our Python image is called `cryo-hub-image` for example, so if you want to view our older versions of the Python image, click that. For reference, `cryo-hub-image` is attached to our GitHub `hub-image` repo ([https://github.com/CryoInTheCloud/hub-image](https://github.com/CryoInTheCloud/hub-image)) if you want to look at the current environment.
* Once you have chosen which tag you want to use, you can write out the tag and paste that into the `Custom` box
* For our docker repository, the tags look like this with a `website/account/image:tag` format where the last numbers are the part you want to replace with whichever tag numbers are associated with the docker image you chose: `quay.io/cryointhecloud/cryo-hub-image:4047b77921f5`

If you want to use a tag from Docker Hub
* Search for them in [https://hub.docker.com/](https://hub.docker.com/)
* The tags will take the form of `account/image:tag` (e.g., `pangeo/ml-notebook:latest`).

***

Get better oriented with open science practices and broaden the impact of your work through the [NASA Open Science 101 curriculum](https://stemgateway.nasa.gov/s/course-offering/a0BSJ0000029hSn/open-science-101). This curriculum comes with a NASA certificate and takes users through the ethos of open science, open tools and resources, open data, open code, and open results. It has really practical content. With some background knowledge in open science, you may be able to take the fast track through the certificate without needing to go through all of the modules.
