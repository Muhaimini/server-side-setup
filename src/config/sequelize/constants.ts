import { ProfileVillage } from "../../models";
import { Options } from "sequelize";

export const DB_CONFIG: Options = {
  define: { timestamps: true },
  dialect: "postgres",
  database: "db_village",
  host: "localhost",
  password: "admin",
  username: "imin",
  port: 5432,
};

export const MODELS = [ProfileVillage];
