export const languages = {
  en: 'English',
  fr: 'Français',
  pl: 'Polski'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.twitter': 'Twitter',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
  },
  pl: {
    'nav.about': 'O mnie',
  },
} as const;

export const styles = {
  conversational: {
    en: 'conversational',
    fr: 'conversationnel',
    pl: 'rozmowny'
  },
  academic: {
    en: 'academic',
    fr: 'académique',
    pl: 'akademicki'
  },
  anecdote: {
    en: 'anecdote',
    fr: 'anecdote',
    pl: 'anegdota'
  },
  teenager: {
    en: 'teenager',
    fr: 'adolescent',
    pl: 'nastolatek'
  }
};
