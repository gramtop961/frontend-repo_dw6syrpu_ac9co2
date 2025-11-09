import { useMemo, useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import ProgressOverview from "./components/ProgressOverview";
import WeakAreas from "./components/WeakAreas";
import SubjectRemarks from "./components/SubjectRemarks";
import Recommendations from "./components/Recommendations";

function App() {
  const [student, setStudent] = useState("Alex Johnson");

  // Mocked sample data for the UI demo. In a full app this would come from the backend.
  const data = useMemo(() => {
    const datasets = {
      "Alex Johnson": {
        progress: { completed: 42, inProgress: 5, mastery: 76 },
        weakAreas: [
          { topic: "Fractions: Comparing unlike denominators", detail: "Accuracy 58% across last 20 questions" },
          { topic: "Photosynthesis inputs/outputs", detail: "Missed 3/5 on quick checks" },
        ],
      },
      "Maria Chen": {
        progress: { completed: 35, inProgress: 8, mastery: 68 },
        weakAreas: [
          { topic: "Linear equations: word problems", detail: "Struggles to translate scenarios to expressions" },
          { topic: "Civics: branches of government", detail: "Confuses powers and responsibilities" },
        ],
      },
      "Sam Rivera": {
        progress: { completed: 51, inProgress: 2, mastery: 83 },
        weakAreas: [
          { topic: "Grammar: complex sentences", detail: "Overuses commas; needs practice with clauses" },
        ],
      },
    };
    return datasets[student];
  }, [student]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <DashboardHeader studentName={student} onChangeStudent={setStudent} />

        <div className="grid grid-cols-1 gap-6">
          <ProgressOverview progress={data.progress} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <WeakAreas topics={data.weakAreas} />
              <Recommendations />
            </div>
            <div className="md:col-span-1">
              <SubjectRemarks />
            </div>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 pt-4">
          Built for students, teachers, and families to stay aligned.
        </footer>
      </div>
    </div>
  );
}

export default App;
