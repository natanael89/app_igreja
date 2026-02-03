require('dotenv').config();

module.exports = {
    development: {
       url: process.env.DATABASEL_URL,
       dialect: "postgres",
       dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
       },
    },
    production: {
        url: process.env.DATABASEL_URL,
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
}
