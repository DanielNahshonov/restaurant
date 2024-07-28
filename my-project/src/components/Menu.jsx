import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const { t } = useTranslation();

  const menu = t('menu', { returnObjects: true });

  return (
    <div className="bg-peach min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">{t('menuTitle')}</h1>
      {Object.keys(menu).map((category, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gray-200 p-2 rounded">{t(`menu.${category}`)}</h2>
          {Object.keys(menu[category]).map((subcategory, subIdx) => (
            <div key={subIdx} className="mb-6">
              <h3 className="text-xl font-medium mb-2 bg-gray-100 p-2 rounded">{t(`menu.${category}.${subcategory}`)}</h3>
              {menu[category][subcategory].map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between border-b border-gray-300 py-2">
                  <p className="text-lg">{t(`menu.${category}.${subcategory}.${itemIdx}.name`)}</p>
                  <p className="text-lg">{t(`menu.${category}.${subcategory}.${itemIdx}.price`)}₪</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
