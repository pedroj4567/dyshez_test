export default function StatusBadge({ status }) {
  const statusStyles = {
    Accepted: "bg-green-50 text-green-600 border border-green-200",
    Rejected: "bg-red-50 text-red-500 border border-red-200",
  };
  return (
    <span
      className={`px-3 py-1 rounded-xl text-xs font-semibold ${
        statusStyles[status] || ""
      }`}
    >
      {status}
    </span>
  );
}
