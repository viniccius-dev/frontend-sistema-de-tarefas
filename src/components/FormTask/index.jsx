import { Background, Container } from "../About/styles";

import { FiX } from "react-icons/fi";
import { Section } from "../Section";
import { Input } from "../Input";
import { Button } from "../Button";

export function FormTask({ closeModal }) {

    const handleBackgroundClick = (event) => {
        if(event.target === event.currentTarget) {
            closeModal();
        }
    }

    return (
        <Background onClick={handleBackgroundClick}>
            <Container>
                <FiX onClick={closeModal}/>

                <Section title="Nova Tarefa">
                    <form>
                        <Input
                            placeholder="Nome da tarefa"
                        />
                        <Input 
                            placeholder="Custo"
                        />
                        <Input 
                            placeholder="Data Limite"
                        />

                        <Button title="Salvar" />
                    </form>
                </Section>
            </Container>
        </Background>
    );
}