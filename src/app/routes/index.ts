import express from "express";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "", // Define the base path for the routes e.g., "/users", "/products"
    routes: "", // Placeholder for actual routes, e.g., import and use userRoutes, productRoutes, etc.
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));
export default router;
