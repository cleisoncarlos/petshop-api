import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Proprietario from "./proprietario.model.js";

const Animal = db.define(
  "animais",
  {
    animalId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    proprietarioId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
  { underscored: true }
);

//relacionamento da tabela
Animal.belongsTo(Proprietario, { foreignKey: "proprietarioId" });

export default Animal;
