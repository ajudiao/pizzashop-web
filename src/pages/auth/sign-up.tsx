import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register-restaurant"

const signUpFormSchema = z.object({
  restauranteName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.email("Digite um e-mail válido"),
});

type SignUpForm = z.infer<typeof signUpFormSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  });

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restauranteName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone
      })

      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`)
        }
      });
      reset()      
    } catch {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <div>
      <Helmet title="Cadastro" />

      <div className="p-8">

        <div className="flex w-87.5 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>

            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4 p-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restauranteName">Nome do estabelecimento</Label>

              <Input
                id="restauranteName"
                type="text"
                {...register("restauranteName")}
              />

              {errors.managerName && (
                <p className="text-sm text-red-500">
                  {errors.managerName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>

              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />

              {errors.managerName && (
                <p className="text-sm text-red-500">
                  {errors.managerName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>

              <Input id="email" type="email" {...register("email")} />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Telefonel</Label>

              <Input id="telefone" type="tel" {...register("phone")} />

              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full cursor-pointer"
            >
              {isSubmitting ? "Aguarde..." : "Cadastrar"}
            </Button>
            <Button
              type="button"

              className="w-full cursor-pointer"
              onClick={() => navigate("/sign-in")}
            >
              Fazer Login
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, voce concorda com nossos{" "}
              <a className="underline underline-offset-3"> termos serviços</a> e{" "}
              <a className="underline underline-offset-3">
                políticas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
