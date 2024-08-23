import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';

export default function LogoBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-peach flex flex-col md:flex-row justify-between items-center p-4">
      <img
        src="/restaurant/logo.JPG"
        alt={t('homePage.logoAlt')}
        className="rounded-full shadow-lg mb-4 md:mb-0"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
      <h1 className="text-4xl font-bold font-qwitcher italic text-center md:text-left">
        Lola Beach & Bar
      </h1>
      <div className="mt-4 md:mt-0">
        <LanguageSwitcher />
      </div>
    </div>
  );
}
