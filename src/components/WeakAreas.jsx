import { AlertTriangle } from "lucide-react";

export default function WeakAreas({ topics }) {
  if (!topics || topics.length === 0) {
    return (
      <section className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Weak Areas</h2>
        <p className="text-gray-500 mt-2">No weak areas detected. Great job!</p>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-900">Weak Areas</h2>
      <ul className="mt-4 space-y-3">
        {topics.map((item) => (
          <li
            key={item.id || item.topic}
            className="flex items-start gap-3 p-3 rounded-lg bg-rose-50 border border-rose-100"
          >
            <AlertTriangle className="w-5 h-5 text-rose-600 mt-0.5" />
            <div>
              <p className="font-medium text-rose-700">{item.topic}</p>
              <p className="text-sm text-rose-700/80 mt-1">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
