import { dynamicActivate } from "./dynamicActivate";

/**
 * Sets locale in local storage
 *
 * Note: this value will persist across sessions
 *
 * @param locale Locale we wish to use for this user
 */
export const setLocale = (locale: string) => {
  localStorage.setItem('lang', locale);
  dynamicActivate(locale);
};
