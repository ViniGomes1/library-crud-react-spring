import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BookData } from "interfaces/book-data";

const API_URL = "http://localhost:8080" //http://localhost:8080/books/register 

const postData = async (data: BookData) => {
    return await axios.post(API_URL + "/books/register", data)
}


export function useBookMutate() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book-data']})
        }
    })

    return mutate;
}
