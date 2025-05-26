export default function TableFilters() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-semibold text-lg">Number of orders</span>
      <button className="px-4 py-1 rounded-full border-2 border-pink-500 text-pink-500 font-semibold bg-pink-50">
        All
      </button>
      <button className="px-4 py-1 rounded-full border border-gray-200 text-gray-500">
        Accepted (4)
      </button>
      <button className="px-4 py-1 rounded-full border border-gray-200 text-gray-500">
        Rejected (3)
      </button>
    </div>
  );
}
