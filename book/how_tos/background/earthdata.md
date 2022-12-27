# Earthdata Login

## Overview

NASA data are stored at one of several Distributed Active Archive Centers (DAACs). If you're interested in available data for a given area and time of interest, the [Earthdata Search](https://earthdata.nasa.gov/) portal provides a convenient web interface.

## Why do I need an Earthdata login?

Each participant will need a login. We will be teaching you ways to programmatically access NASA data from within your Python scripts. You will need to enter your Earthdata username and password in order for this to work.

## Getting an Earthdata login

If you do not already have an Earthdata login, then navigate to the [Earthdata Login](https://urs.earthdata.nasa.gov/) page, a username and password, and then record this somewhere for use during the tutorials:

![earthdata-login](../img/earthdata-login.png)

## Configure programmatic access to NASA servers

If you use web interfaces to retrieve nasa data such as
[Earthdata Search](https://earthdata.nasa.gov/) you are prompted to login.
We will be using software to retrieve data from NASA Servers during the hackweek,
so you must store your credentials on the JupyterHub as explained in
[this documentation](https://wiki.earthdata.nasa.gov/display/EL/How+To+Access+Data+With+cURL+And+Wget).

Run the following commands on the JupyterHub:

```{important}
In the below command, replace `EARTHDATA_LOGIN` with your personal username and
`EARTHDATA_PASSWORD` with your password
```

```shell
echo 'machine urs.earthdata.nasa.gov login "EARTHDATA_LOGIN" password "EARTHDATA_PASSWORD"' > ~/.netrc
chmod 0600 ~/.netrc
```
