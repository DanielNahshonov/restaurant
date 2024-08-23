import { useTranslation } from 'react-i18next';
import Gallery from './Gallery';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="bg-peach min-h-screen">
      <div >
        <section className="text-center ">
          <h2 className="text-4xl font-bold mb-4">{t('homePage.welcomeTitle')}</h2>
          <p className="text-xl mb-4">{t('homePage.description')}</p>
        </section>
        
        
        {/* <section className="my-8 text-center">
          <h3 className="text-3xl font-bold mb-4">{t('homePage.customerReviewsTitle')}</h3>
          <p className="italic mb-4">{t('homePage.customerReview1')}</p>
          <p className="italic">{t('homePage.customerReview2')}</p>
          </section> */}
          <Gallery/>
      </div>
    </div>
  );
}
