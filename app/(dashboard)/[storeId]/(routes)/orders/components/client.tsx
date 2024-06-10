"use client";

import { OrderColumn, columns } from "./columns";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrderColumn[];
}

export const OrderClient = ({ data }: OrderClientProps) => {
  return (
    <>
      <Heading
        title={`Pedidos (${data.length})`}
        description="Gerencie os pedidos da sua loja"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};
