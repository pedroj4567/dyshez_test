"use client";
import { useAuthSession } from "@/hooks/useAuthSession";
import { OrdersServices } from "@/lib/supabase/services";
import { Order } from "@/types/order.type";
import { Spinner, Table, TableFilters } from "@/ui/components";
import { TablePagination } from "@/ui/components";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const OrdersPage = () => {
  const router = useRouter();
  const { loading, session } = useAuthSession(true, "/auth");
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!loading && !session) {
      router.push("/auth");
    }
  }, [loading, session, router]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await OrdersServices.getOrders(1, 10);
      setOrders(response);
    };
    fetchOrders();
  }, []);

  if (loading || !session) {
    return <Spinner />;
  }

  return (
    <section className="mx-10">
      <div className="mt-7 text-3xl font-bold">
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

export default OrdersPage;
