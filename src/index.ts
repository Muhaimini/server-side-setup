import { onInitializeApp } from "./config";
import { router as routerV1 } from "./routes/v1";

onInitializeApp({
  onSuccess: (_, app) => {
    app.use("/v1", routerV1);

    app.listen(process.env.SERVER_PORT, () => {
      console.log(`-> Server is running on port ${process.env.SERVER_PORT}`);
      console.log("-> Connected to our database");
    });
  },
  onError: (error) => console.log("Sequelize connection error: ", error),
});
