import { Container, Brand, Menu, Search, Content } from "./styles";
import { Header } from "../../components/Header";

import systemTitle from '../../assets/titulo_sistema.png';

export function Home() {
    return (
        <Container>

            <Brand>
                <img src={systemTitle} alt="Sistema de Tarefas" />
            </Brand>

            <Header />

        </Container>
    );
}