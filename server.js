const data_cities = require('./database/data')
const {fetchUrl} = require('./fetch/fetchMethode')
const {selectRandomCity} = require('./methode/randomSelect')


const getData = async()=>{
    const {lat,lng,name} = selectRandomCity(data_cities)
    const {current_weather:{temperature}} =await fetchUrl(lat,lng)
    console.log(`city name ${name}, current weather ${temperature}`)
}
console.log(getData())