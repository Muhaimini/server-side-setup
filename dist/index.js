"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const v1_1 = require("./routes/v1");
(0, config_1.onInitializeApp)({
    onSuccess: (_, app) => {
        app.use("/v1", v1_1.router);
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`-> Server is running on port ${process.env.SERVER_PORT}`);
            console.log("-> Connected to our database");
        });
    },
    onError: (error) => console.log("Sequelize connection error: ", error),
});
