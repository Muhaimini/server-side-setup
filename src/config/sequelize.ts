import { Sequelize } from "sequelize-typescript";
import { ProfileVillage } from "../models";

export const sequelize = new Sequelize({
  port: 5432,
  host: "localhost",
  dialect: "postgres",
  username: "imin",
  password: "admin",
  database: "db_village",
  define: { timestamps: true },
});

sequelize.addModels([ProfileVillage]);

export default sequelize;
