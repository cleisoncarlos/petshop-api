import { Sequelize } from "sequelize";

import "dotenv/config";

//'database', 'username', 'password'
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    // se não colocar o define ele gera tabelas de data de criação e alteração
    define: {
      timestamps: false,
    },
    logging: false, // não retorna o teste de conexão 'SELECT 1+1 AS result' no log
  }
);

// Testa a conexão e cria logs de erros
sequelize
  .authenticate()
  .then(() => {
    logger.info(
      `Connection has been established on database ${process.env.DB_NAME} successfully.`
    );
  })
  .catch((err) => {
    logger.error(
      `Unable to connect to the ${process.env.DB_NAME}: ${err.message}`
    );
  });

export default sequelize;
