import { useRecoilState, useRecoilValue } from "recoil";
import { listaTarefasFiltradasState } from "../selectors/todoSelectors";
import { listaTarefasState } from "../atoms/todoAtoms";
import { DeleteButton, EmptyMessage, TaskItem, TaskLabel, TaskList } from "../styles";

function TodoList() {
    const tarefas = useRecoilValue(listaTarefasFiltradasState);
    const [todasTarefas, setTodasTarefas] = useRecoilState(listaTarefasState);

    function alternarTarefa(id) {
        setTodasTarefas(
            todasTarefas.map((tarefa) =>
                tarefa.id === id
                    ? { ...tarefa, completed: !tarefa.completed }
                    : tarefa,
            ),
        );
    };

    function removerTarefa(id) {
        setTodasTarefas(todasTarefas.filter((tarefa) => tarefa.id !== id))
    };

    if (tarefas.length === 0) {
        return <EmptyMessage>Sem tarefas para exibir.</EmptyMessage>
    };

    return (
        <TaskList>
            {tarefas.map((tarefa) => (
                <TaskItem key={tarefa.id}>
                    <TaskLabel>
                        <input
                        type="checkbox"
                        checked={tarefa.completed}
                        onChange={() => alternarTarefa(tarefa.id)}
                        />
                        {tarefa.text}
                    </TaskLabel>
                    <DeleteButton
                    type="button"
                    onClick={() => removerTarefa(tarefa.id)}
                    >
                        X
                    </DeleteButton>
                </TaskItem>
            ))}
        </TaskList>
    )
};

export default TodoList;
