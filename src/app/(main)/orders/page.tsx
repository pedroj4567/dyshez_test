import { Order } from "@/types/order.type";
import { Table, TableFilters } from "@/ui/components";
import { TablePagination } from "@/ui/components";
import React from "react";

const orders: Order[] = [
  {
    id: "#897632",
    customer: "Alicia Vega",
    date: "21/05/2023",
    time: "2:55 p.m.",
    mode: "Pick Up",
    total: "$330.00",
    payment: "Stripe",
    status: "Accepted",
  },
  {
    id: "#345782",
    customer: "Lupita Álvarez",
    date: "23/06/2023",
    time: "1:51 p.m.",
    mode: "Delivery",
    total: "$260.00",
    payment: "Transfer",
    status: "Accepted",
  },
  {
    id: "#653215",
    customer: "Marco Antonio",
    date: "12/02/2022",
    time: "1:47 p.m.",
    mode: "Pick Up",
    total: "$656.00",
    payment: "Cash",
    status: "Accepted",
  },
  {
    id: "#897637",
    customer: "Reyna Esquivel",
    date: "21/05/2023",
    time: "1:38 p.m.",
    mode: "Pick Up",
    total: "$210.00",
    payment: "Banking Card (Terminal)",
    status: "Rejected",
  },
  {
    id: "#345789",
    customer: "José Matías",
    date: "23/06/2023",
    time: "1:15 p.m.",
    mode: "Delivery",
    total: "$392.00",
    payment: "Stripe",
    status: "Accepted",
  },
  {
    id: "#653211",
    customer: "Ricardo Ponce",
    date: "12/02/2022",
    time: "11:39 a.m.",
    mode: "Pick Up",
    total: "$340.00",
    payment: "$100 USD Off!",
    status: "Rejected",
  },
  {
    id: "#897634",
    customer: "Esteban Aguilar",
    date: "21/05/2023",
    time: "10:00 a.m.",
    mode: "Delivery",
    total: "$392.00",
    payment: "Get 1 FREE soda!",
    status: "Accepted",
  },
];

const page = () => {
  return (
    <section className="mx-10">
      <div className=" mt-7  text-3xl font-bold">
        <h2>Orders</h2>
      </div>

      <div className="mt-10 shadow-2xl rounded-2xl">
        <TableFilters />
        <Table data={orders} />
        <TablePagination currentPage={1} totalPages={6} />
      </div>
    </section>
  );
};

export default page;
