import { Background, Container } from "./styles";
import { Section } from "../Section";
import { FiX } from "react-icons/fi";

export function About({ closeModal }) {
    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    };

    return (
        <Background onClick={handleBackgroundClick}>
            <Container>
                <FiX onClick={closeModal} />

                <Section title="Sobre o sistema">
                    <p>
                        Este sistema de tarefas foi desenvolvido para auxiliar no gerenciamento eficiente de atividades, permitindo que os usuários cadastrem, editem e excluam tarefas de forma prática e organizada. Com uma interface intuitiva e amigável, o sistema oferece uma visão geral das tarefas cadastradas, incluindo detalhes como nome da tarefa, custo estimado e prazo de conclusão.
                    </p>
                    <p>
                        Esse sistema foi pensado para quem busca otimizar seu tempo e gerenciar atividades de maneira prática e objetiva, atendendo desde projetos simples até tarefas complexas.
                    </p>
                </Section>
            </Container>
        </Background>
    );
}