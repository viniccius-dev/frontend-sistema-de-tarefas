import { Tag } from '../Tag';
import { Container } from './styles';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

export function Task({ data, onEdit, ...rest }) {
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }).format(value);
    }

    return (
        <Container {...rest}>
            <div>
                <h1>{data.nome_da_tarefa}</h1>

                <footer>
                    <Tag title={`Custo: ${formatCurrency(data.custo)}`} />
                    <Tag title={`Data Limite: ${data.data_limite}`} />
                </footer>
            </div>

            <div>
                <RiEdit2Line title="Editar Tarefa" onClick={onEdit} />
                <RiDeleteBinLine title="Excluir Tarefa" />
            </div>
        </Container>
    );
}
