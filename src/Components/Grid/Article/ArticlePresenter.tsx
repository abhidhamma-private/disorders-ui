import React from 'react';
import styled from 'styled-components';

const Article = styled.div`
  font-size: 50px;
  background-color: #27ae60;
  grid-area: article;
`;

const Todo = styled.iframe`
  width: 100%;
  height: 100%;
`;
const ArticlePresenter: React.SFC<any> = () => (
  <Article>
    <Todo src="https://todolist-6d8d9.firebaseapp.com/" />
  </Article>
);
export default ArticlePresenter;
