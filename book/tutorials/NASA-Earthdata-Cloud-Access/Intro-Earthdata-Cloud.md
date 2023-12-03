# NASA Earthdata Cloud and data access using earthaccess and icepyx: 
## Introduction to NASA Earthdata and NASA Earthdata Cloud

TODOs / Questions:
* Cost considerations

# Learning Outcomes

The purpose of this overview is to introduce the data search and access options provided within the Earthdata Cloud, along with an introduction to NASA's ICESat-2 Mission. 

## Prerequisites

None

## Credits

This guide was adapted from the following tutorials:
* [Data Discovery and Access: Overview](https://icesat-2-2023.hackweek.io/tutorials/data-access-and-format/overview.html) by Andy Barrett, NSIDC DAAC
* [Using icepyx to access ICESat-2 data](Using icepyx to access ICESat-2 data) by Rachel Wegener, University of Maryland

## Modes of Data Access

In the past, most of our scientific data analysis workflows have started with searching for data and then downloading that data to a local machine; whether that is the hard drive of your laptop or workstation, or some shared storage device hosted by your institution or research group. This can be a time consuming process if the volume of data is large, even with fast internet. It also requires that you have sufficient disk-space. If you want to work with data from different geoscience domains, you may have to download data from several data centers. 

<figure>
<center>
    <img src='images/shiklomanov-cloud-paradigm.png' alt='Earthdata Cloud Transition. Credit: Alexey Shiklomanov, NASA ESDIS'/>
</center>
</figure>

However, a change is a-foot. New modes of data access are starting to becoming available. Driven by the growth in the volume of data from future satellite missions, the archiving and distribution of NASA data is in a [state of transition](https://www.earthdata.nasa.gov/eosdis/cloud-evolution). Over the next few years, all NASA data will be migrated to the NASA Earthdata Cloud, a cloud-hosted data store that will have all NASA datasets in one place. This not only offers new modes of accessing NASA data but also offers new ways of working with this data. As with Google Docs or Sheets, data in these "files" is not just stored in the cloud but compute resources offered by cloud providers allow you to process and analyze the data in the cloud. When you edit your Google Doc or Sheet, you are working in the cloud not on your computer. All you need is a web browser; you can work with these files on your laptop, tablet or even your phone. If you choose to share these documents with others, they can actively collaborate with you on the same document also in the cloud.  For large geoscience datasets, this means you can _skip the download_ and take your _analysis to the data_.  

## NASA Earthdata Cloud at the NSIDC DAAC

During this transition period, data will remain freely available from the NASA DAACs (Distributed Active Archive Centers) that have archived and distributed data for over 20 years; and will support data in cloud-hosted storage known as the Earthdata Cloud as data sets are migrated. 

<figure>
<center>
    <img src='images/NSIDC-DAAC.png' alt='NSIDC DAAC Intro'/>
</center>
</figure>

The NSIDC DAAC now offers all [ICESat-2](https://nsidc.org/data/icesat-2) and [ICESat/GLAS](https://nsidc.org/data/icesat) data sets in the cloud. A listing of all NSIDC DAAC cloud-hosted data can be found [here](https://nsidc.org/data/earthdata-cloud/data). 

### More on Cloud Computing

"The Cloud" is a somewhat nebulous term (pun intended). In general, the cloud is a network of remote servers that run software and services that are accessed over the internet.  There is a growing number of commercial cloud providers (Google Cloud Services, Amazon Web Services, Microsoft Azure). NASA has contracted with Amazon Web Services (AWS) to host data using the AWS Simple Storage Service (S3). AWS offers a large number of services in addition to S3 storage. A key service is Amazon Elastic Compute Cloud (Amazon EC2). This is the service that is _under-the-hood_ of the CryoCloud JupyterHub you are using during today's workshop.  When you start a JupyterHub, an EC2 _instance_ is started.  You can think of an EC2 _instance_ as a remote computer.

AWS has the concept of a region, which is a cluster of data centers. These data centers house the servers that run S3 and EC2 instances. NASA Earthdata Cloud is hosted in the `us-west-2` region. This is important because if your EC2 instance is in the same region as the Earthdata Cloud S3 storage, you can access data in S3 directly in a way that is analogous to accessing a file on your laptop's or workstation's hard drive. This is one of the key advantages of working in the cloud; you can do analysis where the data is stored without having to download the data to a local machine.  

### Cost Considerations

The notion of _analysis in place_, or the concept of bringing your compute, or processing, to the data, provides several advantages over the more traditional download method: You no longer need to move data from its archived location, and you only pay for the compute needed to do your analysis. A few key points about cost:

* Cost to access: As long as you are performing your processing in the same location as where the data are located in Earthdata Cloud, then the cost to access the data is completely free. The CryoCloud is running in the same `us-west-2` region as where the NASA Earthdata Cloud data are stored.
* Cost to compute: Just like your laptop costs money up front that provides you with certain CPU and memory, the compute resources needed to run your analyses do cost money. This can be thought of as the difference between an upfront cost like purchasing a laptop to process data locally versus something you can pay for as you go. There is a cost associated with the EC2 instance mentioned above, paid for by CryoCloud.
* Cost to store: With _analysis in place_, the data are being streamed directly from its native location in the cloud, so storage is not needed. However you may wish to store analysis outputs or other data using your own S3 bucket which does incur a cost. 

### When To Cloud

## Introduction to ICESat-2

* Scientific use case leveraging cloud computing
* Consider Andy's slides from Coiled Community call: https://github.com/andypbarrett/openscapes_community_chat_coiled


Extras:


Earthdata Cloud is a NASA Earth Science Data Systems program that enables new methods of data analysis and distribution, while preserving most existing analysis and distribution methods. Having data in the cloud enables efficient use of large amounts of data collections and collaborative work with these data. 

Data products, or "collections", from NASA Earthdata are available from Earth Observing System Data and Information System (EOSDIS) Distributed Active Archive Centers (DAACs) that are in the process of moving data holdings to a cloud platform. The Earthdata Cloud is hosted in Amazon Web Services (AWS), with tools and services co-located next to the data. 

As far as quick background on those missions: these are both altimetry-focused missions that describe elevations of sea ice, land ice, forest canopies, water height, urban areas, and more.

ICESat-2 data sets were some of the first data to be migrated to the cloud.  All Level-2 (e.g. ATL03 and beyond) ICESat-2 datasets are available in Earthdata Cloud. 
