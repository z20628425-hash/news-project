import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="border-b border-slate-200 bg-[#f7f7f8] text-sm text-slate-700">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2">
          <div className="flex-1 text-center text-[13px] font-medium tracking-tight">
            Kun.uz - O'zbekiston va Jahon Yangiliklari
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] text-slate-600 shadow-sm">
            <span className="text-base">↻</span>
            Remix
          </button>
        </div>
      </div>

      <header className="border-b border-slate-200 bg-white text-slate-800 shadow-sm">
        <div className="mx-auto max-w-[1280px] px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center rounded-[10px] bg-gradient-to-r from-blue-700 to-blue-900 px-4 py-2.5 font-black uppercase tracking-tight text-white shadow-md shadow-blue-900/20">
              <span className="text-2xl leading-none">FACT</span>
              <span className="mx-1 text-sky-300">•</span>
              <span className="text-2xl leading-none">WIRE</span>
            </Link>

            <nav className="hidden flex-1 items-center gap-7 text-[13px] font-medium text-slate-700 md:flex">
              <Link to="/category/O‘zbekiston" className="hover:text-blue-700">O'zbekiston</Link>
              <Link to="/category/Jahon" className="hover:text-blue-700">Jahon</Link>
              <Link to="/category/Iqtisod" className="hover:text-blue-700">Iqtisodiyot</Link>
              <Link to="/category/Jamiyat" className="hover:text-blue-700">Jamiyat</Link>
              <Link to="/category/Sport" className="hover:text-blue-700">Sport</Link>
              <Link to="/category/Texnologiya" className="hover:text-blue-700">Texnologiya</Link>
              <Link to="/category/Fikr" className="hover:text-blue-700">Fan-texnologiya</Link>
            </nav>

            <div className="ml-auto flex items-center gap-3 text-slate-700">
              <button className="hidden rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] md:inline-flex">
                🔊 Audio
              </button>
              <button className="rounded-full border border-slate-200 bg-white p-2.5 text-base shadow-sm">
                ⌕
              </button>
              <button className="rounded-full border border-slate-200 bg-white p-2.5 text-base shadow-sm">
                ☰
              </button>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-6 border-t border-slate-200 pt-2 text-[12px] text-slate-600">
            <Link to="/category/Ta'lim" className="hover:text-blue-700">Ta'lim</Link>
            <Link to="/category/Moliya" className="hover:text-blue-700">Moliya</Link>
            <Link to="/category/Avto" className="hover:text-blue-700">Avto</Link>
            <Link to="/category/Sog'lom hayot" className="hover:text-blue-700">Sog'lom hayot</Link>
            <Link to="/category/Ko'chmas mulk" className="hover:text-blue-700">Ko'chmas mulk</Link>
            <Link to="/category/Ayollar dunyosi" className="hover:text-blue-700">Ayollar dunyosi</Link>
            <Link to="/category/Turizm" className="hover:text-blue-700">Turizm</Link>
            <Link to="/category/Biznes" className="hover:text-blue-700">Biznes</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
