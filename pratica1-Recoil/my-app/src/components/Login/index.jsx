import { useSetRecoilState } from 'recoil';
import { useInput } from "../../hooks/useInput";
import { userState } from '../../state/user';
import { Form, Input, Button } from "./styles";

function Login() {
  const nomeDoUsuario = useInput();
  const setUsuario = useSetRecoilState(userState);

  const handleLogin = (e) => {
    e.preventDefault();
    const nome = nomeDoUsuario.valor.trim();
    if (!nome) return;

    setUsuario({ nome, estaLogado: true });
  };

  return (
    <Form onSubmit={handleLogin}>
      <Input type="text" placeholder="Digite seu nome" value={nomeDoUsuario.valor}
        onChange={nomeDoUsuario.onChange} />
      <Button type="submit">Entrar</Button>
    </Form>
  );
}

export default Login;
