import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px dashed
    ${(props) =>
      props.isDragAccept
        ? props.isDragAcceptColor
        : props.isDragNotAcceptColor};
  ${(props) => props.isDragReject && 'red'};
  border-radius: 6px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  p {
    text-align: center;
  }
`;
