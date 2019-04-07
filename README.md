# Google Cloud Functions with Node.js and Express

_Check out the [Medium article](https://medium.com) on this repo for a detailed explanation on how to create and deploy an Express app on Google Cloud Functions._

## Run locally

You will need Node and `npm` installed locally in order to be able to run the app. First, install node dependencies

    npm install

To run the app

    node index.js

The Express app will now be running on port 5555 and can be accessed on http://localhost:5555. The following endpoints will be accessible:

    http://localhost:5555/users
    http://localhost:5555/users/{userId}

## Deploy to Google Cloud

To deploy to Google Cloud install the Google Cloud SDK on your machine and run `gcloud init` to authenticate and set the GCP project that you wish to deploy to.

To deploy run

    gcloud functions deploy <NAME> --runtime nodejs8 --trigger-http --entry-point app

Where `<NAME>` is the name that you wish to give the function. e.g. `first-function`.
