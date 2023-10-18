# Reproducible Software Environments

When you log into CryoCloud JupyterHub by default a pre-defined software environment is loaded. This environment is generated and tracked in the https://github.com/CryoInTheCloud/hub-image repository. The default environment is intended to be kept up-to-date with the latest versions of open source software and provide a uniform experience for Hub users.

There are times when new library versions may cause code you've previously written to no longer work. Fortunately, you can access any previous CryoCloud environment here https://quay.io/repository/cryointhecloud/cryo-hub-image?tab=tags. These environments are stored as [Container Images](https://carpentries-incubator.github.io/docker-introduction/) to simplify execution on different computers.


## Keep track of your JupyterHub environment

On CryoCloud JupyterHub, you can see exactly which image you are running:

```bash
echo $JUPTYER_IMAGE
#quay.io/cryointhecloud/cryo-hub-image:17aa6e2ed1a6
```

Note that the tag `17aa6e2ed1a6` corresponds to a commit on GitHub, so we can see recover the exact environment definition at any point in time (https://github.com/CryoInTheCloud/hub-image/tree/17aa6e2ed1a6)


## Use a previous environment on CryoCloud

If you want to keep using an older environment definition on the JupyterHub login page for the 'Image' dropdown Menu select `Other`. Then put the URL into the 'Custom image' box (quay.io/cryointhecloud/cryo-hub-image:17aa6e2ed1a6).

[Insert Screenshot](screenshot)


## Reproduce the CryoCloud environment on another machine

If you have Docker installed on another machine, you can run a specific CryoCloud software environment. 

```bash
docker run -it --rm -p 8888:8888 quay.io/cryointhecloud/cryo-hub-image:17aa6e2ed1a6 jupyter lab --ip 0.0.0.0
```

Refer to [this documentation for more examples](https://pangeo-docker-images.readthedocs.io/en/latest/howto/launch.html#how-to-launch-jupyterlab-locally-with-one-of-these-images)
