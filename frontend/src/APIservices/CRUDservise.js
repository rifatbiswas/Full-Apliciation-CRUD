import axios from "axios";

export function Craete(ProductName, ProductCode, ProductImg, UnitPrice, Quantity, TotalPrice) {
  const URL = "/api/v1/CreateProduct";

  const PostBody = {
    ProductName,
    ProductCode,
    ProductImg,
    UnitPrice,
    Quantity,
    TotalPrice,
  };
  return axios.post(URL, PostBody)

  .then((res)=>{
    if(res.status===200){
        return true;
    }
    else{
        return false
    }
  })
  .catch((err)=>{
        console.log(err);
        return false
  });
};

export function Read(){
    const URL = "/api/v1/ReadProduct";
return axios.get(URL)
    .then((res)=>{
        if(res.status===200){
            return res.data["data"]
        }
        else{
            return false
        }
    })
    .catch((err)=>{
        console.log(err);
        return false
    });

};

export function Delete(id){
    const URL = "/api/v1/DeletProduct" + id;
 return  axios.get(URL)
    .then((res)=>{
        if(res.status===200){
            return true
        }
        else{
            return false
        }
    })
    .catch((err)=>{
        console.log(err);
        return false
    });

};

export function Update(id){
    const URL = "/api/v1/UpdateProduct" + id;
    const PostBody = {
        ProductName,
        ProductCode,
        ProductImg,
        UnitPrice,
        Quantity,
        TotalPrice,
      };
 return axios.post(URL, PostBody)

  .then((res)=>{
    if(res.status===200){
        return true;
    }
    else{
        return false
    }
  })
  .catch((err)=>{
        console.log(err);
        return false
  });

};

