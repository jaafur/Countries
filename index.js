let countryName = document.querySelector(".country-name"),
    search = document.querySelector(".search")
    result = document.querySelector(".result")

search.addEventListener('click', ()=>{
    let countryValue = countryName.value,
        searchUrl = `https://restcountries.com/v2/name/${countryValue}?fullText=true`
    if (countryValue =="") {
        alert("Please Enter Country Name")
        
    }else
    fetch(searchUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data[0]),
    console.log(data[0].flag),
    console.log(data[0].capital),
    console.log(data[0].population),
    console.log(`${data[0].currencies[0].name} - ${data[0].currencies[0].symbol}`),
    console.log(data[0].languages[0].name)
    result.innerHTML = `<img src="${data[0].flag}" class="flag">
                        <h3 class="native-name">${data[0].nativeName}</h3>
                        <h4>Capital : ${data[0].capital}</h4>
                        <h4>Population : ${data[0].population}</h4>
                        <h4>Language : ${data[0].languages[0].name}</h4>
                        <h4>Currency : ${data[0].currencies[0].name} </h4>
                        <h4>Currency Symbol : ${data[0].currencies[0].symbol}</h4>`
    
})
  .catch(err => console.log('Error:', err.message));
  
// countryInfo.innerHTML = `<img src="${data[0].flags.svg}" class="flag">`
})
// object.keys?





