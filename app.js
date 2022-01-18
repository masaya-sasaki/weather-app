window.addEventListener('DOMContentLoaded',()=>{
    let long; 
    let lat; 
    let item = document.querySelector('.location-timezone')
    let imageIcon = document.getElementById('icon')
    let temperatureDegree = document.querySelector('.temperature-degree')
    let location = document.querySelector('.location-timezone')
    let temperatureDescription = document.querySelector('.temperature-description')
    let degreeSection = document.querySelector('.degree-section')
    let temperatureSpan = document.querySelector('.temperature span')


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude
            lat = position.coords.latitude 
            const api = `http://api.weatherapi.com/v1/current.json?key=16bfc045f83a4634bbe210521221801&q=${lat}, ${long}&aqi=no`

            fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    const {icon,text} = data.current.condition
                    const {temp_c,temp_f} = data.current 
                    location.textContent = data.location.name 
                    imageIcon.src=icon
                    temperatureDescription.textContent = text
                    if(temperatureSpan.textContent=='F'){
                        temperatureDegree.textContent = temp_f
                    }
                    else if(temperatureSpan.textContent=='C'){
                        temperatureDegree.textContent = temp_c
                    }
                    degreeSection.addEventListener('click',()=>{
                        if(temperatureSpan.textContent=='F'){
                            temperatureSpan.textContent = 'C'
                            temperatureDegree.textContent = temp_c
                        }
                        else if(temperatureSpan.textContent=='C'){
                            temperatureSpan.textContent = 'F'
                            temperatureDegree.textContent = temp_f
                        }
                    })
                })
                })
    }   
    else{
    }

    

}); 