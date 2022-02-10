import { Router } from "express";
import CategoryController from "../controllers/CategoryController";

const routes = Router();

routes.post("/", CategoryController.create);
routes.get("/", CategoryController.list);
routes.get("/:id", CategoryController.findId);
routes.delete("/:id", CategoryController.delete);
routes.put("/:id", CategoryController.update);

export default routes;