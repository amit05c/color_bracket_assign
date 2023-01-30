import { baseUrl } from "./baseUrl"
import axios from "axios"
export const RecipeData= (endPoints)=>{
    return axios.get(`${baseUrl}/${endPoints}`)
}

export const SignupApi=(endPoints,data)=>{
    return axios.post(`${baseUrl}/${endPoints}`,data)
}

export const LoginApi=(endPoints,data)=>{
    return axios.post(`${baseUrl}/${endPoints}`,data)
}


