import React from 'react';
import { Link } from 'react-router-dom';
import styled from '../../typed-components';
const Container = styled.div`
  transform: scale(0.8);
`;

const Arrow = styled.svg`
  height: 3rem;
  width: 3rem;
`;
interface IProps {
  backTo: string;
  className?: string;
}
const BackArrow: React.SFC<IProps> = ({ backTo, className }) => (
  <Container className={className}>
    <Link to={backTo}>
      <Arrow
        fill="currentColor"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 40 40">
        <g>
          <path d="m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z" />
        </g>
      </Arrow>
    </Link>
  </Container>
);
export default BackArrow;
