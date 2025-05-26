import { PiArrowsDownUpFill } from "react-icons/pi";

export default function TableHeader() {
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
    <thead className="border-b-2 border-slate-200">
      <tr className="text-gray-600 ">
        {headers.map((header) => (
          <th key={header} className="py-3 px-5 text-center font-semibold">
            {header}{" "}
            <span className="inline-block align-middle">
              <PiArrowsDownUpFill size={18} />
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}
