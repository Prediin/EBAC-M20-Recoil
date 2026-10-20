import { useRecoilState } from "recoil";
import { filtroTarefasState } from "../atoms/todoAtoms";
import { FilterButton, Filters } from "../styles";

function TodoFilter() {
    const [filter, setFilter] = useRecoilState(filtroTarefasState);

    return (
        <Filters aria-label="Filtrar tarefas">
            <FilterButton
            type="button"
            onClick={() => setFilter('all')}
            disabled={filter === 'all'}
            >
                Todas
            </FilterButton>
            <FilterButton
            type="button"
            onClick={() => setFilter('completed')}
            disabled={filter === 'completed'}
            >
                Concluídas
            </FilterButton>
            <FilterButton
            type="button"
            onClick={() => setFilter('pending')}
            disabled={filter === 'pending'}
            >
                Pendentes
            </FilterButton>
        </Filters>
    )
};

export default TodoFilter;
