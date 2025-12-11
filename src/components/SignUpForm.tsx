import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export const title = "Signup Form";

const userFormSchema = z.object({
  nom: z.string().min(2, "Le nom dois contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom dois contenir au moins 2 caractères"),
  age: z.number().int().min(18, "vous devez avoir 18 ans ou plus"),
});
type UserFormData = z.infer<typeof userFormSchema>;

const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(userFormSchema),
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
          {errors.nom && (<p className="text-red-500 text-sm">{errors.nom.message}</p>)}
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
          {errors.prenom && (<p className="text-red-500 text-sm">{errors.prenom.message}</p>)}

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
