import {
  darkTemplate,
  lightTemplate,
  // deuteranopiaTemplate,
  // tritanopiaTemplate,
} from '@styles';
import {
  Theme,
} from './types';

// ================================
// CONSTANTS
// ================================

export const THEME_LIST: Theme[] = [
  'dark',
  'light',
  // 'deuteranopia',
  // 'tritanopia',
];

export const THEME_DICTIONARY = {
  dark: darkTemplate,
  light: lightTemplate,
  // deuteranopia: deuteranopiaTemplate,
  // tritanopia: tritanopiaTemplate,
};

export const getThemeTemplate = (theme: Theme) => {
  if (THEME_DICTIONARY[theme]) {
    return THEME_DICTIONARY[theme];
  }
  return darkTemplate;
};

export const DATE_LIST = [
  'locale',
  'utc',
];

export const TX_LIST = [
  'compact',
  'detailed',
];
