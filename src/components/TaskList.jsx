import styled from "styled-components"
import TaskItem from "./TaskItem"
import { useSelector } from "react-redux"


const StyledUl = styled.ul`
    display: flex;
    list-style: none;
    flex-direction: column;
    gap: 2px;
    padding: 10px;
`


export default function TaskList(){

    const tasks = useSelector(state=>state.todo.todos)


    return(
        <StyledUl>
            {
                tasks.map((t,i)=><TaskItem index={i+1} text={t} key={i}/>) || <li>bruh</li>
            }
        </StyledUl>
    )
}