import { useGet } from "./useGet"
import { URL_BASE } from "../helpers/api";

export const useSearch = (media,query,page = 1, language = "es-ES")=>{







let endpoint;
let queryenpoint;

if(media==="multi"){
    endpoint= `/search/multi`
    queryenpoint = `&query=${query}`
}else{
    
     endpoint = query === "trending" 
    ? `/trending/${media}/week`
    : `/${media}/${query}`;
}
    const url = `${URL_BASE}${endpoint}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}${queryenpoint}`

    return useGet(url);
}   