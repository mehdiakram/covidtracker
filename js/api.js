class Data {
    constructor(){
        this.baseURI = 'https://api.covid19api.com/summary';
    }
    async getData() {
        const response = await fetch(this.baseURI);
        const data = response.json();
        return data;
    }
    async globalData() {
        const response = await this.getData();
        return response.Global;
    }
    async countriesData(){
        const response = await this.getData();
        return response.Countries;
    }
}