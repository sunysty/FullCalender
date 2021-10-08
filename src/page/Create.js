import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as createActions } from "../redux/modules/todo";

const dispatch = useDispatch;

const Create = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [todo, setTodo] = React.useState("");

  const changeTodo = (e) => {
    setTodo(e.target.value);
  };

  const createTodo = () => {
    dispatch(createActions.createTodoFB());
  };

  console.log(setTodo);

  //const event = {
  // events: ,
  //   date: ,
  //   time: ,
  //};

  return (
    <Container>
      <InputBox>
        <label>일시</label>
        <input type="datetime-local" />
      </InputBox>
      <InputBox>
        <label>내용</label>
        <input
          type="text"
          placeholder="일정을 입력하세요"
          onChange={changeTodo}
        />
      </InputBox>
      <AddBtn
        onClick={() => {
          history.push("/");
          createTodo();
        }}
      >
        <span>일정추가</span>
      </AddBtn>
      <CloseBtn
        onClick={() => {
          history.push("/");
        }}
      >
        X
      </CloseBtn>
    </Container>
  );
};
export default Create;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: #2c3e50;
  padding: 50px;
  position: relative;
  margin: 30vh auto;

  color: #fff;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;

  > input {
    width: 50%;
    padding: 5px;
  }
`;

const AddBtn = styled.div`
  width: 100px;
  border: solid #fff 1px;
  background: none;
  padding: 5px;
  cursor: pointer;

  margin: 30px auto 0;
  text-align: center;
  &:hover {
    background: #fff;
    color: #2c3e50;
  }
`;

const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  top: 30px;
  right: 30px;
  font-weight: bold;
`;
