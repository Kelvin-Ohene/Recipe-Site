const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async function() {
    const dishInput = document.getElementById('dish-input');
    const dish = dishInput.value;

    const url = `https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=${encodeURIComponent(dish)}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'aec98ea084msh883e245eb606a53p1e346djsnc1c68e020057',
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        // const response = await fetch(url, options);
        //const result = await response.json();
        //console.log(result[0]);
        //displayResults(result);
        fetch(url, options).then((data) => {
            return data.json();
        }).then((completedata) => {
            console.log(completedata);
        })
    } catch (error) {
        console.error(error);
    }
});