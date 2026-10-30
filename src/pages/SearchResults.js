import { useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { searchArticles } from '../api/newsService';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = searchArticles(query);

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Qidiruv</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">“{query}” bo‘yicha natijalar</h1>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-600 shadow-lg shadow-slate-200/60">
          Hech narsa topilmadi. Boshqa so‘zni kiriting.
        </div>
      )}
    </div>
  );
};

export default SearchResults;
