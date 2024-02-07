async function fetchUrl(lat,lng) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current_weather=true`);
    const data = await response.json();
    return data
}

module.exports = {
    fetchUrl
}