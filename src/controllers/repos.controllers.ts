import { Request, Response } from 'express';
import {searchService}  from "../services/index.services"
import * as redisClient from "../server/redis-wrapper";

const getPublicRepos = async (req: Request, res: Response): Promise<void> => {

  try {
    const { username } = req.params
    let data: object

    const cache = await redisClient.get(username);

    if(cache){
      data = cache
    }else {
      data = await searchService.fetchData(username);
      redisClient.saveWithTtl(
        username,
        data,
        5
      )
    }

    res.status(200)
      .send({
        username: username,
        data: data
      });
  } catch (error) {
    console.error(error)
    res.status(500)
      .send({
        error
      });
  }

}

export {
  getPublicRepos
}