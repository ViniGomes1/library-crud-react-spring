import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BookResponse } from "interfaces/book-data";

const API_URL = "http://localhost:8080"

const fechData = async (): Promise<any> => {
    const response = await axios.get<BookResponse>(API_URL + "/books/all")
    return response;
}
//posso passar um 'id' como parametro e colocar enabled: !!id, para que so seja executado com um id
export function useBook(){
    const query = useQuery({
        queryFn: fechData,
        queryKey: ['book-data']
    })

    return {
        ...query,
        data: query.data?.data
    }
}