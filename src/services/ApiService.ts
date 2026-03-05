import axios from 'axios';

export default class ApiService {
    
    private static async getAllDogs() {
        const res = await axios.get(`${import.meta.env.VITE_DOG_API_URL}/breeds/list/all`);
        return res.data;
    }

    private static async getRandomDogImageByName(dogname:string) {
        const res = await axios.get(`${import.meta.env.VITE_DOG_API_URL}/breed/${dogname}/images/random`);
        return res.data;
    }

    public static async getAllDogsPopulated() {
        const dogs = await this.getAllDogs()
        const breeds = Object.keys(dogs.message);
        const requests = breeds.map(async (breed) => {
            const imageResponse = await this.getRandomDogImageByName(breed);
                return {
                    name: breed,
                    image: imageResponse.message, 
                    subBreeds: dogs.message[breed]
                };
            });
        return await Promise.all(requests);
    }

    public static async getFortniteSkins() 
    {
        const res = await axios.get(`${import.meta.env.VITE_FORTNITE_API_URL}/v2/shop`);
        return res.data;
    }

}