export type Order = {
  id: string | number;
  customer: string;
  date: Date | string;
  time: Date | string;
  mode: string;
  total: number | string;
  payment_method: string;
  status: "Accepted" | "Rejected";
  clients: {
    name: string;
    lastname: string;
  };
};
