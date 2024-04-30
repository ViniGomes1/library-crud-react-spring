import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const API_URL = "http://localhost:8080" //http://localhost:8080/books/delete/{codigo}

const deleteData = async (index: number) => {
    return await axios.delete(API_URL + "/books/delete/" + index)
}


export function useBookDelete() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['book-data']})
        }
    })

    return mutate;
}