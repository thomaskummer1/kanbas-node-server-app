import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import express from "express";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);