import { CheckCircle2, Clock, TrendingUp } from "lucide-react";

export default function ProgressOverview({ progress }) {
  const completed = progress.completed || 0;
  const inProgress = progress.inProgress || 0;
  const mastery = progress.mastery || 0;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-50 text-green-600">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Completed Lessons</p>
            <p className="text-2xl font-semibold text-gray-900">{completed}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">In Progress</p>
            <p className="text-2xl font-semibold text-gray-900">{inProgress}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Mastery</p>
            <p className="text-2xl font-semibold text-gray-900">{mastery}%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
