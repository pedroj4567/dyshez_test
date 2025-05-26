export type Order = {
  id: string | number;
  customer: string;
  date: Date | string;
  time: Date | string;
  mode: string;
  total: number | string;
  payment: string;
  status: "Accepted" | "Rejected";
};
