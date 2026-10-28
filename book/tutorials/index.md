# Tutorials

These tutorials consist of Jupyter Notebooks that can be run in our
[JupyterHub](https://hub.stratusgeo.org). If you are joining StratusGeo, you have access to a JupyterHub environment
with all the necessary Python software packages installed that are needed to run
through these tutorials interactively. On JupyterHub, your home directory persists
so any changes you make to the tutorials will be saved and be there for you next
time you log in.

Note that the tutorials available in this JupyterBook are updated to reflect changes in the underlying software.
As a result, some code presented in these videos may differ from the updated Jupyter Notebook content.

All live tutorial recordings are available via the StratusGeo YouTube channel. The tutorials are listed below in two ways: **by mission/data source** and **by topic**, with links to recordings where available. Tutorials that use several datasets or cover several topics appear more than once.

- [Browse by mission / data source](#browse-by-data-source)
- [Browse by topic](#browse-by-topic)

---

## Browse by data source

### ICESat-2

| Tutorial | Recording |
| --- | --- |
| [NASA Earthdata Cloud and data access using earthaccess and icepyx](NASA-Earthdata-Cloud-Access/index.md) | [Recording](https://youtu.be/VRG896cMtT0) |
| ↳ [Introduction to NASA Earthdata Cloud](NASA-Earthdata-Cloud-Access/1.Intro-Earthdata-Cloud.md) | (part of series recording) |
| ↳ [Earthdata Search](NASA-Earthdata-Cloud-Access/2.earthdata_search.md) | (part of series recording) |
| ↳ [Data access with earthaccess](NASA-Earthdata-Cloud-Access/3.earthaccess.ipynb) | (part of series recording) |
| ↳ [Data access with icepyx (ATL08)](NASA-Earthdata-Cloud-Access/4.icepyx.ipynb) | (part of series recording) |
| ↳ [Data access with icepyx (ATL06)](NASA-Earthdata-Cloud-Access/4b.icepyx-ATL06.ipynb) | (part of series recording) |
| [ICESat-2 and Landsat cloud access and data integration](IS2_Landsat_integration/IS2_cloud_Landsat_integration.ipynb) | [Recording](https://youtu.be/QNrDlwiomgc) |
| [Streaming cloud-hosted ICESat-2 ATL15 (Gridded Antarctic/Arctic Land Ice Height) to calculate dh/dt trends](IS2_ATL15_dhdt/ICESat2_ATL15_dhdt.ipynb) | No recording |
| [NASA ICESat-2 subglacial lake investigation using ice-surface height anomalies](IS2_ATL15_surface_height_anomalies/IS2_ATL15_surface_height_anomalies.ipynb) | [Recording](https://youtu.be/HnGsCKyxkPo) |
| [ICESat-2 ATL10-h5coro processing large-scale time series](https://book.cryointhecloud.com/icesat2-atl10-h5coro-large-scale-time-series) | [Recording](https://youtu.be/iSRjtXoflRU) |
| [NASA SlideRule Earth](SlideRule_applications/SlideRule_applications.ipynb) | [Recording](https://youtu.be/2kb_AU7mLzA) |
| [Determining ice sheet change using Greenland Ice Mapping Project (GrIMP) tools](GrIMP/GrIMP_tutorial_AGU23.ipynb) | [Recording](https://youtu.be/MSp7zke8ReE) |
| [SWOT HR elevation comparison to ICESat-2](SWOT/SWOT_HR_w_IS2_old.ipynb) | [Recording](https://youtu.be/YZKIW6rNtY4) |
| [SWOT HR vs. ICESat-2 (SWOT series notebook)](SWOT/2_SWOT_HR_vs_ICESat2.ipynb) | No recording |

### SWOT

| Tutorial | Recording |
| --- | --- |
| [SWOT tutorial series overview](SWOT/index.md) | — |
| [SWOT High Resolution data search and access](SWOT/0_SWOT_LRHR_access.ipynb) | [Recording](https://youtu.be/lno-eJZnS0U) |
| [SWOT HR coverage](SWOT/1_SWOT_HR_coverage.ipynb) | No recording |
| [SWOT HR vs. ICESat-2 (SWOT series notebook)](SWOT/2_SWOT_HR_vs_ICESat2.ipynb) | No recording |
| [SWOT HR vs. LR](SWOT/3_SWOT_HR_vs_LR.ipynb) | No recording |

### Landsat & Sentinel (including derived velocity products)

| Tutorial | Recording |
| --- | --- |
| [ICESat-2 and Landsat cloud access and data integration](IS2_Landsat_integration/IS2_cloud_Landsat_integration.ipynb) | [Recording](https://youtu.be/QNrDlwiomgc) |
| [ITS_LIVE Python Library Demo: Time Series of Ice Flow Speed at a Point](ITS_LIVE/ITS_LIVE_plot_point_timeseries.ipynb) | Recording (link needed) <!-- TODO: add ITS_LIVE recording URL --> |
| [Determining ice sheet change using Greenland Ice Mapping Project (GrIMP) tools](GrIMP/GrIMP_tutorial_AGU23.ipynb) | [Recording](https://youtu.be/MSp7zke8ReE) |

### Airborne missions

| Tutorial | Recording |
| --- | --- |
| [CASALS L1B waveforms](CASAL/L1B_Waveforms_tutorial.ipynb) | No recording |
| [ICESat-2 and Landsat cloud access and data integration](IS2_Landsat_integration/IS2_cloud_Landsat_integration.ipynb) (uses Operation IceBridge ATM lidar) | [Recording](https://youtu.be/QNrDlwiomgc) |

### Ground-based instruments

| Tutorial | Recording |
| --- | --- |
| [Analysis-ready, cloud-optimized data: writing zarr directories](Zarr_with_ApRES/ARCOdata_writingZarrs.ipynb) (ApRES radar) | [Recording](https://youtu.be/CkQW_3gcFaM) |

### Platform & mission-agnostic tools

| Tutorial | Recording |
| --- | --- |
| [StratusCloud demo](https://book.cryointhecloud.com/cryocloud-demo) | [Recording](https://www.youtube.com/watch?v=ub86G53V12s) |
| [Parallelized cloud computing with Dask for geoscientists](Dask/dask_for_geoscientists.ipynb) | [Recording](https://youtu.be/8B9H5Q5kmos) |
| [Analysis-ready, cloud-optimized data: writing zarr directories](Zarr_with_ApRES/ARCOdata_writingZarrs.ipynb) | [Recording](https://youtu.be/CkQW_3gcFaM) |
| [Integrating cloud storage with StratusGeo](https://book.cryointhecloud.com/integrating-cloud-storage) | No recording |
| Publishing tools and storing data with Ghub | [Recording](https://youtu.be/wwezHsz1j9M) |

---

## Browse by topic

### Cryosphere

#### Ice sheets & glaciers

| Tutorial | Mission / data | Recording |
| --- | --- | --- |
| [Streaming cloud-hosted ICESat-2 ATL15 to calculate dh/dt trends](IS2_ATL15_dhdt/ICESat2_ATL15_dhdt.ipynb) | ICESat-2 | No recording |
| [NASA ICESat-2 subglacial lake investigation using ice-surface height anomalies](IS2_ATL15_surface_height_anomalies/IS2_ATL15_surface_height_anomalies.ipynb) | ICESat-2 | [Recording](https://youtu.be/HnGsCKyxkPo) |
| [ICESat-2 and Landsat cloud access and data integration](IS2_Landsat_integration/IS2_cloud_Landsat_integration.ipynb) | ICESat-2, Landsat, IceBridge ATM | [Recording](https://youtu.be/QNrDlwiomgc) |
| [Determining ice sheet change using GrIMP tools](GrIMP/GrIMP_tutorial_AGU23.ipynb) | GrIMP, ICESat-2 | [Recording](https://youtu.be/MSp7zke8ReE) |
| [ITS_LIVE Python Library Demo: Time Series of Ice Flow Speed at a Point](ITS_LIVE/ITS_LIVE_plot_point_timeseries.ipynb) | ITS_LIVE (Landsat, Sentinel) | Recording (link needed) |
| [NASA SlideRule Earth](SlideRule_applications/SlideRule_applications.ipynb) | ICESat-2 | [Recording](https://youtu.be/2kb_AU7mLzA) |
| [Data access with icepyx (ATL06)](NASA-Earthdata-Cloud-Access/4b.icepyx-ATL06.ipynb) | ICESat-2 | (part of [series recording](https://youtu.be/VRG896cMtT0)) |
| [Analysis-ready, cloud-optimized data: writing zarr directories](Zarr_with_ApRES/ARCOdata_writingZarrs.ipynb) | ApRES | [Recording](https://youtu.be/CkQW_3gcFaM) |

#### Sea ice

| Tutorial | Mission / data | Recording |
| --- | --- | --- |
| [ICESat-2 ATL10-h5coro processing large-scale time series](https://book.cryointhecloud.com/icesat2-atl10-h5coro-large-scale-time-series) | ICESat-2 | [Recording](https://youtu.be/iSRjtXoflRU) |

#### Snow

| Tutorial | Mission / data | Recording |
| --- | --- | --- |
| [NASA SlideRule Earth](SlideRule_applications/SlideRule_applications.ipynb) (Grand Mesa example) | ICESat-2 | [Recording](https://youtu.be/2kb_AU7mLzA) |

### Hydrology

| Tutorial | Mission / data | Recording |
| --- | --- | --- |
| [SWOT High Resolution data search and access](SWOT/0_SWOT_LRHR_access.ipynb) | SWOT | [Recording](https://youtu.be/lno-eJZnS0U) |
| [SWOT HR coverage](SWOT/1_SWOT_HR_coverage.ipynb) | SWOT | No recording |
| [SWOT HR vs. ICESat-2 (SWOT series notebook)](SWOT/2_SWOT_HR_vs_ICESat2.ipynb) | SWOT, ICESat-2 | No recording |
| [SWOT HR vs. LR](SWOT/3_SWOT_HR_vs_LR.ipynb) | SWOT | No recording |
| [SWOT HR elevation comparison to ICESat-2](SWOT/SWOT_HR_w_IS2_old.ipynb) | SWOT, ICESat-2 | [Recording](https://youtu.be/YZKIW6rNtY4) |
| [NASA ICESat-2 subglacial lake investigation using ice-surface height anomalies](IS2_ATL15_surface_height_anomalies/IS2_ATL15_surface_height_anomalies.ipynb) | ICESat-2 | [Recording](https://youtu.be/HnGsCKyxkPo) |

### Biology & ecosystems

| Tutorial | Mission / data | Recording |
| --- | --- | --- |
| [Data access with icepyx (ATL08 vegetation heights)](NASA-Earthdata-Cloud-Access/4.icepyx.ipynb) | ICESat-2 | (part of [series recording](https://youtu.be/VRG896cMtT0)) |
| [CASALS L1B waveforms](CASAL/L1B_Waveforms_tutorial.ipynb) | CASALS (airborne lidar) | No recording |

### Machine learning

*No tutorials yet. Contributions welcome!*

### Data access, cloud computing & data publishing

| Tutorial | Mission / data | Recording |
| --- | --- | --- |
| [StratusGeo demo](../getting_started/stratusgeo_demo/StratusGeo_demo.ipynb) | — | [Recording](https://www.youtube.com/watch?v=ub86G53V12s) |
| [NASA Earthdata Cloud and data access using earthaccess and icepyx](NASA-Earthdata-Cloud-Access/index.md) | ICESat-2 | [Recording](https://youtu.be/VRG896cMtT0) |
| [SWOT High Resolution data search and access](SWOT/0_SWOT_LRHR_access.ipynb) | SWOT | [Recording](https://youtu.be/lno-eJZnS0U) |
| [NASA SlideRule Earth](SlideRule_applications/SlideRule_applications.ipynb) | ICESat-2 | [Recording](https://youtu.be/2kb_AU7mLzA) |
| [ICESat-2 ATL10-h5coro processing large-scale time series](../external/ICESat2_ATL10-h5coro_large_scale_time_series.ipynb) | ICESat-2 | [Recording](https://youtu.be/iSRjtXoflRU) |
| [Parallelized cloud computing with Dask for geoscientists](Dask/dask_for_geoscientists.ipynb) | — | [Recording](https://youtu.be/8B9H5Q5kmos) |
| [Analysis-ready, cloud-optimized data: writing zarr directories](Zarr_with_ApRES/ARCOdata_writingZarrs.ipynb) | ApRES | [Recording](https://youtu.be/CkQW_3gcFaM) |
| [Integrating cloud storage with StratusGeo](../how_tos/data_storage/integrating_cloud_storage.ipynb) | — | No recording |
| Publishing tools and storing data with Ghub | — | [Recording](https://youtu.be/wwezHsz1j9M) |
