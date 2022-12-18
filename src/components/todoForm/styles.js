import styled from 'styled-components';

const StForm = styled.form`
  padding-top: 20px;
  background-color: #eee;
  display: flex;
  justify-content: center;
`;

const StInputContainer = styled.div`
  width: 80%;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLabeledInput = styled.input`
  width: 700px;
  height: 30px;
  padding: 15px;
  border: none;
  background: #ffffff;
  border-radius: 100px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const StFormBtn = styled.button`
  width: 65px;
  height: 30px;
  font-weight: 500;
  border-radius: 100px;
  background-color: #005cb2;
  color: #ffffff;
`;

export { StForm, StInputContainer, StLabeledInput, StFormBtn };
