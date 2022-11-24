import { memo } from "react";
import { arrayFromStep } from "utils/utils";
import * as Style from "./empty_row.style";
import * as S from "./row_level.style";

type EmptyRowType = {
  isLastRow?: boolean,
}

const EmptyRow = ({isLastRow}: EmptyRowType) => {

  if(isLastRow) {
    return(
      <Style.TableLastRow>
      {
        arrayFromStep.map((valueOne) =>
          arrayFromStep.map((valueTwo) => (
            <S.TableData key={`${valueOne}-${valueTwo}-${valueOne+valueTwo}`}></S.TableData>
          ))
        )
      }
    </Style.TableLastRow>
    )
  }

  return(
    <tr>
    {
      arrayFromStep.map((valueOne) =>
        arrayFromStep.map((valueTwo) => (
          <S.TableData key={`${valueOne}-${valueTwo}-${valueOne+valueTwo}`}></S.TableData>
        ))
      )
    }
  </tr>
  )
}

export default memo(EmptyRow);
