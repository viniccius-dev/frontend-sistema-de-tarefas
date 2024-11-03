import { Container, Brand, Menu, Search, Content } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import systemTitle from '../../assets/titulo_sistema.png';
import { FiSearch } from "react-icons/fi";

export function Home() {
    return (
        <Container>

            <Brand>
                <img src={systemTitle} alt="Sistema de Tarefas" />
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive={true} />
                </li>
                <li>
                    <ButtonText title="10/11/2024"/>
                </li>
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo nome da tarefa"
                    icon={FiSearch}
                />
            </Search>

        </Container>
    );
}