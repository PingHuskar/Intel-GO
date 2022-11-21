const openIntel = (pos) => {
    const lat = parseFloat(pos.coords.latitude).toFixed(6)
    const lng = parseFloat(pos.coords.longitude).toFixed(6)
    open(`https://intel.ingress.com/intel?ll=${lat},${lng}&z=17`,"_blank")
    open(`https://www.google.com/maps?daddr=${lat},${lng}`,"_blank")
    open(`https://warm-sawine-6a72ec.netlify.app/`,"_blank")
}
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(openIntel)
} else { 
    alert("Geolocation is not supported by this browser.")
}