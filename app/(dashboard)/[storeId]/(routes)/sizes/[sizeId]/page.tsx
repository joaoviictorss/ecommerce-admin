import prismadb from "@/lib/prismadb";
import { SizeForm } from "./components/size-form";

const SizePage = async ({
  params,
}: {
  params: { sizeId: string };
}) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  // No botão de adicionar nova publicação, é encaminhado para a page 'new' que não sera encontrada uma publicação com o mesmo id da page
  // Usaremos isto para diferenciar e saber qual formulario será usado, um para a criação e outro para a edição da publicação
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size}/>
      </div>
    </div>
  );
};

export default SizePage;
