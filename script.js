// In your JavaScript file, create a function which houses a fetch() request to the RESTCountries API and returns the response in JSON format

let countriesData;

const getCountries = () => {
     fetch ("https://restcountries.com/v3.1/all")
     .then(response => response.json())
     .then(data => {countriesData = data;
        console.log(countriesData)
     
});

}



const displayCountries = (data) => {
    const listContainer = document.createElement("ul");

    data.forEach((country) => {
        
        const countryItem = document.createElement("li");
        const countryName = document.createElement("h2");
        countryName.innerText = country.name.common;
        const population = document.createElement("p");
        population.innerText = `Population: ${country.population}`;
        
        countryItem.appendChild(countryName);
        countryItem.appendChild(population);
        listContainer.appendChild(countryItem);
    
    });

            //clear content b4 population 

    const existingListcontainer = document.querySelector("#countriesList")
    if(existingListcontainer) {
        existingListcontainer.remove();
    }

    document.querySelector("#countriesContainer").appendChild(listContainer);

}

const filterCountries = (value) => {
    const filteredData = countriesData.filter(country => {
        const countryName = country.name.common.toLowerCase();
        return countryName.includes(value.toLowerCase());
    });

    displayCountries(filteredData);
}


// Create a SetUp() function which calls your first function and populates a global variable with the output. Have this function be called on load of your webpage


const setUp = () => {
    getCountries();

    const form = document.querySelector("form");
    const input = document.querySelector("input[type='text']");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log(input.value);
        filterCountries(input.value);
    });

}

window.addEventListener("load", setUp); //window due to DOM

