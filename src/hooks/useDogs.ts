import { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
export function useDogs() {
  const [dogs, setDogs] = useState<any>(null);
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
   const fetchDogs = async() => {
    try {
        const data = await ApiService.getAllDogsPopulated();
        setDogs(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }  
   }
   fetchDogs();
  },[])
  return {dogs, isLoading, error}
}