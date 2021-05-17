const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // console.log("ASdf");
    app.use(
        createProxyMiddleware("/login/oauth/access_token", 
        { target: "https://github.com" ,
        changeOrigin:true
    }));

}

module.exports = function(app) {
    app.use(
        createProxyMiddleware("/user/repos", 
        { target: "https://api.github.com/" ,
        changeOrigin:true
    }));

}