const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app) {
  app.use('/posts', 
  createProxyMiddleware({ 
    target: 'https://react-posts-app.herokuapp.com', 
    changeOrigin: true }));

  app.use('/api/v1/new', 
  createProxyMiddleware({ 
  target: 'https://react-posts-app.herokuapp.com', 
  changeOrigin: true }));

  app.use('/api/v1/auth_by_email', 
  createProxyMiddleware({ 
  target: 'https://react-posts-app.herokuapp.com', 
  changeOrigin: true }));



  app.use(
    createProxyMiddleware("/api/v1/posts",{
      target: "https://react-posts-app.herokuapp.com",
      changeOrigin: true
    })
  );

  app.use("/api/v1/auth_by_token",
    createProxyMiddleware({
      target: "https://react-posts-app.herokuapp.com",
      changeOrigin: true
    })
  );
}

