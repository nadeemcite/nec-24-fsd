import mysql from 'mysql2/promise';

export const getConnection = async () =>{
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'mysqluser',
        password: 'mysqlpwd',
        database: 'mysqldb',
    });
    return connection;
}