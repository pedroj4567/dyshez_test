export type TablePaginationProps = { currentPage: number; totalPages: number };

export default function TablePagination({
  currentPage,
  totalPages,
}: TablePaginationProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
        &lt;
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold ${
            currentPage === i + 1
              ? "border-2 border-pink-500 text-pink-500"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100">
        &gt;
      </button>
    </div>
  );
}
