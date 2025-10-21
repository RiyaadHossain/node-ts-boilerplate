import app from "./app.js";
// import config from "./config/index.js";
// import { setupProcessHandlers } from "./utils/graceful-shutdown.js";
import http, { Server } from "http";

const PORT = /*  config.PORT || */ 5000;

let server: Server = http.createServer(app);

async function bootstrap() {
  try {
    server.listen(PORT, () =>
      console.log(`✅ Server listening on PORT:${PORT}`)
    ); 

    // setupProcessHandlers(server);
  } catch (err) {
    console.error("❌ Server startup failed:", err);
    process.exit(1);
  }
}

bootstrap();
