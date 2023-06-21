import { FAIL, SUCCESS } from "./restConstats"

//reducer
export const restReducer=(state={restList:[]},action)=>{
     switch(action.type){
        case SUCCESS:
            return{
                restList:action.payload
            }
        case FAIL:
            return{
                restList:action.payload
            }
        default:
            return state
     }
}