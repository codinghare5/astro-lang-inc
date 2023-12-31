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
    'blog.description': 'All the articles posted so far...',
    'blog.languages': 'All the languages so far...',
    'blog.tags.description': 'All the tags so far...',
    'blog.tags.title': 'Tags',
    'blog.tag.description': 'all of the articles we have posted and linked so far under the tag:',
    'blog.tag.title': 'Posts by Tag:',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'blog.description': "Tous les articles publiés jusqu'à présent...",
    'blog.languages': "Tous les langues publiés jusqu'à présent...",
    'blog.tags.description': "Tous les tags utilisés jusqu'à présent...",
    'blog.tags.title': "Tags",
    'blog.tag.description': "tous les articles que nous avons postés et liés jusqu'à présent sous le tag :",
    'blog.tag.title': "Postes par Tag :",
  },
  pl: {
    'nav.about': 'O mnie',
    'blog.description': "Wszystkie artukuły do tej pory...",
    'blog.languages': 'Wszystkie języki do tej pory...',
    'blog.tags.description': "Wszystkie tagi do tej pory...",
    'blog.tags.title': "Tagi",
    'blog.tag.description': "Wszystkie artykuły przesłane i podpięte pod tagiem: ",
    'blog.tag.title': "Posty po tagu:",
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
