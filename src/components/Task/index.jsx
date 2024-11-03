import { Container } from './styles';

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>Desenvolvimento do Sistema de Tarefas - Fatto</h1>
        </Container>
    );
}