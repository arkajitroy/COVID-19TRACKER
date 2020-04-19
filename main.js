// 1. DOM elements where values will be rendered;
const confirmedElem = document.querySelector("#confirmed");
const activeElem = document.querySelector("#active");
const recoveredElem = document.querySelector("#recovered");
const deceasedElem = document.querySelector("#deceased");

// 2. for storing the data locally
const TotalCases = {
	active: null,
	confirmed: null,
	deaths: null,
	recovered: null
};

// 3. make request to the api server
fetch("https://api.covid19india.org/data.json").then(response => {
	response.json().then(data => {
		console.log("data from server", data);
		const stateData = data.statewise[0];

		// 3.a) Storing the data locally
		TotalCases.active = stateData.active;
		TotalCases.confirmed = stateData.confirmed;
		TotalCases.deaths = stateData.deaths;
		TotalCases.recovered = stateData.recovered;

		console.log("data stored locally", TotalCases);

		// 3.b) updating the UI
		updateUI();
	});
});

// 4. simply updates the UI based on local data
const updateUI = () => {
	confirmedElem.innerHTML = TotalCases.confirmed;
	activeElem.innerHTML = TotalCases.active;
	recoveredElem.innerHTML = TotalCases.recovered;
	deceasedElem.innerHTML = TotalCases.deaths;
};
