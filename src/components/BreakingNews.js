const BreakingNews = ({ items = [] }) => {
  return (
    <div className="mb-6 overflow-hidden rounded-xl border border-sky-200 bg-white shadow-lg shadow-slate-200/60">
      <div className="flex items-center gap-3 bg-gradient-to-r from-sky-600 to-blue-700 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white">
        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
        Tezkor yangiliklar
      </div>
      <div className="divide-y divide-sky-100">
        {items.map((item) => (
          <div key={item.id} className="px-4 py-3 text-sm text-slate-700">
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
