import { useRecoilState, useRecoilValue } from 'recoil';
import Tarefa from "../Tarefa";
import { useInput } from "../../hooks/useInput";
import { userState } from '../../state/user';
import { tarefasDoUsuarioState } from '../../state/tarefas';
import { Form, Input, Button, List } from "./styles";

function criarId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
}

function ListaTarefas() {
  const usuario = useRecoilValue(userState);
  const tarefa = useInput();
  const [tarefas, setTarefas] = useRecoilState(tarefasDoUsuarioState(usuario.nome));

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = tarefa.valor.trim();
    if (!texto) return;
    setTarefas((tarefasAtuais) => [...tarefasAtuais, {
      id: criarId(), usuario: usuario.nome, texto, concluida: false,
    }]);
    tarefa.limpar();
  };

  const alternarTarefa = (id) => setTarefas((tarefasAtuais) => tarefasAtuais.map((item) =>
    item.id === id ? { ...item, concluida: !item.concluida } : item
  ));

  const removerTarefa = (id) => setTarefas((tarefasAtuais) =>
    tarefasAtuais.filter((item) => item.id !== id)
  );

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Digite uma nova tarefa" value={tarefa.valor} onChange={tarefa.onChange} />
        <Button type="submit">Adicionar</Button>
      </Form>
      <List>
        {tarefas.map((item) => (
          <Tarefa key={item.id} texto={item.texto} concluida={item.concluida}
            onAlternar={() => alternarTarefa(item.id)} onRemover={() => removerTarefa(item.id)} />
        ))}
      </List>
    </>
  );
}

export default ListaTarefas;
