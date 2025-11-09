import { Lightbulb, ArrowRight } from "lucide-react";

export default function Recommendations({ items }) {
  const recs = items && items.length ? items : [
    {
      title: "Practice Fractions",
      detail: "Complete 2 sets of fraction comparison exercises.",
      action: "Start Practice",
    },
    {
      title: "Review Photosynthesis",
      detail: "Watch a 5-minute recap video and take a quick quiz.",
      action: "Review Now",
    },
    {
      title: "Read: Civil War Summary",
      detail: "Read the 2-page overview and answer 3 reflection questions.",
      action: "Open Reading",
    },
  ];

  return (
    <section className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-amber-500" />
        <h2 className="text-lg font-semibold text-gray-900">Recommendations</h2>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {recs.map((r, idx) => (
          <button
            key={idx}
            className="group text-left p-4 rounded-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-white hover:border-blue-200 hover:shadow-md transition-all"
          >
            <p className="font-medium text-gray-900 flex items-center justify-between">
              {r.title}
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
            </p>
            <p className="text-sm text-gray-600 mt-1">{r.detail}</p>
            <span className="inline-block mt-3 text-sm text-blue-600 font-medium">{r.action}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
