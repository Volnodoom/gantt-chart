import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/default_theme";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
    <S.GlobalStyle />

    <S.Calendar>
      <S.CalendarHead>
        <S.CalendarTitle>DMS 2.0 / 02.09.2022-31.12.2022</S.CalendarTitle>
        <S.CalendarButton type="button">Export</S.CalendarButton>
      </S.CalendarHead>
      <div></div>
    </S.Calendar>
    </ThemeProvider>

  )
}

export default App;
