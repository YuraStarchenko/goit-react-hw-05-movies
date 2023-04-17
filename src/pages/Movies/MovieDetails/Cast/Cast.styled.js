import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  gap: 5px;
  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;

export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 3px #fff;
  border-radius: 10px;
  background-color: #fff;
`;

export const ImgCast = styled.img`
  border-radius: 10px;
  margin-bottom: 10px;
`;
export const TextCast = styled.p`
  margin-bottom: 10px;
`;
export const TextEm = styled.em`
  margin-bottom: 10px;
`;
