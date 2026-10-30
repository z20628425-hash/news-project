const Footer = () => {
  return (
    <footer className="mt-12 bg-[#031a30] text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-10">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr_1fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex items-center rounded-[10px] bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2.5 font-black uppercase tracking-tight text-white shadow-md shadow-blue-900/20">
              <span className="text-2xl leading-none">FACT</span>
              <span className="mx-1 text-sky-300">•</span>
              <span className="text-2xl leading-none">WIRE</span>
            </div>
            <p className="max-w-xs text-sm leading-6 text-slate-300">
              O‘zbekiston va jahon yangiliklari, xalqaro tadbirlar, iqtisodiyot, jamiyat va texnologiya haqida tezkor va ishonchli ma’lumotlar.
            </p>
            <div className="mt-5 flex items-center gap-3 text-lg text-slate-300">
              <span>◌</span>
              <span>◍</span>
              <span>◐</span>
              <span>◔</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-2xl font-bold text-white">Bo‘limlar</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>O‘zbekiston</li>
              <li>Jahon</li>
              <li>Iqtisodiyot</li>
              <li>Jamiyat</li>
              <li>Sport</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-2xl font-bold text-white">Tahririyat</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>info@factwire.uz</li>
              <li>reklama@factwire.uz</li>
              <li>Telegram: @factwire_bot</li>
            </ul>
            <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-blue-400 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800/30">
              ✓ Admin CMS Panel
            </button>
          </div>

          <div className="flex flex-col justify-between">
            <div className="text-sm text-slate-300">
              <p className="mb-2">Sahifa boshi</p>
              <p className="text-2xl font-bold text-white">↑</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900 bg-[#020f1c] px-4 py-3 text-sm text-slate-300">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <span>📍 Toshkent: +18°C</span>
            <span>USD: 12 850</span>
            <span>EUR: 13 920</span>
            <span>RUB: 132.80</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Namoz vaqti</span>
            <span>O‘zbekcha</span>
            <span>Tahririyat (Admin)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
