import { Router } from "express";
import ClientsController from "../../http/controllers/ClientsController";
import ClientRepository from "../../typeorm/ClientRepository";

const routes = Router();

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientsController.findId);

routes.put("/:id", ClientsController.update);

routes.delete("/:id", ClientsController.delete);

routes.get("/pedido/:id", ClientsController.listOrderClient);


export default routes;