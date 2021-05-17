const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    console.log("ASdf");
    app.use(
        createProxyMiddleware("/access_sadfsatoken", 
        { target: "https://github.com" ,
        changeOrigin:true
    }));


//     app.use("/login/oauth/access_token", 
//     createProxyMiddleware({
//        target: "https://github.com",
//        changeOrigin: true
//     })
//  );

//  module.exports = function(app) {
//     app.use(
//       '/login/oauth/access_token',
//       createProxyMiddleware({
//         target: 'https://github.com',
//         changeOrigin: true,
//       })
//     );
//   };

// };


// module.exports=function(app){
//     app.use(
//         proxy(
//             "/access_token",
//             {
//                 target:"https://github.com/login/oauth",
//                 changeOrigin:true
//             }
//         )
//     )
// }


// module.exports=function(app){
//     app.use(
//         proxy(
//             "/authorize",
//             {
//                 target:"https://github.com/login/oauth",
//                 changeOrigin:true
//             }
//         )
//     )
}