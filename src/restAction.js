import axios from "axios"
import { FAIL, SUCCESS } from "./restConstats";

//dispatchable function to acess datas

export const getData = async (dispatch) => {
    try {
        const { data } = await axios.get('/restaurants.json')
        // dispatch (data.restaurants)
        // console.log(data.restaurants);
        dispatch(
            {
                payload: data.restaurants,
                type: SUCCESS
            }
        )
    }
    catch (err) {
        dispatch(
            {
                payload: err,
                type: FAIL
            }
        )

    }
}