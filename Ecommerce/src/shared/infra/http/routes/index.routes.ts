import { Router } from "express";
import { Request, Response} from "express";
import { getRepository, Repository } from "typeorm";
import Client from "../../../../modules/clients/infra/typeorm/entities/Client";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import categorysRoutes from "../../../../modules/category/infra/http/routes/category.routes";
import productsRoutes from "../../../../modules/Products/infra/routes/products.routes";
import ordersRoutes from "../../../../modules/Orders/infra/http/routes/orders.routes";

const routes = Router();

routes.use("/clientes", clientsRoutes);

routes.use("/categorias", categorysRoutes);

routes.use("/produtos", productsRoutes);

routes.use("/pedidos", ordersRoutes);


export default routes;