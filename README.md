# simple-nodejs-api

Simple NodeJS Rest API returning a JSON datastructure.

In order to execute this demo locally just run from within *simple-nodejs-api* directory:
```
cd simple-nodejs-api
node server.js
```

For *Openshift*  deployment execute the following:
```
oc new-app openshift/nodejs-010-centos7~https://github.com/vinicius-martinez/simple-nodejs-api.git
```

For testing purposes, just hit a simple **HTTP GET** on */api* context. Example:
```
cd simple-nodejs-api
node server.js
curl localhost:8080/api
{"firstName":"SampleName","lastName":"LastName","nickName":"NickName"}
```