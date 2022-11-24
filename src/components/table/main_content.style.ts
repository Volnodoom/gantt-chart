import styled, { css } from "styled-components";
import RowLvlOne from "assets/img/row_lvl_one.svg";
import RowLvlTwo from "assets/img/row_lvl_two.svg";
import RowLvlThree from "assets/img/row_lvl_three.svg";
import RowLvlFour from "assets/img/row_lvl_four.svg";
import RowLvlFive from "assets/img/row_lvl_five.svg";
import { TableDataButtonType, TableDataType } from "types/style.type";
import { setDimensions, setFontValues, specificBorder } from "utils/mixins";

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

const TableData = styled.td<TableDataType>`
  position: relative;
  padding: 0;

  border-bottom: ${specificBorder};

  div {
    position: relative;
    top: 50%;
    ${setDimensions('100%', 24)};

    background-color: var(--timeFrameColor);
    border: 1px solid var(--timeFrameBorder);
    border-radius: 4px;
  }

  ${({ $activeFrame, theme }) =>
    $activeFrame
    ?
      css`
      &::before {
        position: absolute;
        top: 0;
        left: 20px;

        ${setDimensions('100%')}

        content: '';
        background-image: repeating-linear-gradient(
          to right,
          ${theme.color.lightOutlineTwo} 0,
          ${theme.color.lightOutlineTwo} 1.2px,
          ${theme.color.white} 1.2px,
          ${theme.color.white} 21.2px
        );
      };

      &::after {
        position: absolute;
        top: 50%;
        left: calc(100% + 8px);
        transform: translateY(-50%);

        ${setDimensions('100%', 18)}
        content: '${$activeFrame}';
      }
      `
    :
      ''
  }

  &:first-child {
    border-left: ${specificBorder};
    border-right: ${specificBorder};
  }

  &:not(:first-child) {
    border-right: ${specificBorder};
  }
`;

const TableDataTaskCounter = styled.span`
  margin: 1px 8px 1px 0;

  font-style: italic;
  ${({ theme }) => setFontValues(theme.font.small, 16, 100)};
`;

const TableDataButton = styled.button<TableDataButtonType>`
  position: relative;
  left: -40px;
  display: inline-block;

  padding: 0;
  margin-right: -14px;

  ${setDimensions(16)};

  border: none;
  background-color: ${({ theme }) => theme.color.white};

  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    content: '';
    ${setDimensions(8, 1)};
    background-color: ${({ theme }) => theme.color.lightOnSecondaryVariant};
  }

  &::before {
    transform:  translateY(3px) rotate(-135deg);
    transform-origin: 0;
    border-radius: 0.5px;

    ${({ fold }) =>
      fold
      ?
        {
          transform: 'translateY(-3px) rotate(135deg)',
          'transform-origin': '0',
          'border-radius': '0.5px',
        }
      :
        ''
    }
  }

  &::after {
    transform:  translateY(3px) rotate(-45deg);
    transform-origin: 0 1px;
    border-radius: 0.5px;

    ${({ fold }) =>
      fold
      ?
        {
          transform: 'translateY(-3px) rotate(45deg)',
          'transform-origin': '0 -0.2px',
          'border-radius': '0.5px',
        }
      :
        ''
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
  TableLastRow,
  TableData,
  TableDataTaskCounter,
  TableDataButton,
}
