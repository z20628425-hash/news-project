import { Link } from 'react-router-dom';

const Sidebar = ({ items = [] }) => {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
      <h3 className="mb-4 text-lg font-black uppercase tracking-wide text-slate-900">Ko‘p o‘qilganlar</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item.id} className="flex gap-3 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
              {index + 1}
            </span>
            <div className="flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">{item.category}</p>
              <Link to={`/article/${item.slug}`} className="mt-1 block text-sm font-semibold leading-6 text-slate-700 hover:text-sky-700">
                {item.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
