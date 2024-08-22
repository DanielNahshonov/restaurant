import LanguageSwitcher from './languageSwitcher';
import { useTranslation } from 'react-i18next';

export default function LogoBar() {
  const { t } = useTranslation();

  return (
    <div className="bg-peach flex justify-between items-center">
      <img
            src="/restaurant/logo.JPG"
            alt={t('homePage.logoAlt')}
            className=" rounded-full shadow-lg"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
      <h1 className="text-4xl font-bold font-qwitcher italic">Lola Restaurant</h1>
      <LanguageSwitcher/>
    </div>
  );
}
