import "reflect-metadata";

import { DataSource } from "typeorm";
import { Profile } from "./models/Profile";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "mysqluser",
  password: "mysqlpwd",
  database: "mysqldb",
  logging: true, // If set to true, it will log all the sql queries running
  synchronize: true, // If set true it will synchronize all the entities into tables
  entities: [Profile],
});

AppDataSource.initialize()
  .then(() => {
    // if the db initialization was successful
    console.log("DB Initialized successfully");
  })
  .catch((err) => {
    // if db initialization was not successful'
    console.log("DB Initialization unsuccessful");
    console.error(err);
  });
