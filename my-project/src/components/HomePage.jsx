import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="bg-peach min-h-screen">
      <div className="p-4">
        <section className="text-center my-8">
          <h2 className="text-4xl font-bold mb-4">{t('homePage.welcomeTitle')}</h2>
          <p className="text-xl mb-4">{t('homePage.description')}</p>
          {/* Добавляем стили для логотипа */}
          <img
            src="/restaurant/logo.JPG"
            alt={t('homePage.logoAlt')}
            className="mx-auto mb-8 rounded-full shadow-lg"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </section>
        <section className="my-8">
          {/* Здесь можно добавить дополнительные секции */}
        </section>
        <section className="my-8 text-center">
          <h3 className="text-3xl font-bold mb-4">{t('homePage.customerReviewsTitle')}</h3>
          <p className="italic mb-4">{t('homePage.customerReview1')}</p>
          <p className="italic">{t('homePage.customerReview2')}</p>
        </section>
      </div>
    </div>
  );
}
