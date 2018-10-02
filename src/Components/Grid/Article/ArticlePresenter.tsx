import React from 'react';
import styled from 'styled-components';

const Article = styled.div`
  font-size: 50px;
  background-color: #27ae60;
  grid-area: article;
`;

const ArticlePresenter: React.SFC<any> = () => <Article />;
export default ArticlePresenter;
