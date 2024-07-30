import LanguageSwitcher from './languageSwitcher';

export default function LogoBar() {
  return (
    <div className="bg-peach p-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-black">Lola Restaurant</h1>
      <LanguageSwitcher/>
    </div>
  );
}
