import { useState, useEffect } from "react";
import { Container, Brand, Menu, Search, Content, AddTask } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Task } from "../../components/Task";
import { FormTask } from '../../components/FormTask';

import systemTitle from '../../assets/titulo_sistema.png';
import { FiSearch } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { LoadingSpinner } from "../../components/LoadingSpinner";

import { api } from '../../services/api';

export function Home() {
    const [search, setSearch] = useState("");
    const [tasks, setTasks] = useState([]);
    const [filterDate, setFilterDate] = useState([]);
    const [tasksSelected, setTasksSelected] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [animationLoading, setAnimationLoading] = useState(false);

    const openModal = (task = null) => {
        setTaskToEdit(task);
        setShowModal(true);
    };

    const closeModal = () => {
        setTaskToEdit(null);
        setShowModal(false);
    };

    function handleTaskSelected(date) {
        if(date === "all") {
            return setTasksSelected([]);
        }

        const alreadySelected = tasksSelected.includes(date);

        if(alreadySelected) {
            const filteredTasks = tasksSelected.filter(task => task !== date);
            setTasksSelected(filteredTasks);
        } else {
            setTasksSelected(prevState => [...prevState, date]);
        }
    }

    async function updateTaskOrder(idTask1, idTask2) {
        try {
            await api.put('/tasks/update-order', { idTask1, idTask2 });
        } catch (error) {
            console.error("Erro ao atualizar a ordem das tarefas:", error);
        }
    }

    function moveTaskUp(index) {
        if (index === 0) return;

        const updatedTasks = Array.from(tasks);
        const [taskAbove, currentTask] = [updatedTasks[index - 1], updatedTasks[index]];
        
        [updatedTasks[index - 1], updatedTasks[index]] = [currentTask, taskAbove];
        setTasks(updatedTasks);
        updateTaskOrder(currentTask.identificador_da_tarefa, taskAbove.identificador_da_tarefa);
    }
    
    function moveTaskDown(index) {
        if (index === tasks.length - 1) return;
    
        const updatedTasks = Array.from(tasks);
        const [currentTask, taskBelow] = [updatedTasks[index], updatedTasks[index + 1]];
    
        [updatedTasks[index], updatedTasks[index + 1]] = [taskBelow, currentTask];
        setTasks(updatedTasks);
    
        updateTaskOrder(currentTask.identificador_da_tarefa, taskBelow.identificador_da_tarefa);
    }

    useEffect(() => {
        setAnimationLoading(true);
        async function fetchTasks() {
            const tasks = await api.get(`/tasks?title=${search}&date=${tasksSelected}`);
            const filterDate = await api.get(`/tasks/date`);
            setTasks(tasks.data);
            setFilterDate(filterDate.data);
            setAnimationLoading(false);
        }

        fetchTasks();
    }, [tasksSelected, search]);

    return (
        animationLoading ? (
            <LoadingSpinner loading={animationLoading} />
        ) : (
            <Container>
                <Brand>
                    <img src={systemTitle} alt="Sistema de Tarefas" />
                </Brand>

                <Header />

                <Menu>
                    <li>
                        <ButtonText 
                            title="Todas Datas"
                            isActive={tasksSelected.length === 0} 
                            onClick={() => handleTaskSelected("all")}
                        />
                    </li>
                    {filterDate && filterDate.map((task, index) => (
                        <li key={String(index)}>
                            <ButtonText 
                                title={task.data_limite}
                                onClick={() => handleTaskSelected(task.data_limite)}
                                isActive={tasksSelected.includes(task.data_limite)}
                            />
                        </li>
                    ))}
                </Menu>

                <Search>
                    <Input 
                        placeholder="Pesquisar pelo nome da tarefa"
                        onChange={(e) => setSearch(e.target.value)}
                        icon={FiSearch}
                    />
                </Search>

                <Content>
                    <Section title="Minhas Tarefas">
                        {tasks.map((task, index) => (
                            <Task 
                                key={String(task.identificador_da_tarefa)}
                                data={task}
                                onEdit={() => openModal(task)}
                                onMoveUp={() => moveTaskUp(index)}
                                onMoveDown={() => moveTaskDown(index)}
                            />
                        ))}
                    </Section>
                </Content>

                <AddTask onClick={() => openModal()} >
                    <FiPlus />
                </AddTask>

                {showModal && (
                    <FormTask 
                        closeModal={closeModal} 
                        task={taskToEdit}
                    />
                )}
            </Container>
        )
    );
}