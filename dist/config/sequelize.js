"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    port: 5432,
    host: "localhost",
    dialect: "postgres",
    username: "imin",
    password: "admin",
    database: "db_village",
    define: { timestamps: true },
});
exports.sequelize.addModels([models_1.ProfileVillage]);
exports.default = exports.sequelize;
