import { atom, selectorFamily } from 'recoil';

const STORAGE_KEY = 'tarefasPorUsuario';

function normalizarNome(nome) {
  return nome.trim().toLocaleLowerCase();
}

function carregarTarefas() {
  try {
    const tarefas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return tarefas && typeof tarefas === 'object' && !Array.isArray(tarefas) ? tarefas : {};
  } catch {
    return {};
  }
}

const persistirTarefas = ({ onSet }) => {
  onSet((tarefas) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  });
};

export const tarefasPorUsuarioState = atom({
  key: 'tarefasPorUsuarioState',
  default: carregarTarefas(),
  effects_UNSTABLE: [persistirTarefas],
});

export const tarefasDoUsuarioState = selectorFamily({
  key: 'tarefasDoUsuarioState',
  get: (nome) => ({ get }) => {
    const tarefasPorUsuario = get(tarefasPorUsuarioState);
    return tarefasPorUsuario[normalizarNome(nome)] || [];
  },
  set: (nome) => ({ set }, novasTarefas) => {
    const chave = normalizarNome(nome);
    set(tarefasPorUsuarioState, (tarefasPorUsuario) => {
      const tarefasAtuais = tarefasPorUsuario[chave] || [];
      const tarefas = typeof novasTarefas === 'function'
        ? novasTarefas(tarefasAtuais)
        : novasTarefas;

      return { ...tarefasPorUsuario, [chave]: tarefas };
    });
  },
});
