import { signIn } from "@/api/sign-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

type signInForm = z.infer<typeof signInForm>;

export function SignIn() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? ''
    }
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn(data: signInForm) {
    await authenticate({ email: data.email })

    toast.success("Enviamoes um link de autenticação para o seu email", {
      action: {
        label: "Reenviar",
        onClick: () => handleSignIn(data),
      }
    });
  }

  return (
    <div>
      <Helmet title="Login" />
      <div className="p-8">
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
            <Button
              type="button"

              className="w-full cursor-pointer"
              onClick={() => navigate("/sign-up")}
            >
              Novo estabelecimento
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
