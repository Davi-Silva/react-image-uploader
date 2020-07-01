import styled from 'styled-components';

export const ImagesList = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: absolute;
  overflow-y: scroll;
  background: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: ${(props) => props.width};
  }
`;

export const Sep = styled.div`
  background: #ff3939;
  border: none;
  width: 100%;
  height: 2px;
`;