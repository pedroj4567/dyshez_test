import { Order } from "@/types/order.type";

export default function StatusBadge({ status }: { status: Order["status"] }) {
  const statusStyles = {
    Accepted: "bg-green-500/20 text-green-700 ",
    Rejected: "bg-red-50 text-red-500  ",
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
