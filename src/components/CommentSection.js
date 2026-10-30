const comments = [
  {
    id: 1,
    name: 'Samandar',
    text: 'Maqola aniq va foydali. Mavzu juda dolzarb bo‘lib tuyuldi.',
  },
  {
    id: 2,
    name: 'Madinabonu',
    text: 'Sayt dizayni va mazmuni qulay. Yangiliklar tezkor va tushunarli.',
  },
  {
    id: 3,
    name: 'Dilshod',
    text: 'Muallifning yondashuvi o‘ta samarali. Keyingi maqolalarni kutaman.',
  },
];

const CommentSection = () => {
  return (
    <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
      <h3 className="mb-5 text-xl font-black text-slate-900">Fikrlar</h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-xl bg-slate-50 p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold text-slate-900">{comment.name}</span>
              <span className="text-xs text-slate-500">Yaqinda</span>
            </div>
            <p className="text-sm leading-6 text-slate-700">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
