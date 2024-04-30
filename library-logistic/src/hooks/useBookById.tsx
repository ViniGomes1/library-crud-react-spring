import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { BookResponse } from "interfaces/book-data"

const API_URL = "http://localhost:8080" //http://localhost:8080/books/{codigo}

const getById = async (index: number): Promise<any> => {
    const response = await axios.get<BookResponse>(API_URL + "/books/" + index)
    return response;
}



export function useBookById(index: number) {
    const mutate = useQuery({
        queryKey: ['book-data', index],
        queryFn: () => getById(index),
        enabled: !!index
    })

    return {
        data: mutate.data?.data
    }
}