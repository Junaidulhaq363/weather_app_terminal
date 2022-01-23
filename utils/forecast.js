const request=require("request");
const forecast=(latitude,longitude,callback)=>{
const url="http://api.weatherstack.com/current?access_key=b4e6a148f4568f218a32bdca7cc8a013&query="+ latitude +","+ longitude+"&units=f";
request({url,json:true},(error,{body})=>{
    if(error){
        callback("unable to connect to the database",undefined);

    }
    else if(body.error){
        callback("please provide the complete details for the location to fetch",undefined)
    }
    else{
        callback(undefined,body.current.weather_descriptions+"  The temperature is "+ body.current.temperature +" and it feels like  " +body.current.feelslike);
    }
})
}

module.exports=forecast;