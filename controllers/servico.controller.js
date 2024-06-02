import ServicoService from "../services/servico.service.js";

async function createServico(req, res, next) {
  try {
    let servico = req.body;
    if (!servico.descricao || !servico.valor || !servico.animalId) {
      throw new Error("Todas as informações são obrigatórias !");
    }
    servico = await ServicoService.createServico(servico);
    res.send(servico);
    logger.info(`POST / servico - ${JSON.stringify(servico)}`);
  } catch (err) {
    next(err);
  }
}

//=======================================================

async function getServicos(req, res, next) {
  try {
    const servicos = await ServicoService.getServicos(req.query.proprietarioId);
    res.send(servicos);
    logger.info("GET /servico");
  } catch (err) {
    next(err);
  }
}

//=======================================================

async function getServico(req, res, next) {
  try {
    res.send(await ServicoService.getServico(req.params.id));
    logger.info("GET /servico");
  } catch (err) {
    next(err);
  }
}

//=======================================================

async function deleteServico(req, res, next) {
  try {
    await ServicoService.deleteServico(req.params.id);
    res.end();
    logger.info("DELETE /servico");
  } catch (err) {
    next(err);
  }
}

//========================================================

async function updateServico(req, res, next) {
  try {
    let servico = req.body;
    if (
      !servico.servico_id ||
      !servico.nome ||
      !servico.tipo ||
      !servico.proprietario_id
    ) {
      throw new Error("Todas as informações são obrigatórias!");
    }
    if (!servico) {
      return res.status(404).send({ message: "Servico não encontrado" });
    }
    res.send(servico);
    logger.info(`PUT / servico - ${JSON.stringify(servico)}`);
    servico = await ServicoService.updateServico(servico);
  } catch (err) {
    next(err);
  }
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
};
