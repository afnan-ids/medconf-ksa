import axios from "./axios"


export const getExhibitionById = async (id) => {
    try {
        const response = await axios.get(`/Exhibition/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }

}