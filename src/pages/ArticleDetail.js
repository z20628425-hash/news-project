import { useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import Sidebar from '../components/Sidebar';
import { getArticleBySlug, newsItems } from '../api/newsService';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <div className="rounded-2xl bg-white p-8 text-center text-slate-700 shadow-sm">Maqola topilmadi.</div>;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
        <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
          <span>{article.category}</span>
          <span className="text-slate-400">•</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-4xl font-black leading-tight text-slate-900">{article.title}</h1>

        <div className="mt-5 flex items-center justify-between border-y border-slate-200 py-3 text-sm text-slate-500">
          <span>{article.author}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        </div>

        <img src={article.image} alt={article.title} className="mt-6 h-[420px] w-full rounded-2xl object-cover" />

        <div className="article-content mt-8 space-y-5 text-lg leading-8 text-slate-700">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700">
              #{tag}
            </span>
          ))}
        </div>

        <CommentSection />
      </article>

      <div>
        <Sidebar items={newsItems.slice(0, 5)} />
      </div>
    </div>
  );
};

export default ArticleDetail;
