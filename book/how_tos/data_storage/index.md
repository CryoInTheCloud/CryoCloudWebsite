---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.16.7
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Data storage and S3 bucket access

How To’s for data storage are building blocks for setting up and using S3 bucket storage here. Our hub
provides access to two S3 storage buckets on AWS: a scratch bucket (`s3://nasa-cryo-scratch`) where data will automatically 
be deleted 7 days after it is uploaded, and the regular persistent storage bucket (`s3://nasa-cryo-persistent`).
We provide these S3 storage options for moving and storing files that are larger than what is easy to move around on our JupyterHub file system. 
Instructions for using those are here. However, we cannot support >50 GB of data storage for any user so we have also provided instructions for 
setting up your own personal storage bucket when you have more data you want to store than what we provide for free.

## Data storage notebooks covered here
* [Using the CryoCloud S3 scratch bucket](https://book.cryointhecloud.com/how_tos/data_storage/CryoCloudScratchBucket.html)
* [Setting up an AWS S3 bucket](https://book.cryointhecloud.com/how_tos/data_storage/Instructions_for_configuring_AWS_S3_bucket.html)
* [Introduction to integrating cloud storage](https://book.cryointhecloud.com/how_tos/data_storage/integrating_cloud_storage.html)
