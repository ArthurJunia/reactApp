import { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
import type { ShopEntry } from "@/types/Fortnite";

export function useFortnite() {
  const [skins, setSkins] = useState<ShopEntry[]>([]);
  const [isFortniteLoading, setFortniteLoading] = useState(true);
  const [fortniteError, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        const response = await ApiService.getFortniteSkins();
 
        if (response && response.data && response.data.entries) {
            setSkins(response.data.entries);
        } else {
            setSkins([]); 
        }

      } catch (err) {
        console.error("Erreur Fetch Fortnite:", err);
        setError(true);
      } finally {
        setFortniteLoading(false);
      }
    };
    
    fetchSkins();
  }, []);

  return { skins, isFortniteLoading, fortniteError };
}