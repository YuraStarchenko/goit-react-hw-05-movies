import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
	border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
	padding: 12px, 24px, 12px, 24px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 500px;
  background-color: #fff;
  border-radius: 25px;
  overflow: hidden;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0;
  width: 55px;
  height: 48px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  border-radius: 30px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 2;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
    padding-left: 5px;
  }
`;
