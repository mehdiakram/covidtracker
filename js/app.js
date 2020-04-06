const data = new Data();
const ui = new UI();

const dataGlobal = data.globalData()
    .then(data => {
        //show total confirmed, recoveres and deaths cases
        ui.showGlobalData(data.TotalConfirmed, data.TotalRecovered, data.TotalDeaths);
    })
    .catch(err => console.log(err));

const countriesList = data.countriesData()
    .then(data => {

        //get list of countries
        const alldata = ui.countryList(data);

        document.querySelector('select').addEventListener('change', e => {
            data.filter(country => {
                if(e.target.value === country.CountryCode){
                    //show deatiled data by the country selected
                    ui.countryData(country)
                }
            })
        })

    });