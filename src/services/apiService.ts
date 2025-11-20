import axios from 'axios';

export default class ApiService {
    public static async getAllDogs() {
        const res = await axios.get(`https://dog.ceo/api/breeds/list/all`);
        return res.data;
    }

}