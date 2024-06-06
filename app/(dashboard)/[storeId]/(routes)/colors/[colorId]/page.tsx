import prismadb from "@/lib/prismadb";
import { ColorForm } from "./components/color-form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const color = await prismadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });
  // No botão de adicionar nova publicação, é encaminhado para a page 'new' que não sera encontrada uma publicação com o mesmo id da page
  // Usaremos isto para diferenciar e saber qual formulario será usado, um para a criação e outro para a edição da publicação
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
