import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import { Overview } from "@/components/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";
import { CreditCard, DollarSign, Package } from "lucide-react";

interface DashboardProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId); //Fundos totais
  const salesCount = await getSalesCount(params.storeId); //Contagem de vendas
  const stockCount = await getStockCount(params.storeId); //Contagem de produtos em estoque
  const graphRevenue = await getGraphRevenue(params.storeId); //Dados para o grafico

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 p-8 pt-6 space-y-4">
          <Heading title="Dashboard" description="Visão geral da sua loja" />
          <Separator />
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Fundos Totais
                </CardTitle>
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatter.format(totalRevenue)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                <CreditCard className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+{salesCount}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">
                  Produtos em estoque
                </CardTitle>
                <Package className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stockCount}</div>
              </CardContent>
            </Card>
          </div>
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Visão geral</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview data={graphRevenue} />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
