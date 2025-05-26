import StatusBadge from "./StatusBadge";

export default function TableRow({ order }) {
  return (
    <tr className="border-b last:border-b-0 hover:bg-gray-50">
      <td className="py-3 px-3">{order.id}</td>
      <td className="py-3 px-3">{order.customer}</td>
      <td className="py-3 px-3">{order.date}</td>
      <td className="py-3 px-3">{order.time}</td>
      <td className="py-3 px-3">{order.mode}</td>
      <td className="py-3 px-3">{order.total}</td>
      <td className="py-3 px-3">{order.payment}</td>
      <td className="py-3 px-3">
        <StatusBadge status={order.status} />
      </td>
    </tr>
  );
}
