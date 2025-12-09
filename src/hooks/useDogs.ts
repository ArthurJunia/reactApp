import { useEffect, useState } from "react";
import ApiService from "@/services/ApiService";
import type { Dog } from "@/types/Dog";
export function useDogs() {
  const [dogs, setDogs] = useState<Dog[]>([]);
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