import { selector } from 'recoil';
import { filtroTarefasState, listaTarefasState } from '../atoms/todoAtoms';

export const listaTarefasFiltradasState = selector({
   key: 'listaTarefasFiltradasState',
   
   get: ({ get }) => {
    const tarefas = get(listaTarefasState)
    const filter = get(filtroTarefasState)

    if (filter === 'completed') {
        return tarefas.filter((tarefa) => tarefa.completed)
    }

    if (filter === 'pending') {
        return tarefas.filter((tarefa) => !tarefa.completed)
    }

    return tarefas
   },
});
