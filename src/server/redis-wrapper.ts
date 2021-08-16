import redis from "redis"
import config from "../config"
import { promisify } from 'util';

const client = redis.createClient({
  host: config.REDIS_HOST,
  port: config.REDIS_PORT,
  password: config.REDIS_PASSWORD
});

const setAsyncEx = promisify(client.setex).bind(client)
const getAsync = promisify(client.get).bind(client)

client.on("error", error => {
  throw new Error(error);
})

const saveWithTtl = async (key: string, value: unknown, ttlSeconds = 60) => {
  return await setAsyncEx(key, ttlSeconds, JSON.stringify(value))
}

const get = async (key:string) => {
  const jsonString = await getAsync(key)
  if(jsonString){
    console.log("se encuentra data")
    return JSON.parse(jsonString)
  }else {
    console.log("no se encuentra data")
    return null 
  }
}

export {
  saveWithTtl,
  get
}