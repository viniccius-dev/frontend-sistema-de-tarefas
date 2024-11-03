import { Tag } from '../Tag';
import { Container } from './styles';

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>Desenvolvimento do Sistema de Tarefas - Fatto</h1>

            <footer>
                <Tag title="Custo: R$1.000,00" />
                <Tag title="Data Limite: 13/11/2024" />
            </footer>
        </Container>
    );
}