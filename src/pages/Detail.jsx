import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const globalTodo = useSelector((state) => state.todos.todos);
  const param = useParams();
  const item = globalTodo.find((elem) => elem.id === param.id);

  return (
    <StDetailContainer>
      <StDetail key={item.id}>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <StGoBack>&larr;</StGoBack>
        </Link>
        <StId>
          ID: <StIdContent> {item.id}</StIdContent>
        </StId>
        <StDetailTitle>제목</StDetailTitle>
        <StDetailTitleContent>{item.title}</StDetailTitleContent>
        <StDetailContentTitle>내용</StDetailContentTitle>
        <StDetailContent>{item.content}</StDetailContent>
      </StDetail>
    </StDetailContainer>
  );
};

export default Detail;

const StDetailContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDetail = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
`;

const StGoBack = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  background-color: #005cb2;
  color: white;
  border-radius: 100px;
  text-align: center;
  line-height: 25px;
  font-size: 16px;
  font-weight: 700;
`;

const StId = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;

const StIdContent = styled.span`
  font-size: 15px;
`;

const StDetailTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StDetailTitleContent = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
`;

const StDetailContentTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StDetailContent = styled.div`
  font-size: 16px;
`;
