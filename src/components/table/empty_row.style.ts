import styled from "styled-components";

const TableLastRow = styled.tr`
 &:last-of-type {
    td:first-of-type {
      border-radius: 0 0 0 10px;
    }

    td:last-of-type {
      border-radius: 0 0 10px 0;
    }
  }
`;

export {
  TableLastRow,
}
