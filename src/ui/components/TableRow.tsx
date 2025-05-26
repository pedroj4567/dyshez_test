import { Order } from "@/types/order.type";
import StatusBadge from "./StatusBadge";

export default function TableRow({ order }: { order: Order }) {
  return (
    <tr className="border-b border-slate-300 last:border-b-0 hover:bg-gray-50 h-[72px] text-center text-slate-600">
      <td className="py-3 px-6">{order.id}</td>
      <td className="py-3 w-60">{`${order.clients.name}  ${order.clients.lastname}`}</td>
      <td className="py-3 px-6">{order.date?.toString() ?? ""}</td>
      <td className="py-3 px-6">{order.time.toString()}</td>
      <td className="py-3 px-6">{order.mode}</td>
      <td className="py-3 px-6">{order.total}</td>
      <td className="py-3 px-6 text-left w-65">{order.payment_method}</td>
      <td className="py-3 px-6">
        <StatusBadge status={order.status} />
      </td>
    </tr>
  );
}
