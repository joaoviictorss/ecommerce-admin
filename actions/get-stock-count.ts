import prismadb from "@/lib/prismadb";

export const getStockCount = async (storeId: string) => {
  const sotckCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: true,
    },
  });

  return sotckCount;
};
