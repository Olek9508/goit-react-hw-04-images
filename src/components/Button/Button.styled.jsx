import styled from "@emotion/styled"

export const ButtonStyled = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #8a2be2;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: block;
  color: #f5f5dc;
  border: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 200px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
0px 2px 2px rgba(0, 0, 0, 0.12);
:hover,
:focus{
  background-color: #FFFF00;
  color: #9932cc;
  border-color: transparent;
transition-duration: 250ms;
`