import { Tag } from '../Tag';
import { Container } from './styles';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                <h1>Desenvolvimento do Sistema de Tarefas - Fatto</h1>

                <footer>
                    <Tag title="Custo: R$1.000,00" />
                    <Tag title="Data Limite: 13/11/2024" />
                </footer>
            </div>

            <div>
                <RiEdit2Line title="Editar Tarefa" />
                <RiDeleteBinLine title="Excluir Tarefa" />
            </div>
        </Container>
    );
}
