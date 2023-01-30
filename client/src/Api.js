import { baseUrl } from "./baseUrl"
import axios from "axios"
export const RecipeData= (endPoints)=>{
    return axios.get(`${baseUrl}/${endPoints}`)
}


