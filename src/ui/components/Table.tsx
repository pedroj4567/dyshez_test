import { Order } from "@/types/order.type";
import TableHeader from "./TableHeaders";
import TableRow from "./TableRow";

export default function Table({ data }: { data: Order[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <TableHeader />
        <tbody>
          {data.map((order) => (
            <TableRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
