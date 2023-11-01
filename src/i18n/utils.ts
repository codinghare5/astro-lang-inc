import { ui, defaultLang, styles } from './ui';

export function getLangFromUrl(url: URL) {
  const [ lang, ] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getStyleFromUrl(url: URL, lang: string) {
  const [, , style] = url.pathname.split('/');
  for (const [key, translations] of Object.entries(styles)) {
    if (translations[lang] === style) return key;
  }
  return 'conversational'; // default style
}

export function translateStyle(style: string, lang: string) {
  return styles[style][lang];
}
