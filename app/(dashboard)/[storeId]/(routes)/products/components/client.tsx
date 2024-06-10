"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { ProductColumn, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient = ({ data }: ProductClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Produtos (${data.length})`}
          description="Gerencie seus produtos da sua loja"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 size-4" />
          Adicionar novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
      <Heading title="API" description="Chamadas de Api para os Produtos" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};
