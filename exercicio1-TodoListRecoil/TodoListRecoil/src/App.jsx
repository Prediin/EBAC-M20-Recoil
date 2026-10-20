import TodoFilter from './components/TodoFilter'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Card, GlobalStyle, Page, Title } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Card>
          <Title>Lista de Tarefas</Title>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </Card>
      </Page>
    </>
  )
}

export default App
