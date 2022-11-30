// const openIntel = (pos) => {
//     const lat = parseFloat(pos.coords.latitude).toFixed(6)
//     const lng = parseFloat(pos.coords.longitude).toFixed(6)
//     const zoom = 17
//     const windy_zoom = 8
//     open(`https://intel.ingress.com/intel?ll=${lat},${lng}&z=${zoom}`,"_blank")
//     open(`https://bannergress.com/map?lat=${lat}&lng=${lng}&zoom=${zoom}`,"_blank")
//     open(`https://www.google.com/maps?daddr=${lat},${lng}`,"_blank")
//     open(`https://warm-sawine-6a72ec.netlify.app/`,"_blank")
//     open(`https://www.windy.com/-NO2-no2?cams,no2,${lat},${lng},${windy_zoom}`,"_blank")
//     open(`https://www.windy.com/-PM2-5-pm2p5?cams,pm2p5,${lat},${lng},${windy_zoom}`,"_blank")
// }
// if (navigator.geolocation) {
//     navigator.geolocation.watchPosition(openIntel)
// } else { 
//     alert("Geolocation is not supported by this browser.")
// }

const showcoor = (pos) => {
    const lat = parseFloat(pos.coords.latitude).toFixed(6)
    const lng = parseFloat(pos.coords.longitude).toFixed(6)
    $(`#lat`).text(`${lat}`)
    $(`#lng`).text(`${lng}`)
}
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showcoor)
} else { 
    alert("Geolocation is not supported by this browser.")
}