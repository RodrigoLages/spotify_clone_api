const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASS, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
    console.error("Error stack trace:", error.stack);
  }
})();

module.exports = sequelize;
