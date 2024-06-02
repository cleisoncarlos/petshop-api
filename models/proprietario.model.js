import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Proprietario = db.define(
  "proprietarios",
  {
    proprietarioId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
  { underscored: true }
);

export default Proprietario;
