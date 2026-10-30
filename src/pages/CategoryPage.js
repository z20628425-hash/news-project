import { useParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import { getArticlesByCategory, categories } from '../api/newsService';

const CategoryPage = () => {
  const { category } = useParams();
  const currentCategory = category || 'Barchasi';
  const articles = getArticlesByCategory(currentCategory);

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Kategoriya</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">{currentCategory}</h1>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
          <h3 className="mb-4 text-lg font-black uppercase tracking-wide text-slate-900">Boshqa bo‘limlar</h3>
          <div className="flex flex-wrap gap-2">
            {categories.filter((item) => item !== currentCategory).map((item) => (
              <span key={item} className="rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
        <Sidebar items={articles.slice(0, 5)} />
      </div>
    </div>
  );
};

export default CategoryPage;
