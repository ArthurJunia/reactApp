import { useLocalStorage } from "@/hooks/useLocalStorage"; 
import { useNavigate } from "react-router-dom";

export default function ProtectedRouteProps(){
const [userData] = useLocalStorage("userData", { nom: "", prenom: "", age: 0 });
const navigate = useNavigate();
  if (!userData.nom) {
    return navigate("/signup");
  }
};