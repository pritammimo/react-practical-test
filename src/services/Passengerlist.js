import { ApiHelperFunction } from "./Apihelper";

export const PassengerList = async(page,size)=>{
    console.log("page",page,size);
    const response = await ApiHelperFunction({
        urlPath: `/passenger?page=${page}&size=${size}`,
    //   urlPath: "/countries/list",
      method: "get",
    });
    return response.data;
}
    
