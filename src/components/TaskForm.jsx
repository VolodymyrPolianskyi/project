import { useFormik } from "formik"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { addTask } from "../features/ToDo/toDoSlice"


const StyledForm = styled.form`
border: 2px solid gray;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`
const StyledInput = styled.input`
    border-radius: 10px;
    padding: 5px 10px;
    border: 1px solid gainsboro;
    font-size: 18px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
`

const StyledSubmitButton = styled.button`
    background-color: lightcoral;
    border: none;
    padding: 5.8px 10px;
    font-size: 18px;
    border-radius: 4px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
`
export default function TaskForm(){

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            todo : ''
        },
        onSubmit: ({todo})=>{
            dispatch(addTask(todo))
        }
    })

    return(
        <>
        <StyledForm onSubmit={formik.handleSubmit}>
            <StyledInput type="text" name='todo' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <StyledSubmitButton type="submit">Add</StyledSubmitButton>
        </StyledForm>
        </>
    )
}