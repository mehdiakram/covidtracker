class UI {
    showGlobalData(confirmed, recovered, deaths){

        //query
        const cards = document.querySelector('.cards');

        cards.innerHTML = `
        <div class="card confirmed">
            <h3>${new Intl.NumberFormat("de-DE").format(confirmed)}</h3>
            <div>
                <h5>Total Confirmed</h5>
                <p>Number of infected cases.</p>
            </div>
        </div>

        <div class="card recovered">
            <h3>${new Intl.NumberFormat("de-DE").format(recovered)}</h3>
            <div>
                <h5>Total Recovered</h5>
                <p>Number of recovered.</p>
            </div>
        </div>

        <div class="card deaths">
            <h3>${new Intl.NumberFormat("de-DE").format(deaths)}</h3>
            <div>
                <h5>Total Deaths</h5>
                <p>Number of deaths.</p>
            </div>
        </div>
        `;
    }
    countryList(countries){
        const selection = document.querySelector('select');
        
        countries.map(country => {
            selection.innerHTML += `
                <option value="${country.CountryCode}">${country.Country}</option>
            `;
        });
    };
    countryData(country){
        
        const countryDetails = document.querySelector('.countryDetails');

        countryDetails.innerHTML = `
            <h3>${country.Country}</h3>
            <p><b>Total Confirmed:</b>${new Intl.NumberFormat("de-DE").format(country.TotalConfirmed)}</p>
            <p><b>Total Recovered:</b>${new Intl.NumberFormat("de-DE").format(country.TotalRecovered)}</p>
            <p><b>TotalDeaths:</b>${new Intl.NumberFormat("de-DE").format(country.TotalDeaths)}</p>
        `;

    }
};