import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="bg-peach text-black p-8 mx-auto mt-10 max-w-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-lg font-semibold">{t('contactUs.phone')}</p>
          <p className="text-lg font-semibold">{t('contactUs.address')}</p>
        </div>
        <div>
          <div className="flex justify-center items-center space-x-2">
            <p className="text-lg font-semibold">{t('contactUs.instagram')}</p>
            <a
              href="https://www.instagram.com/lolabeachbar?igsh=MXIzaHMxbG14aTY5Nw=="
              className="text-lg font-semibold text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lolabeachbar
            </a>
          </div>
          <p className="text-lg font-semibold">{t('contactUs.workingHours')}</p>
        </div>
      </div>
    </div>
  );
}
