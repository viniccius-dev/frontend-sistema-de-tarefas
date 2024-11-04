import { useState } from "react";

import { Background, Container } from "../About/styles";

import { FiX } from "react-icons/fi";
import { Section } from "../Section";
import { Input } from "../Input";
import { Button } from "../Button";
import { api } from "../../services/api";

export function FormTask({ closeModal, task }) {
    const [name, setName] = useState(task?.nome_da_tarefa || "");
    const [cost, setCost] = useState(task ? formatCurrency(task.custo) : "");
    const [dueDate, setDueDate] = useState(task?.data_limite || "");

    const handleBackgroundClick = (event) => {
        if(event.target === event.currentTarget) {
            closeModal();
        }
    };

    function formatCurrency(value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
        }).format(value);
    }

    const handleCostChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        value = (Number(value) / 100).toFixed(2) + "";
        value = value.replace(".", ",");
        value = "R$ " + value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setCost(value);
    };

    const handleDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 2) value = value.replace(/^(\d{2})(\d)/, "$1/$2");
        if (value.length > 5) value = value.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
        setDueDate(value.slice(0, 10));
    };

    const parseCostValue = (formattedValue) => {
        return parseFloat(formattedValue.replace(/[^\d,]/g, "").replace(",", "."));
    };

    async function handleTask() {
        if(!name || !cost || !dueDate) {
            return alert("Insira todas as informações, por favor.");
        }

        const parsedCost = parseCostValue(cost);

        if(task) {
            await api.put(`/tasks/${task.identificador_da_tarefa}`, {
                nome_da_tarefa: name,
                custo: parsedCost,
                data_limite: dueDate
            });
            alert("Tarefa atualizada com sucesso!");
        } else {
            await api.post("/tasks", {
                nome_da_tarefa: name,
                custo: parsedCost,
                data_limite: dueDate
            });
    
            alert("Tarefa criada com sucesso!");
        }
        
        window.location.reload();
    }

    return (
        <Background onClick={handleBackgroundClick}>
            <Container>
                <FiX onClick={closeModal}/>

                <Section title={task ? "Editar Tarefa" : "Nova Tarefa"}>
                    <form>
                        <Input
                            placeholder="Nome da tarefa"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input 
                            placeholder="Custo"
                            value={cost}
                            onChange={handleCostChange}
                        />
                        <Input 
                            placeholder="Data Limite"
                            value={dueDate}
                            onChange={handleDateChange}
                            maxLength={10}
                        />

                        <Button title="Salvar" onClick={handleTask} />
                    </form>
                </Section>
            </Container>
        </Background>
    );
}