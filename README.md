# simple-nodejs-api

Simple NodeJS Rest API returning a JSON datastructure.

In order to execute this demo locally, just run from *simple-nodejs-api* directory:

```
node server.js
```

In order to deploy  on *Openshift* execute the following:
```
oc new-app openshift/nodejs-010-centos7~https://github.com/vinicius-martinez/simple-nodejs-api.git
```