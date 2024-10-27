let options={
    "method" : "POST",
    "header" : {
        "Content-Type" : "application/json"
    },
    "body" : JSON.stringify({
        "id" : 3,
        "name" : "pnl"
    })
}
fetch("http://localhost:3000/products",options)
    .then(response =>{
        if(response.ok){
            return response.json()
            // console.log("Success")
        }
        else{
            console.log("Error")
        }
    })
    .then(data=> console.log(data))