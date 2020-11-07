const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const message1 = document.querySelector('.message1')
const message2 = document.querySelector('.message2')
const message3 = document.querySelector('.message3')
const message4 = document.querySelector('.message4')
const message5 = document.querySelector('.message5')
const message6 = document.querySelector('.message6')
console.log('hello')
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = searchValue.value
    message1.textContent = 'Loading..'
    message2.textContent = ''
    message3.textContent = ''
    message4.textContent = ''
    message5.textContent = ''
    message6.textContent = ''

    fetch('http://localhost:3000/country?location='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.Error){
            message1.textContent = data.Error
        }else{
            message1.textContent = 'Covid Report of '+ location.toUpperCase()
            message2.textContent = 'Date: '+data.Forecast.date.substring(0,10)
            message3.textContent = 'Total Cases: '+data.Forecast.cases
            message4.textContent = 'Total Deaths: '+data.Forecast.deaths
            message5.textContent = 'Total Recovered Cases: '+data.Forecast.recovered
            message6.textContent = 'Active Cases: '+data.Forecast.active
        }
    })
})
})