# Catalogue App

Shared Catalogue app for MFE workgroup "Zain's Phones"

CDN_LOCATION: `true-robin.surge.sh`

FRAMEWORK: `react@18.2`

APP: `catalogue`

## Usage

Update **federated plugin** found in your `vite.config.js` to include

```
remotes: {
    catalogue: "CDN_LOCATION/assets/remoteEntry.js",
}
```

Import this APP into your React application as follows:

```
const catalogue:any = () => import("catalogue/App");
```
To use then:

```
catalogue().then(app => app.default("catalogue")).catch(() => console.log("issue with loading catalogue"))
```

Window Event(s) Fired

EVENT_FIRED: `addToBasket`

This event is fired when the Add to Basket button is clicked. 
To listen to this event in the browser inspector console:
```
window.addEventListener('addToBasket', console.log)
```

The product details are found in detail.product

![alt text](https://github.com/mmt-mfe-workgroup/catalogue/blob/main/payloadImage.png)