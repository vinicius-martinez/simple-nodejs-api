# simple-nodejs-api

Simple NodeJS Rest API returning a JSON datastructure.

In order to execute this demo locally, just run from *simple-nodejs-api/api* directory:

```
node server.js
```

In order to deploy this **API** on *Openshift* execute the following:

```
oc new-app https://github.com/vinicius-martinez/simple-nodejs-api.git --context-dir=api
```