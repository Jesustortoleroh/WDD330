const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const towns = jsonObject['towns'];
        for (let i = 0; i < prophets.length; i++ ) {

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            let img = document.createElement('img');
            h2.textContent = towns[i].name + ' '  + ' - ' + towns[i].order;
            h3.textContent = towns[i].motto + ' '  + ' - ' + towns[i].order;
            p.innerHTML = 'Year Founded: ' + towns[i].yearFounded + '<br>' +
            'Population: ' + towns[i].currentPopulation + '<br>' +
            'Annual Rain Fall: ' + towns[i].averageRainfall + '</p>';
            img.setAttribute('src', towns[i].imageurl);           
            card.appendChild(h2).appendChild(p).appendChild(img);
            document.querySelector('div.cards').appendChild(card);
        }
    });
