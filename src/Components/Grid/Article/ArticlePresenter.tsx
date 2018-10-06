import React from 'react';
import styled from 'styled-components';
import Card from '../../Card';
const Article = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  font-size: 50px;
  background: rgb(241, 243, 245);
  text-align: center;
  grid-area: article;
  padding: 10px;
`;

class ArticlePresenter extends React.Component<any> {
  public render() {
    return (
      <Article>
        <Card imgURL="https://images.velog.io/post-images/veloss/e91e29f0-c56f-11e8-89ae-83c8dfe43812/golang-dep.png" />
        <Card imgURL="https://images.velog.io/post-images/ppp3195/c7ad19d0-c168-11e8-9641-b3751a7d496e/crex-edit.png" />
        <Card imgURL="https://images.velog.io/post-images/clarekang/8730e980-c5f1-11e8-856c-a12db9b94467/google-cloud-vision-api-guide-beginners.png" />
        <Card imgURL="https://images.velog.io/post-images/godori/94ca4590-c61f-11e8-b3a6-c16d8d6c5f3d/programmer.png" />
        <Card imgURL="https://images.velog.io/post-images/bauwow/9eca3c10-c20c-11e8-9ad5-4993e5d0fb25/screen-56.jpg" />
      </Article>
    );
  }
}

export default ArticlePresenter;
