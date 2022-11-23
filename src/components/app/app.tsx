import Table from "components/table";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "themes/default_theme";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
    <S.GlobalStyle />

    <S.Calendar>
      <S.CalendarButton type="button">Export</S.CalendarButton>
      <Table />
    </S.Calendar>
    </ThemeProvider>

  )
}

export default App;
