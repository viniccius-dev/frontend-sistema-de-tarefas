import { Tag } from '../Tag';
import { Container } from './styles';
import { RiEdit2Line, RiDeleteBinLine, RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';

import { api } from '../../services/api';

export function Task({ data, onEdit, onMoveUp, onMoveDown, ...rest }) {
    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }).format(value);
    }

    async function handleRemove() {
        const confirm = window.confirm("Deseja realmente remover a tarefa?");

        if(confirm) {
            try {
                await api.delete(`/tasks/${data.identificador_da_tarefa}`);
                alert("Tarefa deletada com sucesso.");
                window.location.reload();
            } catch (error) {
                const errorMessage = error.response?.data?.message || "Ocorreu um erro ao processar sua solicitação.";
                alert(errorMessage);
            }
        }
    }

    const highlight = String(data.custo >= 1000);

    return (
        <Container $highlight={highlight} {...rest}>

            <div className="left-section">
                <div className="order-task-controls">
                    <RiArrowUpLine title="Mover para cima" onClick={onMoveUp} />
                    <RiArrowDownLine title="Mover para baixo" onClick={onMoveDown} />
                </div>

                <div className="description">
                    <h1>{data.nome_da_tarefa}</h1>

                    <footer>
                        <Tag title={`Custo: ${formatCurrency(data.custo)}`} />
                        <Tag title={`Data Limite: ${data.data_limite}`} />
                    </footer>
                </div>
            </div>

            <div className="edit-task-controls">
                <RiEdit2Line title="Editar Tarefa" onClick={onEdit} />
                <RiDeleteBinLine title="Excluir Tarefa" onClick={handleRemove} />
            </div>
            
        </Container>
    );
}
