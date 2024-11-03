import { useState } from "react";
import { Container, Brand, Menu, Search, Content, AddTask } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Task";
import { FormTask } from '../../components/FormTask';

import systemTitle from '../../assets/titulo_sistema.png';
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export function Home() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

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

            <Content>
                <Section title="Minhas Tarefas">
                    <Note />
                </Section>
            </Content>

            <AddTask>
                <FiPlus onClick={openModal} />
            </AddTask>

            {showModal && <FormTask closeModal={closeModal} />}

        </Container>
    );
}