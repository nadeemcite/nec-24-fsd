import "reflect-metadata"
import { DataSource, Entity, Column, PrimaryColumn } from "typeorm"

// ORM
@Entity()
export class Person{
    @PrimaryColumn()
    name:string

    @Column()
    age: number

    @Column()
    phone: string
}

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "mysqluser",
    password: "mysqlpwd",
    database: "mysqldb",
    synchronize: true,
    logging: true,
    entities: [Person],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
.then(() => {
    console.log("DB Initialized")
})
.catch((error) => console.log(error))

// TypeORM, Prisma