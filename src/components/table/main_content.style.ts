import styled from "styled-components";
import RowLvlOne from "assets/img/row_lvl_one.svg";
import RowLvlTwo from "assets/img/row_lvl_two.svg";
import RowLvlThree from "assets/img/row_lvl_three.svg";
import RowLvlFour from "assets/img/row_lvl_four.svg";
import RowLvlFive from "assets/img/row_lvl_five.svg";
import { setDimensions } from "utils/mixins";

const TableBody = styled.tbody`
  tr:not(:last-of-type) {
    height: 40px;
  }
`;

const TableRow = styled.tr``;

const TableRowLevelOne = styled.tr`
  --timeFrameColor: ${({ theme }) => theme.color.lightAdditionalColorsBlue};
  --timeFrameBorder: ${({ theme }) => theme.color.lightAdditionalColorsBlueBorder};

  td:first-child {
    position: relative;
    display: flex;
    align-items: center;
    padding: 11px 10px 11px 60px;

    &::before {
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);

      ${setDimensions(16)};

      content: '';
      background-image: url(${RowLvlOne});
    }
  }
`;

const TableRowLevelTwo = styled.tr`
  --timeFrameColor: ${({ theme }) => theme.color.lightWarning};
  --timeFrameBorder: ${({ theme }) => theme.color.lightWarningBorder};

  td:first-child {
    position: relative;
    display: flex;
    align-items: center;
    padding: 11px 10px 11px 80px;

    &::before {
      position: absolute;
      top: 50%;
      left: 60px;
      transform: translateY(-50%);

      ${setDimensions(16)};

      content: '';
      background-image: url(${RowLvlTwo});
    }
  }
`;

const TableRowLevelThree = styled.tr`
  --timeFrameColor: ${({ theme }) => theme.color.lightSuccess};
  --timeFrameBorder: ${({ theme }) => theme.color.lightSuccessBorder};

  td:first-child {
    position: relative;
    display: flex;
    align-items: center;
    padding: 11px 10px 11px 100px;

    &::before {
      position: absolute;
      top: 50%;
      left: 80px;
      transform: translateY(-50%);

      ${setDimensions(16)};

      content: '';
      background-image: url(${RowLvlThree});
    }
  }
`;

const TableRowLevelFour = styled.tr`
  --timeFrameColor: ${({ theme }) => theme.color.lightSuccess};
  --timeFrameBorder: ${({ theme }) => theme.color.lightSuccessBorder};

  td:first-child {
    position: relative;
    display: flex;
    align-items: center;
    padding: 11px 10px 11px 120px;

    &::before {
      position: absolute;
      left: 100px;
      top: 50%;
      transform: translateY(-50%);

      ${setDimensions(16)};

      content: '';
      background-image: url(${RowLvlFour});
    }
  }
`;

const TableRowLevelFive = styled.tr`
  --timeFrameColor: ${({ theme }) => theme.color.lightWarning};
  --timeFrameBorder: ${({ theme }) => theme.color.lightWarningBorder};

  td:first-child {
    position: relative;
    padding: 11px 10px 11px 140px;

    &::before {
      position: absolute;
      top: 50%;
      left: 120px;
      transform: translateY(-50%);

      ${setDimensions(16)};

      content: '';
      background-image: url(${RowLvlFive});
    }
  }
`;

export {
  TableBody,
  TableRow,
  TableRowLevelOne,
  TableRowLevelTwo,
  TableRowLevelThree,
  TableRowLevelFour,
  TableRowLevelFive,
}
