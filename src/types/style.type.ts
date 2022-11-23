export type DefaultParamsForTheme = {
  font: {[x: string]: string},
  color: {[x: string]: string},
};

export type ThemeParameters = {
  theme: DefaultParamsForTheme
};

export type TableDataButtonType = {
  fold?: boolean,
}

export type TableDataType = {
  $activeFrame?: string,
}
