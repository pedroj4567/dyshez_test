import { Order } from "@/types/order.type";
import { supabase } from "../client";

export class OrdersServices {
  static async getOrders(page: number, limit: number = 10): Promise<Order[]> {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    const { data, error } = await supabase
      .from("orders")
      .select(
        `
      *,
      clients (name, lastname)
    `
      )
      .order("created_at", { ascending: false })
      .range(from, to);

    console.log(data);

    if (error) throw new Error(error.message);
    return data;
  }
}
