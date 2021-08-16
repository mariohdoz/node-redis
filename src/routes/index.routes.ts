import express = require('express');
import { newRouter } from './searchRepos.routes';

const app = express();

app.use(newRouter);

app.all('*', async(req, res) => {
  res.status(500)
    .send(
      "Not Found"
    )
}); 
 
export {
  app as routes 
};