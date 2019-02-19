var express = require("express");
var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip, function() {
    console.log("Server running on: " + ip + ":" + port);
});

app.get("/api", (req, res, next) => {
    res.json(["firstName: SampleName",
                "lastName: LastName",
                "NickName: NickName"]);
});