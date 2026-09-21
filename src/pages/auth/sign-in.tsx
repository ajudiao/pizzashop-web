import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

type signInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInForm>();

  async function handleSignIn(data: signInForm) {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Enviamoes um link de autenticação para o seu email");
  }

  return (
    <div>
      <Helmet title="Login" />
      <div className="p-8">
        <Button className="absolute right-8 top-8 p-4 cursor-pointer" onClick={() => navigate('/sign-up')}>
          Novo estabelecimento
        </Button>

        <div className="w-87.5 flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Aconpannhe suas vendas pelo painel do pareceiro
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4 p-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer"
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
