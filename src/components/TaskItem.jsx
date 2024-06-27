import styled from "styled-components"

const StyledLi = styled.li`
    padding: 15px 20px;
    border: 1px solid lightgray;
    display: flex;
    gap: 20px;
`

export default function TaskItem({index, text}){
    return(
        <StyledLi>
                <span>{index}</span>
                <span>{text}</span>
        </StyledLi>   
    )
}