# MemoMates

![MIT Badge](https://img.shields.io/badge/license-MIT-green)

## Technology Used 

| Technology Used (API & Framework)         | Resource URL           | 
| ------------- |:-------------:| 
| AOS Library   | [https://michalsnik.github.io/aos/](https://michalsnik.github.io/aos/) | 
| Bootstrap     | [https://getbootstrap.com](https://getbootstrap.com)  |   
| MYSQL | [https://www.mysql.com/](https://www.mysql.com)     |
| bcrypt   | [https://www.npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt)   |
| Express   | [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)  |
| Handlebars  | [https://handlebarsjs.com](https://handlebarsjs.com)  |

---

## Description 

[Visit the Deployed Site](#)

The site is designed to be simple and easy to use, with a minimalistic interface that allows you to quickly create and store notes about people you want to reconnect with. Whether it's an old friend from high school, a former colleague, or a distant relative, MemoMates can help you stay organized and focused on reaching out to those you've lost touch with. 

## User Stories
``` 
1 User
To see a sign in or sign up form
So that I can sign in or sign up
Front-end login display and html page with a form
Back-end login that serves up a template for html

2 User
I want to submit the sign up form
So that I can create an account
Front-end submit button event listener with a function, and display the newly created users profile
Back-end route api/login POST to display the users profile

3 User
I want to click on a connection
To see the details regarding that connection
Front-end have a href on each connection to profile/connection
Back-end route profile/connection, based on the connection id all details about connection is sent to a template and served up as a populated HTML page

4 User
I want to create a new connection
So that I can enter the information about my connection
Front-end input fields, submit button event listener with function to send post request for api/connection to save to the database
Back-end a POST route to create a connection
```

![User Stories Finished Product](#)


## Table of Contents

* [Code Example](#code-example)
* [Usage](#usage)
* [Author Info & Credits](#author-info-and-credits)
* [License](#license)


## Code Example


### Short example of Bulma being implemented 
```html
  <div class="flexbox">
  <div class="container">
    <div class="columns is-two-fifths">
      <div class="column">
        <label class="label">Find the Best Coffee in any City</label>
        <input class="input is-normal" id="searchTbx" type="text" placeholder="City, State">
        <button class="button is-info mt-2 is-fullwidth" id="searchButton">Search</button>
```

#### Bulma Responsive Design

![Bulma](./assets/images/responsive-design.gif)


### Example of javascript code used to fetch coffee shop names and addresses from Bing Map API
```JS
var bingApiUrl = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=cafe&userLocation=" + coordinates[0] + "," + coordinates[1] + ",5000&key=" + bingApiKey;
    fetch(bingApiUrl).then(function (response) {
      if (response.ok) {
      response.json().then(function (bingData) {
        var coffeeShopsEl = document.getElementById("coffeeShops");
          coffeeShopsEl.innerHTML = '';
          var cafeData = bingData.resourceSets[0].resources;
          console.log(cafeData);
          for (var i = 0; i < cafeData.length; i++) {
            var coffeeShop = {
                name: cafeData[i].name,
                coordinate: cafeData[i].point.coordinates,
                address: cafeData[i].Address.formattedAddress
            }
                coffeeShopsData.push(coffeeShop);
                showcoffeeShop(coffeeShop);
                var cityWordArray = cityName.split("%20");
                cityName = cityWordArray.join(" ");
                Search(cityName)
                }
            })
        }}
    );
                                
```
#### Bing Map API call in action
![Bing API Search Gif](./assets/images/search-function.gif)

### Calling Open Weather Map API 
``` js
function handleCallingApis(cityName) {
    var coordinates = [];
    var GeoApiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + weatherApiKey;
    //This fetch brings the response about Geographical coordinates
    fetch(GeoApiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (geoData) {
                //If the city is not found, the length of data list will be empty
                if (geoData.length === 0) {
                    // alert("The searched city is not found!");
                    citySearch.value = "";
                    var searchedCityModal = document.getElementById('searchedCityModal');
                    searchedCityModal.classList.add('is-active');
                    searchedCityModal.querySelector('.modal-close').addEventListener('click', function () {
                        searchedCityModal.classList.remove('is-active');
                    })

                }
                else {
                    //If city is found, its longitude and lattitude will be retrieved and sent to the weather API
                    coordinates.push(geoData[0].lat);
                    coordinates.push(geoData[0].lon);
                    // Call saveSearch function here
                    saveSearch(cityName);
                    //call the map api to show the curent city
                    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + coordinates[0] + "&lon=" + coordinates[1] + "&appid=" + weatherApiKey;
                    //This fetch brings the response about today's weather
                    fetch(weatherApiUrl).then(function (response) {
                        if (response.ok) {
                            response.json().then(function (todayData) {
                                var tempFarenheit = parseFloat(((todayData.main.temp - 273) * 1.8) + 32).toFixed(2);
                                var cityWordArray = cityName.split("%20");
                                var searchedCityValue = cityWordArray.join(" ");
                                var weatherCondition = {
                                    city: searchedCityValue,
                                    temp: tempFarenheit + " ºF",
                                    icon: todayData.weather[0].icon
                                }
                                showWeatherSituation(weatherCondition)

```

#### Open Weather Map API call in action
![Weather API Image](./assets/images/current_temp.png)


### Quotable API Call
``` js
  var quoteEl = document.getElementById("quote");
  quoteEl.textContent = "";
  var quoteTitleEl = document.getElementById("quote-title");
  quoteTitleEl.textContent = "";
  //This fetch brings a random quote
  var quoteApiUrl = "https://api.quotable.io/random?maxLength=120";
  fetch(quoteApiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (quoteData) {
        var quote = quoteData.content;
        quoteEl.textContent = quote;
        quoteTitleEl.textContent = "Quote of the day :";
      });
    }
      else {
        // alert("There is a connection error!")
        var connectionError = document.getElementById('connectionError');
        connectionError.classList.add('is-active');
        connectionError.querySelector('modal-close').addEventListener('click', function () {
        connectionError.classList.remove('is-active');
      })
    }
    });
  });
```

#### Quotable API call in action
![Quotable API Image](./assets/images/quotable.gif)

## Libraries Used
### Soundcloud Library 
``` html
<div class="box" id="soundCloud">
  <iframe width="100%" height="100" scrolling="no" frameborder="no" allow="autoplay"
       src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/483718232&color=%23be8d34&auto_play=true&sharing=false&hide_related=true&show_user=false&show_reposts=false&buying=false">
   </iframe>
   <div style="font-size: 8px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/lofi-hip-hop-music/sets/lofi-hip-hop-beats" title="𝗟𝗢𝗙𝗜" target="_blank" style="color: #be8d34; text-decoration: overline;">𝗟𝗢𝗙𝗜</a>
    </div>
</div>
```

####  SoundCloud in action
![Soundcloud](./assets/images/music.png)

### Anime.js
``` js
const barista = document.querySelector('.barista');
anime({
  targets: barista,
  keyframes: [
    {translateY: -20},
    {translateX: 75},
    {translateY: 40},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 4000,
  easing: 'easeOutElastic(1, .8)',
});
```

#### Anime.js in action
![Barista Logo Bouncing](./assets/images/barsta-anime.gif)


Short example of additional styling that was added after Bulma layout
```css
#coffeeShops{
    display:flex;
    flex-direction:column;
    height: 300px;
    box-shadow: 5px;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 10px;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
}
```

## Usage 

Once the deployed site link is opened, the user can start their search for a new cafe using the search box by entering a city of their choosing. The page will dynamically update and display coffee shops of the inputed city, generating the name and adresses in a scroll list. That same search will also produce a randomly generated quote of the day and the current weather conditions of the city searched will be displayed in the top right of the page, which can be seen within the image below.
![Fully Functional](assets/images/fully-functional.png)



## Learning Points 

The authors have learned to do research into API and server-side API independent of assistance and learned to overcome issues of implementation if there were any. We also learned to pivot to use alternative API providers to fit our user story. Problem-solving minds were needed in developing application as a group.
We have learned to tie different information from different API to make useful applications that can be used in real life.
We have explored and found that there are numerous resources that we can use and how we can improve our applications for the future. We have also learned how to implement agile working practices and to overcome issues such as Git merge conflicts.

---

## Author Info and Credits

An amazing amount of credit is due to the wonderful team that help bring this webpage to life
Below is each contributors account.

```md
- Didrik: [Github](https://github.com/DidrikLindberg)
- Jonathan: [Github](https://github.com/jonnyboy808/)
- Sabeen: [Github](https://github.com/Sabeen44)
```


## License

![MIT Badge](https://img.shields.io/badge/license-MIT-green)

Copyright (c) 2023 Sabeen44; jonnyboy808; DidrikLindberg;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---

© 2023 Confidential and Proprietary. All Rights Reserved.
