import { useDogs } from "../hooks/useDogs"
function dogsPage() {
const { dogs, isLoading, error } = useDogs();

 
return (
    <div className='flex'>
    
   {!isLoading && Object.keys(dogs.message).map((breed) => (
          
           <div key={breed} className="border p-2 rounded">
               {breed} 
           </div>
       ))}
    </div>
  )
}

export default dogsPage