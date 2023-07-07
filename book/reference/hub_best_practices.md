# CryoCloud Best Practices

* Who and how you can access the CryoCloud - Setup instructions in [Getting Started section](../content/Getting_Started.md) 

* To save money for us, when you finish on the Hub, go to File > Hub Control Panel > push Stop Server
    * Hub will automatically shut off after 90 min of no use or logging off otherwise

* Keep personal storage to <10 Gb unless you talk to us about it
    * We recommend that you stream data (no download) or download and delete automatically where possible
    * It costs $90 a month to store 2 Tb of data
    * We need to apply for more cloud credits if our users need more storage

* Pip installs on your hub last only for that session
    * If multiple people use a missing package, let us know and we will add it to everyone's environment
    * Guidance for adding packages in [Contributing/Workflows](../contributing/workflow.md)
    * Otherwise you have two options to maintain shareability and replicability:
        * Install on each use with `%pip install packagename` run in the first cell of your Jupyter notebook
        * Use own additional environment using instructions in [Python Installation and Environments](../how_tos/background/python.md)

