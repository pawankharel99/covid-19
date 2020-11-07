const request = require('request')

const forecast = (location, callback) =>{
url = 'https://api.covid19api.com/dayone/country/'+location

request({url: url , json: true}, (error, response)=>{
    const data = response.body
    const today = response.body.length - 1
    if(error){
        return callback('Unable to connect to service!! Please check your internet connection!!', undefined)
    }else if(data.message){
       return callback('Data you are searching for is '+ data.message +'. Please check the Country name.', undefined)
    }else{
        const dataToday = data[today]
        // console.log(dataToday)
        callback(undefined, {
            date: dataToday.Date,
            cases: dataToday.Confirmed,
            deaths: dataToday.Deaths,
            recovered: dataToday.Recovered,
            active: dataToday.Active
        }
//         // 'Reported Date:'+ dataToday.Date+
//   ' Total Confirmed Cases:'+ dataToday.Confirmed+
//   ' Total Deaths:' +dataToday.Deaths+
//   ' Total Recovered:' +dataToday.Recovered+
//   ' Active Cases:'+ dataToday.Active
  )
    }
    
    })}

    module.exports = forecast