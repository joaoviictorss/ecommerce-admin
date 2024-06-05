"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { BillboardColumn, columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumn[]
}

export const BillboardClient = ({
  data
}: BillboardClientProps) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Painel publicitário (${data.length})`}
          description="Gerencie as publicações da sua loja"
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 size-4" />
          Adicionar novo
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label"/>
      <Heading title="API" description="Chamadas de Api do Painel de publicação"/>
      <Separator/>
      <ApiList entityName="billboards" entityIdName="billboardId"/>
    </>
  );
};
