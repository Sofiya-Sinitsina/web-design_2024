const kost_t = document.getElementById('Kost_t')
const kem_t = document.getElementById('Kem_t')
const deb_t = document.getElementById('Deb_t')

const kost_s = document.getElementById('Kost_s')
const kem_s = document.getElementById('Kem_s')
const deb_s = document.getElementById('Deb_s')

async function Api() {
    const respons_kost = await fetch('https://api.open-meteo.com/v1/forecast?latitude=53.2144&longitude=63.6246&current=temperature_2m,wind_speed_10m&hourly=temperature_2m&wind_speed_unit=ms')
    const respons_kem = await fetch('https://api.open-meteo.com/v1/forecast?latitude=55.3333&longitude=86.0833&current=temperature_2m,wind_speed_10m&hourly=temperature_2m&wind_speed_unit=ms')
    const respons_deb = await fetch('https://api.open-meteo.com/v1/forecast?latitude=47.5317&longitude=21.6244&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,uv_index&wind_speed_unit=ms')
    const data_kost = await respons_kost.json()
    const data_kem = await respons_kem.json()
    const data_deb = await respons_deb.json()
    return [data_kost, data_kem, data_deb]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        kost_t.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        kem_t.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        deb_t.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        kost_s.textContent = `Wind speed: ${out[0].current.wind_speed_10m} m/s`
        kem_s.textContent = `Wind speed: ${out[1].current.wind_speed_10m} m/s`
        deb_s.textContent = `Wind speed: ${out[2].current.wind_speed_10m} m/s`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(out, 10000)
    }
}

output()