import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import {  useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
   
`;

function TodoList(){
    const todos = useTodoState();

    return (
    <TodoListBlock>
        {todos.map(todos=>(
            <TodoItem key = {todos.text} text = {todos.text} done = {todos.done} id = {todos.id} />
        ))}
    </TodoListBlock>
    )
}
export default TodoList