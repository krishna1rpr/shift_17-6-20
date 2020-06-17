const geocode = require("./utils/geocode")
const forcast = require('./utils/forcast')
/*
geocode("raipur chhattisgarh", (error,data) =>{
    if (error){
        console.log("Error: ",error)
    }
    console.log(data.location)
    // if (data !== undefined){
    //     console.log("data: ",data)
    // }
    forcast(data.latitude,data.longitude,(error,forcastData)=>{
        // if(error !==undefined){
        // }
        // if(data !==undefined){
        // }
        if(error){
            console.log("error: ",error)
        }
        console.log("data: ",forcastData)
        // console.log("It is currently " + data.temperature + " degrees out. There is a " + data.percentage + " chance of rain.")
    })
})
*/
const address = process.argv[2]

if(!address){
    console.log('please provide address')
} else{
    geocode(address, (error,data) =>{
        if (error){
            console.log("Error: ",error)
        }
        console.log(data.location)
            forcast(data.latitude,data.longitude,(error,forcastData)=>{
            if(error){
                console.log("error: ",error)
            }
            console.log("data: ",forcastData)
        })
    })
}