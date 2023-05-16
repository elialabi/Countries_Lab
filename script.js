// In your JavaScript file, create a function which houses a fetch() request to the RESTCountries API and returns the response in JSON format

let countriesData;

const getCountries = () => {
     fetch ("https://restcountries.com/v3.1/all")
     .then(response => response.json())
     .then(data => {countriesData = data;
        console.log(countriesata)
     
})
}

getCountries();


    




// Create a SetUp() function which calls your first function and populates a global variable with the output. Have this function be called on load of your webpage


const setUp = () => {
    getCountries();
}

window.addEventListener("load", setUp); //window due to DOM