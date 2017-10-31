# SFDX  App

This app is to take an inbound platform event and display the value on a line chart component. 

The chart component can be embedded anywhere in the lightning world

## Dev, Build and Test

clone this repo: 

```
git clone https://github.com/adamSellers/chartStreamer.git
```
then do stuff with it! For example, create a new instance of Salesforce and deploy this package to it.. 

```
sfdx force:org:create -a myNewScratchOrg
sfdx force:source:push -u myNewScratchOrg
```

you get the rest ;)

If the SFDX commands don't mean much to you, then i'd start [here!](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)


## Resources

Totally using this component here in [this package](https://github.com/mshanemc/lightningStreamer)

Also using chart.js v2.6 in the static resources bit. 


## Issues

I'm sure there's plenty in there somewhere.. 

## Final Notes
This is built to help other SE's demo Salesforce and should not be considered as production ready, worthy or otherwise. This comes with little to no (read: no) support. 


