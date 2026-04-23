

const searchcountry= async()=>{
    // console.log(country.value);
    const response=await fetch(`https://restcountries.com/v3.1/name/${country.value}`)
    // console.log(response);
    response.json().then((data)=>{
        // console.log(data);
        //country name 

        let countryName = data[0].name.common
        console.log(countryName);
        
        let official = data[0].name.official
        console.log(official);

        //capital 
        //borders
        //area
        //google map
        //timezone
        //population
    let capital = data[0].capital[0]
    console.log(capital);           

    let borders = data[0].borders
    console.log(borders);       

    let area = data[0].area
    console.log(area);            

    let google_map = data[0].maps.googleMaps
    console.log(google_map);        

    let timezone = data[0].timezones[0]
    console.log(timezone);       

    let population = data[0].population
    console.log(population);     

    let continent = data[0].continents[0]
    console.log(continent);    

    let flag = data[0].flags.png
    console.log(flag);     
    
    languages=[]
    for (let lang in data[0].languages){
        languages.push(data[0].languages[lang])

    }

    // let languages = Object.values(data[0].languages)
    // console.log(languages);       

    let currencies = Object.values(data[0].currencies)[0].name
    console.log(currencies);     

    
    result.innerHTML=`
    
    <div class="left-panel">
          <div class="flag-wrap">
            <img src="${flag}" alt="Flag" />
          </div>
          <div class="info-item">Counter Name: <span>${countryName}</span></div>
          <div class="info-item">
            Official Name: <span>${official}</span>
          </div>
          <div class="info-item">Capital : <span>${capital}</span></div>
        </div>

     
        <div class="right-panel">
          <div class="info-item">
            Borders :
            <span
            ${borders}

             </span
            >
          </div>
          <div class="info-item">Area : <span>${area}</span></div>
          <div class="info-item">Population : <span>${population}</span></div>
          <div class="info-item">Time Zone : <span>${timezone}</span></div>
          <div class="info-item">Continents : <span>${continent}</span></div>
          <div class="info-item">Currency : <span>${currencies}</span></div>
          <div class="info-item">Langugae : <span>${languages}</span></div>
          <div class="info-item">
            Google Map :
                     ${google_map}
            
          </div>
        </div>
    `



        

    })
    
    
}