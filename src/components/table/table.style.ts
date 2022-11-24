import styled, { css } from "styled-components";
import { setFontValues, specificBorder } from "utils/mixins";

const Table = styled.table`
  position: relative;
  width: 100%;
  height: 708px;
  margin: 0 24px 24px;
  table-layout: fixed;

  border-collapse: separate;
  border-spacing: 0;
  background-color: ${({ theme }) => theme.color.white};

  overflow: hidden;
`;

const TableCaption = styled.caption`
  margin: 22px 0 18px 24px;
  width: 50%;

  ${({ theme }) => setFontValues(theme.font.huge, 28)};
  color: ${({ theme }) => theme.color.lightSecondary};
  text-align: start;
`;

const TableHead = styled.thead`
  tr {
    height: 24px;
  }

  tr:nth-of-type(2) > :first-of-type {
    border-left: 0;
    border-bottom: ${specificBorder};
  }
`;

const TableHeadRow = styled.tr`
  ${({ theme }) => setFontValues(theme.font.small, 16, 400)};
  color: ${({ theme }) => theme.color.lightSecondary};

  &:first-of-type {
    th {
      border-top: ${specificBorder};
      border-bottom: ${specificBorder};
    }

    th:first-of-type {
      border-radius: 10px 0 0;
    }

    th:last-of-type {
      border-radius: 0 10px 0 0;
    }
  }

  &:last-of-type > :nth-child(7n-1),
  &:last-of-type > :nth-child(7n)  {
    color: ${({ theme }) => theme.color.lightOnSecondaryContainer};
  }
`;

const TableHeadName = styled.th`
  padding: 15px 20px;
  width: 390px;

  border-left: ${specificBorder};
  border-right: ${specificBorder};
  background-color: ${({ theme }) => theme.color.lightBackgroundTwo};


  font: inherit;
  ${({ theme }) => setFontValues(theme.font.regular, 18)};
  text-align: start;
  color: ${({ theme }) => theme.color.lightOnSecondaryVariant};
`;

const TableHeadMonth = styled.th`
  padding: 0;
  width: 148px;

  border-right: ${specificBorder};
  border-bottom: ${specificBorder};
  background-color: ${({ theme }) => theme.color.lightBackgroundTwo};

  font: inherit;
`;

const TableHeadSub = styled.th`
  padding: 0;

  background-color: ${({ theme }) => theme.color.lightBackgroundTwo};
  font: inherit;

  &:first-child {
    border-left: ${specificBorder};
    border-right: ${specificBorder};
  }

  &:not(:first-child) {
    border-right: ${specificBorder};
    border-bottom: ${specificBorder};
  }

  &:not(:last-of-type) {
    width: 22px;
  }
`;

export {
  Table,
  TableCaption,
  TableHead,
  TableHeadSub,
  TableHeadName,
  TableHeadRow,
  TableHeadMonth,
};
