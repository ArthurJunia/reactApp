import { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
export function useFortnite() {
  const [skins, setSkins] = useState<any>(null);
  const [isFortniteLoading, setFortniteLoading] = useState(true)
  const [fortniteError, setError] = useState<boolean>(false);
  useEffect(() => {
   const fetchSkins = async() => {
    try {
        const data = await ApiService.getFortniteSkins();
        setSkins(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setFortniteLoading(false);
      }  
   }
   fetchSkins();
  },[])
  return {skins, isFortniteLoading, fortniteError}
}