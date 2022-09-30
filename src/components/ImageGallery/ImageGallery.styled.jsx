import styled from "@emotion/styled";

export const GalleryListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin-left: -20px;
  list-style: none;
`

export const ItemContainer = styled.li`
  flex-basis: calc(100% / 3 - 20px);
  margin-bottom: 20px;
  margin-left: 20px;
  text-align: center;
`