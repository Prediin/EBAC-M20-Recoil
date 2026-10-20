import { useState } from "react";
import { useRecoilState } from "recoil";
import { listaTarefasState } from "../atoms/todoAtoms";
import { Form, Input, PrimaryButton } from "../styles";

function TodoForm() {
    const [texto, setTexto] = useState('');
    const [tarefas, setTarefas] = useRecoilState(listaTarefasState);

    function adicionarTarefa(e) {
        e.preventDefault();

        const textoFormatado = texto.trim();

        if (!textoFormatado) {
            return
        };

        const novaTarefa = {
            id: Date.now(),
            text: textoFormatado,
            completed: false,
        };

        setTarefas([...tarefas, novaTarefa]);
        setTexto('');
    }

    return (
        <Form onSubmit={adicionarTarefa}>
            <Input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Nova tarefa"
            />
            <PrimaryButton type="submit" aria-label="Adicionar tarefa">+</PrimaryButton>
        </Form>
    )
};

export default TodoForm;
