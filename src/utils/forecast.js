const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=130ad4598ae365c652a3694b07f8b03a&query='+ longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] +', current temperature is '+ body.current.temperature + ' and its feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast