export const PERCENTAGE = '%';
export const FIRST_EVENT_ID = 1;
export const START = 1;
export const LOCAL = 'en-GB';
export const WEEK_IN_MILLISECONDS = 604_800_000;
export const SIX_DAY_IN_MILLISECONDS = 518_400_000;
export const ONE_DAY_IN_MILLISECONDS = 86_400_000;
export const ONE_DAY = 1;
export const STEP = 7;
export const REGULAR_PATTERN = /\blevel\w*/gm;
export const LEVEL_WORD = 'level';

export const DATE_OPTIONS = {
  day: '2-digit',
  month: 'short',
} as const;

export const TypeOfData = {
  STRING: 'string',
  NUMBER: 'number',
} as const;

export enum CalendarLevels {
  level1 = 'level1',
  level2 = 'level2',
  level3 = 'level3',
  level4 = 'level4',
  level5 = 'level5',
  level6 = 'level6',
}
