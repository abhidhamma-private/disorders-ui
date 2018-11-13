import React from 'react';
import styled from '../../typed-components';
const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #e7edf3;
  margin-top: 2em;
  margin-bottom: 3em;
`;
const SeparatorComponent: React.SFC<any> = () => <Separator />;
export default SeparatorComponent;
