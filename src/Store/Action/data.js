import * as actionTypes from "./types";
import axios from "axios";

export const fetchData = ()=>async dispatch=>{

  const values = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(values)
  dispatch( {
    type:'data',
    data:values.data
  });
  
}
export const deleteData = (idx)=>async dispatch=>{

  dispatch( {
    type:'delete',
    data:idx
  });
  
}