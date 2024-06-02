import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "./animal.model.js";

const Servico = db.define(
  "servicos",
  {
    servicoId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    animalId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  // underscore true mapeia camelcase pra trabalhar com snakecase que ta no banco de dados
  { underscored: true }
);

//relacionamento da tabela
Servico.belongsTo(Animal, { foreignKey: "animalId" });

export default Servico;
