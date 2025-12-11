import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import type { Dog } from "@/types/Dog";
import { useQuery } from "@tanstack/react-query";
import ApiService from "@/services/ApiService";
import { setStorageValue } from "@/hooks/useLocalStorage";
function DogsPage() {
  const [likedDogs, setLikedDogs] = useState<Dog[]>([]);
  const { data, isLoading, error } = useQuery<Dog[], Error>({
    queryKey: ["dog-list"],
    queryFn: () => ApiService.getAllDogsPopulated(),
    retry: 10,
  });

  function handleHeartClicked(dog: Dog) {
    const isLiked = likedDogs.some((d) => d.name === dog.name);
    if (isLiked) {
      setLikedDogs((prev) => prev.filter((d) => d.name !== dog.name));
    } else {
      setLikedDogs((prev) => [...prev, dog]);
      setStorageValue("likedDogs", [dog]);
    }
  }

  if (error) return <div>Erreur de chargement</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-black">La Meute</h1>
      <div className="flex flex-wrap gap-4 columns-3 items-center justify-center">
        {!isLoading && data ? (
          data.map((dog: Dog) => {
            const isLiked = likedDogs.some((d) => d.name === dog.name);
            return (
              <Card
                className="border-none w-[350px] shadow-md overflow-hidden"
                key={dog.name}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center flex-row text-black">
                    <span className="truncate">{dog.name.toUpperCase()}</span>

                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleHeartClicked(dog)}
                    >
                      {isLiked ? (
                        <Heart className="text-red-500 fill-red-500" />
                      ) : (
                        <Heart className="text-gray-500" />
                      )}
                    </Button>
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0">
                  <img
                    className="w-full h-64 object-cover p-4 rounded-3xl"
                    src={dog.image}
                    alt={dog.name}
                  />
                </CardContent>

                <CardFooter className="flex items-center justify-center h-16">
                  <p className="text-gray-600">Un super {dog.name}</p>
                </CardFooter>
              </Card>
            );
          })
        ) : (
          <p>Chargement...</p>
        )}
      </div>
    </div>
  );
}

export default DogsPage;
