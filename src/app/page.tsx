import { Toaster } from "sonner";
import Form from "./form-register/Form";

export default function Home() {
  return (
    <div className="min-h-[90vh] p-8 pb-20 sm:p-20 ">
      <main className="grid lg:flex gap-10">
        <article className="flex flex-col gap-8 items-start lg:w-[40%]">
          <h1 className="text-4xl font-bold">¡Hola Aventira Motors!</h1>
          <p className="text-zinc-600 text-xl font-light">
            Si estás acá es porque te enteraste del gran concurso para nuestros
            clientes. Estamos emocionados de ofrecerte la oportunidad de ganar
            increíbles premios y experiencias únicas con Aventira Motors. No
            pierdas la oportunidad de participar y ser uno de nuestros
            afortunados ganadores. ¡Buena suerte!
          </p>
        </article>
        <article className="flex-1 border rounded-lg p-10">
          <Form />
        </article>
      </main>
      <Toaster />
    </div>
  );
}
