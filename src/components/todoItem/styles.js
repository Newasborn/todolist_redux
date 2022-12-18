import styled from 'styled-components';

const StTodo = styled.div`
  position: relative;
  width: 320px;
  border-radius: 10px;
  /* background-color: #e2e2e2; */
  box-shadow: 3px 8px 10px rgba(207, 207, 207, 0.2);
  border: 1px solid rgba(94, 94, 94, 0.1);
  padding: 20px;
`;

const DetailTodo = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  background-color: #a3a3a3;
  color: white;
  border-radius: 100px;
  text-align: center;
  line-height: 10px;
`;

const StTodoTitle = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const StTodoContent = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 40px;
`;

const StBtnContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
`;

const StDoneBtn = styled.button`
  width: 55px;
  height: 26px;
  margin-right: 8px;
  &:hover {
    background-color: #000000;
    color: white;
  }
`;

const StDeleteBtn = styled.button`
  width: 55px;
  height: 26px;
  &:hover {
    background-color: #c20808;
    color: white;
  }
`;

export {
  StTodo,
  DetailTodo,
  StTodoTitle,
  StTodoContent,
  StBtnContainer,
  StDoneBtn,
  StDeleteBtn,
};
