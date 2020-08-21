import { useGet } from "./useGet"
import { URL_BASE } from "../helpers/api";

export const useSearch = (media,query,page = 1)=>{

    const endpoint = query === "trending" 
    ? `/trending/${media}/week`
    : `/${media}/${query}`;

    const url = `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`

    return useGet(url);
}   