import { useEffect, useState } from "react";
import ApiService from "@/services/apiService";
export function useDogs() {
  const [dogs, setDogs] = useState<any>(null);
  useEffect(() => {
   const fetchDogs = async() => {
    const data = await ApiService.getAllDogs();
    setDogs(data);   
   }
   fetchDogs();
  },[])
  return dogs
}