import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <div
      className="font-qwitcher italic bg-cover bg-center bg-no-repeat h-screen text-white p-8"
    >
      <p>{t('aboutUs.paragraph1')}</p>
      <p>{t('aboutUs.paragraph2')}</p>
      <p>{t('aboutUs.paragraph3')}</p>
      <p>{t('aboutUs.paragraph4')}</p>
    </div>
  );
}
