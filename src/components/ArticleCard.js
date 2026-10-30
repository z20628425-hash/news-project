import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  if (!article) return null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-sky-200/80">
      <Link to={`/article/${article.slug}`} className="block">
        <img src={article.image} alt={article.title} className="h-52 w-full object-cover" />
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-700">
          <span>{article.category}</span>
          <span className="text-slate-500">{article.readTime}</span>
        </div>
        <Link to={`/article/${article.slug}`} className="block text-xl font-bold leading-snug text-slate-900 group-hover:text-sky-700">
          {article.title}
        </Link>
        <p className="text-sm leading-6 text-slate-600">{article.summary}</p>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{article.author}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString('uz-UZ')}</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
