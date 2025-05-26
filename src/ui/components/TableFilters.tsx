const filters = [
  {
    id: 1,
    label: "All",
    active: true,
  },
  {
    id: 2,
    label: "Accepted (4)",
    active: false,
  },
  {
    id: 3,
    label: "Rejected (3)",
    active: false,
  },
];

const activeStyles =
  " rounded-full border-2 border-pink-500 text-pink-500 font-semibold bg-pink-50 text-md";

export default function TableFilters() {
  return (
    <div className="flex items-center gap-3 border-b-2 border-slate-200 h-20  px-5">
      <span className="font-semibold text-lg">Number of orders</span>

      {filters.map((filter) => {
        return (
          <button
            className={` text-sm font-bold  px-4 py-3 ${
              filter.active
                ? activeStyles
                : "rounded-full border border-gray-200 text-gray-500 s"
            }`}
            key={filter.id}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
