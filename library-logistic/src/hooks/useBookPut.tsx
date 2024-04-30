import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BookData } from "interfaces/book-data";

const API_URL = "http://localhost:8080" //http://localhost:8080/books/edit

const putData = async (data: BookData) => {
    return await axios.put(API_URL + "/books/edit", data)
}


export function useBookPut() {
    const queryClient = useQueryClient()
    const putMutate = useMutation({
        mutationFn: putData,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book-data']})
        }
    })

    return putMutate;
}
