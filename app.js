
const geocode=require("./utils/geocode.js");
const forecast=require("./utils/forecast.js");

    const address=process.argv[2];
geocode(address,(error,{latitude,longitude,location}={})=>{
    if(!address){
        console.log("please provide proper adress to us");
    }
    else {
    if(error){
         return  console.log(error);
    }
    
   
    forecast(latitude,longitude,(error,forecastdata)=>{
        if(error){
            return console.log(error);
        }
       console.log(location);
        console.log(forecastdata);
        })
    }
})

