import { app } from "./server";
import config from "../config/index";

const start = async () => {

  app.listen(config.PORT, () => {
    console.log(`Ticket Escuchando en puerto ${config.PORT}!!`);
  });

}

start();