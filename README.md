# Features

- Create Todo : todo 생성
- Read Todos, Todo : todo 불러오기
- Update Todo : todo 완료/취소 업데이트
- Delete Todo : todo 삭제

# Component List

## Features

### TodoForm

새로운 할 일을 등록할 수 있게 해주는 컴포넌트 입니다.
form을 통해 입력받으며, 입력값이 없다면 등록이 되지 않습니다.
엔터를 누르거나 추가하기 버튼을 누르면 입력 값이 store의 todo 배열로 저장이 됩니다.

### TodoList

할 일의 정보가 들어있는 store의 todo배열을 완료여부 조건에 따라
working(진행 중), done(완료) 영역으로 나누어 렌더링 해줍니다.

### TodoItem

각각의 할 일 정보가 렌더링되며, 완료/취소 버튼으로 완료 여부를 토글링 할 수 있습니다. 완료 여부와 관계없이 삭제 버튼이 포함되어 있어 각 할 일들을 삭제할 수 있습니다.

## UI

### Header

투두리스트 홈 화면의 헤더 영역입니다.
간단하게 프로젝트 이름이 들어갑니다.

### Layout

투두리스트 홈 화면에서 전체 컨테이너 역할을 하는 레이아웃 컴포넌트 입니다.
