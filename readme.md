# Deploy the app

## Do the following to deploy the app on your server:

        Unzip the downloaded app.
        Deploy it on your web server.
        Browse to the directory where the app from step 2 is locally hosted and open the app config.json file.
        Add a proxy to your app. Refer to Use proxy for details.
        *Important: Make sure that the proxy applied to your app works as expected. The map or widgets might fail if the proxy is set inappropriately.
        Add and register the app. Refer to  Add apps  and Register your app for details.
        Copy and paste the AppID to the appId property in the config.json file.
        Note: Skip step 5 and 6 if the app connects to a web-tire authenticated portal.
        Save the config.json file.
        View the locally hosted app in your browser.

# Customize the app

Use the Import function in Developer Edition to import the downloaded ZIP file, then customize it in the builder.

Optionally, do the following to customize the application by editing JSON files directly:

    Add custom widgets
        Put your custom widget in the widgets folder.
        Add widget into the app's config.json.
        The example below uses the Demo widget. Add it into the config.json file

        {
            "uri": "widgets/Demo/Widget"
        },
    Configure the app and widgets. Refer to JSON configuration reference.
    Reference preferred ArcGIS API for JavaScript. Refer to Change URL of ArcGIS API for JavaScript.

 # rowser requiremets

## Supported browsers for deployed applications*:

    Chrome
    Firefox
    Safari 3+
    Edge
    Internet Explorer 11. Internet Explorer 10 and lower is not supported.

*For 3D apps, refer to the system requirements of ArcGIS API for JavaScript 4.x for details.
ArcGIS API for JavaScript requiremets

Recommend the latest version of ArcGIS JavaScript API for 2D apps, and version 4.x for 3D apps.
