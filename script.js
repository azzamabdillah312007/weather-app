// bagian API
const wheatherApi = 'https://api.weatherapi.com/v1/forecast.json?key=7f09507be4f54bfcacd74927230110&&days=3';

// bagian script HTML
const body = document.querySelector('body');
body.innerHTML = `

<header>
    <div class="content">
        <button class = "menuSubmit"><i class="ri-menu-line"></i></button>
        <input style="input" type="text" placeholder="Enter the city names" required id="inputcity">
        <button class = "btnSubmit"><i class="ri-search-line"></i></button>
        <button class = "btnreset" onclick="reset()"><i class="ri-refresh-line"></i></button>
    </div>
</header>
<div id="sidebar">
    <ul>
        <a href="https://azzamabdillah312007.github.io/myportfolio/" target="blank"><li>About developer</li></a>
        <a href="https://instagram.com/azmabdlh_?igshid=ZGUzMzM3NWJiOQ==" target ="blank"><li>@instagram</li></a>
    </ul>
</div>
<div class = 'isi semua'></div>
 
`;  
// bagian reset 
const btnreset = document.querySelector(".btnreset")

function reset() {
  location.reload()
}

// bagian search
const isi = document.querySelector('.isi');
const input = document.querySelector('#inputcity');
const btnSearch = document.querySelector('.btnSubmit');
btnSearch.addEventListener('click' , ()=>{
  fetch(`${wheatherApi}&q=${input.value}`)
  .then(res => res.json())
  .then(data => { 
    console.log(data);
    isi.innerHTML = `
    <div class = 'date'>
        <div class = 'city'> 
           <p>${data.forecast.forecastday[0].date}</p>
           <h1>${data.location.name}</h1>
           <span>${data.location.country}</span>
           <h3>${data.current.condition.text}</h3>
           <p><i class="ri-temp-cold-line"></i>${data.current.feelslike_c}<i class="ri-celsius-fill"></i></p>
        </div>
    </div>
    <div class = 'benner'>
        <div class ="text">
           <i class="ri-time-line"></i>
           <p>phases of the moon and sun</p>
        </div>
        <div class ="fill">
          <div class ="box moonrise">
             <span>moonrise</span>
             <i class="ri-moon-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].astro.moonrise}</p>
          </div>

          <div class ="box moonset">
            <span>moonset</span>
            <i class="ri-moon-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].astro.moonset}</p>
          </div>

          <div class ="box sunrise">
            <span>sunrise</span>
            <i class="ri-sun-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].astro.sunrise}</p>
          </div>

          <div class ="box sunset">
            <span>sunset</span>
            <i class="ri-sun-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].astro.sunset}</p>
          </div>
        </div>
     </div>





     
     
     <div class = 'benner'>
        <div class ="text">
           <i class="ri-time-line"></i>
           <p>weather conditions at every hour</p>
        </div>
        <div class ="today">
          <div class ="hour">
             <span>00:00 AM</span>
             <i class="ri-moon-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].hour[0].condition.text}</p>
          </div>
          <div class ="hour">
             <span>06:00AM</span>
             <i class="ri-sun-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].hour[6].condition.text}</p>
          </div>
          <div class ="hour">
             <span>12:00 PM</span>
             <i class="ri-sun-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].hour[12].condition.text}</p>
          </div>
          <div class ="hour">
             <span>18:00 PM</span>
             <i class="ri-moon-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].hour[18].condition.text}</p>
          </div>
          <div class ="hour">
             <span>23:00 PM</span>
             <i class="ri-moon-cloudy-fill"></i>
            <p>${data.forecast.forecastday[0].hour[23].condition.text}</p>
          </div>
        </div>
     </div>










     <div class = 'benner'>
        <div class ="nextDay">
            <i class="ri-calendar-todo-line"></i>
            <p>2-DAY FORECAST</p>
        </div>
        <div class ="afterTomorrow">
            <div class ="hari harini">
                <span>${data.forecast.forecastday[1].date}</span>
                <div class = "maxtemp">
                   <img src="https://${data.forecast.forecastday[1].day.condition.icon}" alt="">
                </div>
                <span>${data.forecast.forecastday[0].day.maxtemp_c}<i class="ri-celsius-fill"></i></span>
            </div>

            <div class ="hari besok">
                <span>${data.forecast.forecastday[2].date}</span>
                <div class = "maxtemp">
                   <img src="https://${data.forecast.forecastday[2].day.condition.icon}" alt="">
                </div>
                <span>${data.forecast.forecastday[1].day.maxtemp_c}<i class="ri-celsius-fill"></i></span>
            </div>
        </div>
    </div>


     <div class ="end">
        <p>Last update : ${data.current.last_updated}</p>
     </div>
    `
})
})


// bagian sidebar masih bermasalah
const btnSidebar = document.querySelector('.menuSubmit');
const sideBar = document.querySelector('#sidebar');

btnSidebar.addEventListener('click', () => {
  // Cek apakah 'geser' sudah ada pada classList
  const isGeser = sideBar.classList.contains('geser');
  
  if (isGeser) {
    // Jika 'geser' sudah ada, hilangkan kelas 'geser' dan set left ke "-300px" (atau sesuai yang Anda inginkan)
    sideBar.classList.remove('geser');
    sideBar.style.left = "-300px"; // Atur sesuai keinginan Anda
  } else {
    // Jika 'geser' belum ada, tambahkan kelas 'geser' dan set left ke "0"
    sideBar.classList.add('geser');
    sideBar.style.left = "0";
  }
});
