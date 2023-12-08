"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODELS = exports.DB_CONFIG = void 0;
const models_1 = require("../../models");
exports.DB_CONFIG = {
    define: { timestamps: true },
    dialect: "postgres",
    database: "db_village",
    host: "localhost",
    password: "admin",
    username: "imin",
    port: 5432,
};
exports.MODELS = [models_1.ProfileVillage];
