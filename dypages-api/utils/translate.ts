
import translate from 'i18n';
import path from 'path';
translate.configure({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  queryParameter: 'lang',
  directory: path.join('././', 'locales'),
  api: {
    '__': 'translate',  
    '__n': 'translateN' 
  },
});
export default translate;