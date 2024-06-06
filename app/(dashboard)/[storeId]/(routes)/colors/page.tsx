import prismadb from "@/lib/prismadb";

import { ColorsClient } from "./components/client";
import { ColorColumn} from "./components/columns";

const ColorsPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);
  }

  const formattedColors: ColorColumn[] =colors.map((item) => ({
    id: item.id,
    name: item.name,
    value: item.value,
    createdAt: formatDate(item.createdAt),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
