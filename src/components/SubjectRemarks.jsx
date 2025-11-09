import { MessageSquare } from "lucide-react";

export default function SubjectRemarks({ remarks }) {
  const list = remarks && remarks.length ? remarks : [
    { subject: "Math", note: "Strong with equations, needs more work on fractions." },
    { subject: "Science", note: "Understands concepts but rushes through lab reports." },
    { subject: "History", note: "Great recall of dates, focus on cause-effect analysis." },
    { subject: "English", note: "Solid grammar; build confidence in long-form responses." },
  ];

  return (
    <section className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900">Subject Remarks</h2>
      </div>
      <ul className="mt-4 divide-y divide-gray-100">
        {list.map((item, idx) => (
          <li key={idx} className="py-3">
            <p className="font-medium text-gray-900">{item.subject}</p>
            <p className="text-sm text-gray-600 mt-1">{item.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
