export default function OrderTableHeader() {
  const headers = [
    "Order ID",
    "Customer",
    "Date",
    "Time",
    "Mode",
    "Total",
    "Payment Method",
    "Status",
  ];
  return (
    <thead>
      <tr className="text-gray-400 text-left">
        {headers.map((header) => (
          <th key={header} className="py-2 px-3 font-semibold">
            {header} <span className="inline-block align-middle">↕️</span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
