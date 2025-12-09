import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "./ui/card";
import type { FormInterface } from "@/types/FormType";
import type { FormEvent } from "react";

export const title = "Signup Form";

const SignUpForm = () => {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    const nomValue = formData.get("nom") as string;
    const prenomValue = formData.get("prenom") as string;
    const ageString = formData.get("age") as string;

    const data: FormInterface = {
      nom: nomValue,
      prenom: prenomValue,
      age: parseInt(ageString, 10),
    };

    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/dogs";
  }
  return (
    <Card className="border-none max-w-sm p-6 shadow-lg mx-auto mt-20">
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2 text-center">
          <h1 className="font-bold text-2xl">Connectez-vous</h1>
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="prenom">Votre nom</label>
          <Input
            className="bg-background"
            placeholder="Nom"
            name="nom"
            type="string"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="prenom">Votre prénom</label>
          <Input
            className="bg-background"
            id="prenom"
            placeholder="Prenom"
            type="string"
            name="prenom"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="age">Votre age</label>

          <Input
            className="bg-background"
            id="age"
            placeholder="Age"
            type="number"
            name="age"
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
