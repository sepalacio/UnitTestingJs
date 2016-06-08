module.exports.toFarenheit = function (temperature){
    return (temperature * 9/5) + 32;
}

module.exports.toCelsius = function (temperature){
    return (temperature - 32) * 5/9;
}