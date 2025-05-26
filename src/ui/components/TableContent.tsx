import OrderTableHeader from "./TableHeaders";
import TableRow from "./TableRow";

export default function OrderTable({ orders }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <OrderTableHeader />
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
