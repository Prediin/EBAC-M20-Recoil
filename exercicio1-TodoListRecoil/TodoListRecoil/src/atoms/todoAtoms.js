import { atom } from 'recoil';

function localStorageEffect(key) {
    return ({ setSelf, onSet }) => {
        const valorSalvo = localStorage.getItem(key);

        if (valorSalvo !== null) {
            try {
                setSelf(JSON.parse(valorSalvo));
            } catch {
                localStorage.removeItem(key);
            }
        }

        onSet((newValue, _, isReset) => {
            if (isReset) {
                localStorage.removeItem(key);
                return;
            }

            localStorage.setItem(key, JSON.stringify(newValue));
        });
    };
}

export const listaTarefasState = atom({
    key: 'listaTarefasState',
    default: [],
    effects: [localStorageEffect('todo-list')],
});

export const filtroTarefasState = atom({
    key: 'filtroTarefasState',
    default: 'all',
    effects: [localStorageEffect('todo-filter')],
});
