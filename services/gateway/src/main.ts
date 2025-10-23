import express from "express";
import { initializeRoutes } from "./infrastructure/http/routes";
import { errorHandler } from "./infrastructure/http/middleware/errorHandler";
import { notFoundHandler } from "./infrastructure/http/middleware/notFound";
import OpenApiValidator from "express-openapi-validator";
import path from "path";

const app = express();
app.use(express.json());

const apiSpec = path.join(process.cwd(), "openapi.yaml");

async function main() {
  // Aplica OpenAPI Validator como middleware
  app.use(
    await OpenApiValidator.middleware({
      apiSpec,
      validateRequests: true,   // valida las requests entrantes
      validateResponses: false, // opcional, puedes activarlo si quieres
    })
  );

  initializeRoutes(app);
  app.use(notFoundHandler);
  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () =>
    console.log(`✅ Service running on http://localhost:${PORT}`)
  );
}

main().catch((err) => {
  console.error("Error starting server:", err);
});
export const viteNodeApp = app;