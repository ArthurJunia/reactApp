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
import { useFortnite } from "@/hooks/useFortnite";
function Fortnite() {
  const { skins, isFortniteLoading, fortniteError} = useFortnite();
  console.log(skins);
  const [isLiked, setLiked] = useState(false);

  function handleHearthclicked() {
    setLiked(!isLiked);
  }
  if (fortniteError) return <div>Erreur de chargement</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-black">Les skins</h1>
      <div className="flex flex-wrap gap-4 columns-3 items-center justify-center">
        {!isFortniteLoading && skins ? (
          skins.data.entries.map((skin: any) => (
            console.log(skin),
            <Card
              className="border-none w-[350px] shadow-md overflow-hidden"
              key={skin.name}
            >
              <CardHeader>
                <CardTitle className="flex justify-center items-center flex-row text-black">
                  <span className="truncate">{skin.devName.toUpperCase()}</span>

                  <Button onClick={handleHearthclicked}>
                    {isLiked ? <Heart className="text-red-500 " /> : <Heart />}
                  </Button>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <img
                  className="w-full h-100 object-cover p-4 rounded-2xl"
                  src={skin.bundle?.image || skin.brItems?.[0]?.images?.icon || skin.displayAssets?.[0]?.background}                />
              </CardContent>

              <CardFooter className="flex items-center justify-center h-16">
                <p>Un super {skin.devName}</p>
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

export default Fortnite;
