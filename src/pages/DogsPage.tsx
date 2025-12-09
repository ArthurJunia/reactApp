import { Button } from "@/components/ui/button";
import { useDogs } from "../hooks/useDogs";
import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { getStorageValue } from "@/hooks/useLocalStorage";
import { useNavigate } from "react-router";
function DogsPage() {
   const userData = getStorageValue("user");
  const navigate = useNavigate();
  console.log(userData);
  if (!userData) {
    navigate("/signup");
  }
  const { dogs, isLoading, error } = useDogs();
  const [isLiked, setLiked] = useState(false);
  console.log(dogs)
  function handleHearthclicked() {
    setLiked(!isLiked);
  }
  if (error) return <div>Erreur de chargement</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-black">La Meute</h1>
      <div className="flex flex-wrap gap-4 columns-3 items-center justify-center">
        {!isLoading && dogs ? (
          dogs.map((dog: any) => (
            <Card
              className="border-none w-[350px] shadow-md overflow-hidden"
              key={dog.name}
            >
              <CardHeader>
                <CardTitle className="flex justify-center items-center flex-row text-black">
                  <span className="truncate">{dog.name.toUpperCase()}</span>

                  <Button onClick={handleHearthclicked}>
                    {isLiked ? <Heart className="text-red-500 " /> : <Heart />}
                  </Button>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <img
                  className="w-full h-64 object-cover p-4 rounded-2xl"
                  src={dog.image}
                  alt={dog.name}
                />
              </CardContent>

              <CardFooter className="flex items-center justify-center h-16">
                <p>Un super {dog.name}</p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </div>
  );
}

export default DogsPage;
