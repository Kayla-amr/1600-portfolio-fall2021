const d = new Date();
console.log(d);

const todayDayNumber = d.getDay();
console.log(todayDayNumber);

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5344994&appid=b62dd7f72642bd75d6b8f493ddf6f562&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);
        
        document.getElementById('place').textContent = `Weather Conditions for ${weatherInfo.city.name}`;
        
        let mylist = weatherInfo.list;

        let forecastDayNumber = todayDayNumber;

        for (i = 0; i < mylist.length; i++) {

            let time = mylist[i].dt_txt;

            if (time.includes('21:00:00')) {
                console.log('Found on entry with 21:00:00 in the time. It was report'+i+' from the mylist of 40');

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {forecastDayNumber = 0;}

                let theDayName = document.createElement('span');
                theDayName.textContent = myweekday[forecastDayNumber];

                let theTemp = document.createElement('p');
                theTemp.textContent = weatherInfo.list[i].main.temp + '\xB0';

                console.log('TEMPERATURE>'+weatherInfo.list[i].main.temp);

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = '//openweathermap.org/img/w/' + iconcode + '.png';
                let theIcon = document.createElement('img');
                theIcon.src = iconPath;

                let theDay = document.createElement('div');
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);
                
                theDay.className = "weatherDay";
                
                document.getElementById('weatherforecast').appendChild(theDay);


            } //end if
        } //end for
    }); //end of "then" fat arrow funtion



