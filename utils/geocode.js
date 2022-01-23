const request=require("request");
const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address +".json?access_token=pk.eyJ1IjoibW5idmNkc2VydHl1am5idmd5IiwiYSI6ImNreHhpcGlyeDRyMW4yeHVicGx2dW91Ym8ifQ.lirfR9kQnbDIJAO2JDW0Jg&limit=1"
    request({url,json:true},(error,{ body})=>{
        if(error){
            callback("unable to connect to the database",undefined);

        }
        else if(body.features.length===0){
            callback("please provide the complete details for the location to fetch",undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name

            })
        }
    })
}
module.exports=geocode;