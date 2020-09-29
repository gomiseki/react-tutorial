import React, { useContext } from 'react';
import styled from 'styled-components';
import { TodoStateContext, TodoDispatchContext, TodoProvider } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead(){
    const todos = useContext(TodoStateContext);
    return(
        <TodoHeadBlock>
            <h1>2020.09.29</h1>
            <div className='day'>화요일</div>
            <div className='tasks-left'>2개의 할일 남음</div>
        </TodoHeadBlock>
    );
}
export default TodoHead;