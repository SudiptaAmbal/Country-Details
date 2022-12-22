const searchInput = document.getElementById("input-text");
const searchBtn = document.getElementById("search");
const result = document.querySelector(".result")
const more = document.querySelector(".more")
const moreinfoBtn = document.getElementById("more-info");
const moreData = document.querySelector(".more-data")

searchBtn.addEventListener("click", () => {
    const countryName = searchInput.value;
    // const countryName = "India";
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);

            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].capital[0]);
            // console.log(data[0].area);
            // console.log(data[0].population);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(Object.values(data[0].currencies)[0].name);
            // console.log(Object.values(data[0].languages).toString().split(",").join(", "));
            // console.log(data[0].subregion);
            // console.log(data[0].timezones[0]);
            // console.log(Object.values(data[0].idd)[0] + Object.values(data[0].idd)[1][0]);

            result.innerHTML = `
                <img src="${data[0].flags.svg}" class="flag">
                <h1>${data[0].name.common}</h1>
                <div class="primary-data">
                    <div class="data">
                        <h4>Capital: </h4>
                        <span>${data[0].capital[0]}</span>
                    </div>
                    <div class="data">
                        <h4>Area: </h4>
                        <span>${data[0].area.toLocaleString('en-US')} KM<sup>2</sup></span>
                    </div>
                    <div class="data">
                        <h4>Population: </h4>
                        <span>${data[0].population.toLocaleString('en-US')}</span>
                    </div>
                    <div class="data">
                        <h4>Continent: </h4>
                        <span>${data[0].continents[0]}</span>
                    </div>
                    <div class="data">
                        <h4>Currencies: </h4>
                        <span>${Object.keys(data[0].currencies)[0]}, ${Object.values(data[0].currencies)[0].name}</span>
                    </div>
                    <div class="data">
                        <h4>Languages: </h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>
            `
            moreinfoBtn.classList.remove("inactive")

            moreData.innerHTML = `
                <div class="data">
                    <h4>Subregion: </h4>
                    <span>${data[0].subregion}</span>
                </div>
                <div class="data">
                    <h4>Timezone: </h4>
                    <span>${data[0].timezones[0]}</span>
                </div>
                <div class="data">
                    <h4>Country Calling Code: </h4>
                    <span>${Object.values(data[0].idd)[0] + Object.values(data[0].idd)[1][0]}</span>
                </div>
            `;
            
            moreData.classList.add("inactive")
            
            
            
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`
                moreData.classList.add("inactive")
                moreinfoBtn.classList.add("inactive")
            } else {
                result.innerHTML = `<h3>Please enter a valid country name</h3>`
                moreData.classList.add("inactive")
                moreinfoBtn.classList.add("inactive")
            }
        })

})
    
moreinfoBtn.addEventListener("click", () => {
    moreinfoBtn.classList.add("inactive")
    moreData.classList.remove("inactive")
})