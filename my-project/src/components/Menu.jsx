import { useTranslation } from 'react-i18next';
import { getMenuData } from './MenuData';

export default function Menu() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const menu = getMenuData(currentLang);

  return (
    <div className="bg-peach min-h-screen p-4">
      {/* <h1 className="text-3xl font-bold mb-4 text-center">{i18n.t('menuTitle')}</h1> */}
      {Object.keys(menu).map((category, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 font-qwitcher italic bg-white text-outline-peach p-2 rounded">{category}</h2>
          {Object.keys(menu[category]).map((subcategory, subIdx) => (
            <div key={subIdx} className="mb-6">
              <h3 className="text-xl font-medium mb-2 font-qwitcher italic bg-white p-2 text-outline-peach rounded">{subcategory}</h3>
              {menu[category][subcategory].map((item, itemIdx) => (
                <div key={itemIdx} className="flex justify-between border-b border-white py-2">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-lg">{item.price}₪</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
