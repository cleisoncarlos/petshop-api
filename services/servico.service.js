import ServicoRepository from "../repositories/servico.repository.js";

async function createServico(servico) {
  return await ServicoRepository.insertServico(servico);
}

async function getServicos(proprietarioId) {
  // filtro na rota para pegar os servicos pelo proprietario do animal
  if (proprietarioId) {
    return await ServicoRepository.getServiceByProprietarioId(proprietarioId);
  }

  // if (productId) {
  //   return await ServicoRepository.getServicosByProprietarioId(productId);
  //  }
  return await ServicoRepository.getServicos();
}

async function getServico(id) {
  return await ServicoRepository.getServico(id);
}

async function deleteServico(id) {
  await ServicoRepository.deleteServico(id);
}

async function updateServico(servico) {
  await ServicoRepository.updateServico(servico);
}

async function findByProprietarioId(id) {
  return await ServicoRepository.findByProprietarioId(id);
}

export default {
  createServico,
  getServicos,
  getServico,
  deleteServico,
  updateServico,
  findByProprietarioId,
};
