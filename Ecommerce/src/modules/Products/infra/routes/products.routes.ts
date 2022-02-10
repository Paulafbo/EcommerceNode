import { Router } from "express";
import ProductController from "../http/controllers/ProductController";


const routes = Router();

routes.post("/", ProductController.create);

routes.get("/", ProductController.list);

routes.get("/:id", ProductController.findId);

routes.put("/:id", ProductController.update);

routes.delete("/:id", ProductController.delete);

export default routes;