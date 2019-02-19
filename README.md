# simple-nodejs-api

Simple NodeJS Rest API returning a JSON datastructure.

In order to execute this demo locally just run from within *simple-nodejs-api* directory:
```
cd simple-nodejs-api/api
node server.js
```

For *Openshift*  deployment execute the following:
```
oc new-app https://github.com/vinicius-martinez/simple-nodejs-api.git --context-dir=api
```

For testing purposes, just hit a simple **HTTP GET** on */api* context. Example:
```
cd simple-nodejs-api
node server.js
curl localhost:8080/api
{"firstName":"SampleName","lastName":"LastName","nickName":"NickName"}
```