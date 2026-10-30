import { Link } from 'react-router-dom';
import { getFeaturedArticles, getArticlesByCategory } from '../api/newsService';

const Home = () => {
  const featured = getFeaturedArticles();
  const allArticles = getArticlesByCategory('Barchasi');
  const listArticles = allArticles.slice(0, 6);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,2.15fr)_340px]">
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex border-b border-slate-200 bg-[#f8fafc]">
          <button className="border-b-2 border-blue-700 bg-white px-5 py-3 text-sm font-bold text-blue-700">
            Yangiliklar
          </button>
          <button className="px-5 py-3 text-sm font-medium text-slate-600">
            Dajest
          </button>
        </div>

        <div className="divide-y divide-slate-200">
          {listArticles.map((article, index) => (
            <article key={article.id} className="p-5">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                <span>{article.publishedAt}</span>
                <span className="text-slate-400">•</span>
                <span>{article.category}</span>
              </div>

              <div className={index === 0 ? 'mb-3' : ''}>
                <div className={index === 0 ? 'grid gap-4 xl:grid-cols-[1.3fr_0.7fr]' : ''}>
                  <div>
                    <Link to={`/article/${article.slug}`} className="block text-[22px] font-black leading-tight text-slate-800 hover:text-blue-700">
                      {article.title}
                    </Link>
                    {index === 0 ? <p className="mt-3 text-base leading-7 text-slate-600">{article.summary}</p> : null}
                  </div>

                  {index === 0 ? (
                    <img src={featured[0]?.image} alt={article.title} className="h-36 w-full rounded-xl object-cover" />
                  ) : null}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3 text-[12px] text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <span>◔</span>
                    {article.readTime}
                  </span>
                  <span>{article.author}</span>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-lg text-slate-500">
                  ⎘
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-2">
          <h3 className="text-[20px] font-black text-slate-800">So‘nggi yangiliklar</h3>
          <div className="flex gap-2 text-[12px]">
            <button className="rounded-full bg-blue-700 px-3 py-1.5 font-semibold text-white">Barchasi</button>
            <button className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-medium text-slate-600">Ommabop</button>
          </div>
        </div>

        <div className="space-y-4">
          {allArticles.slice(0, 8).map((article) => (
            <div key={article.id} className="border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
              <Link to={`/article/${article.slug}`} className="block text-[15px] font-semibold leading-6 text-slate-800 hover:text-blue-700">
                {article.title}
              </Link>
              <div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-slate-500">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Home;
