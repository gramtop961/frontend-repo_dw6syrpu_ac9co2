import { User, CalendarDays } from "lucide-react";

export default function DashboardHeader({ studentName, onChangeStudent }) {
  return (
    <header className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Personalized Learning Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Track progress, spot weak areas, and get targeted recommendations.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <select
            aria-label="Select student"
            className="appearance-none bg-white border border-gray-200 rounded-lg pl-10 pr-8 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={studentName}
            onChange={(e) => onChangeStudent?.(e.target.value)}
          >
            <option>Alex Johnson</option>
            <option>Maria Chen</option>
            <option>Sam Rivera</option>
          </select>
          <User className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex items-center gap-2 text-gray-600 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
          <CalendarDays className="w-4 h-4" />
          <span className="text-sm">{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </header>
  );
}
