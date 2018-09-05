const request = require('request');

let geocodeAddress = (address) =>{
    let encodedAddress = encodeURIComponent(address)
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body)=>{
        //console.log(JSON.stringify(error, undefined, 2));
        if(error){
            console.log('Unable to connect to Google server')
        }else if(body.status === 'ZERO_RESULTS'){
            console.log('Unable to find the requested address')
        }else if(body.status === 'OK'){
            console.log(undefined, {
                address: body.results[0].formatted_address,
                latitue: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }  
    })
}

module.exports.geocodeAddress = geocodeAddress;

