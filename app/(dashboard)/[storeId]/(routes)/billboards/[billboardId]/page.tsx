import prismadb from "@/lib/prismadb";
import { BillboardForm } from "./components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  // No botão de adicionar nova publicação, é encaminhado para a page 'new' que não sera encontrada uma publicação com o mesmo id da page
  // Usaremos isto para diferenciar e saber qual formulario será usado, um para a criação e outro para a edição da publicação
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard}/>
      </div>
    </div>
  );
};

export default BillboardPage;
