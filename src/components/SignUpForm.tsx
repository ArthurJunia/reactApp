import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
export const title = "Signup Form";

const userFormSchema = z.object({
  nom: z.string().min(2, "Le nom dois contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom dois contenir au moins 2 caractères"),
  age: z.coerce.number().min(18, "vous devez avoir 18 ans ou plus"),
});
type UserFormData = z.infer<typeof userFormSchema>;

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {
      nom: "",
      prenom: "",
      age: 25,
    },
  });

  function onSubmit(data: UserFormData) {
    userFormSchema.parse(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dogs");
  }
  return (
    <Card className="border-none max-w-sm p-6 shadow-lg mx-auto mt-20">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-2xl">Connectez-vous</h1>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="prenom">Votre nom</label>
          <Input
            className="bg-background"
            placeholder="Nom"
            type="string"
            {...register("nom")}
          />
          <span className="text-xs text-red-400">
            {errors?.message}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="prenom">Votre prénom</label>
          <Input
            className="bg-background"
            id="prenom"
            placeholder="Prenom"
            type="string"
            {...register("prenom")}
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="age">Votre age</label>

          <Input
            className="bg-background"
            id="age"
            placeholder="Age"
            type="number"
            {...register("age")}
          />
        </div>
        <Button className="w-full bg-black text-white" type="submit">
          Connexion
        </Button>
      </form>
    </Card>
  );
};

export default SignUpForm;
