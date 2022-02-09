const urlEst = "http://worldclockapi.com/api/json/est/now";
const urlUtc = "http://worldclockapi.com/api/json/utc/now";
const urlCet = "http://worldclockapi.com/api/jsonp/cet/now?callback=mycallback";

function est() {
    fetch(urlEst)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            let name = data.timeZoneName;
            let hours = data.currentDateTime.substr(11, 5);
            let day = data.currentDateTime.substr(0, 10);
            let dayWeek = data.dayOfTheWeek;
            new Date(data.currentFileTime);
            console.log(Date(data.currentFileTime))
            document.getElementById("est").innerHTML = "Time Zone Name: " + name;
            document.getElementById("est").innerHTML += "<br>Day: " + day;
            document.getElementById("est").innerHTML += "<br>Hours: " + hours;
            document.getElementById("est").innerHTML += "<br>Day of the week: " + dayWeek;
            document.getElementById("est").innerHTML += "<br> Current time of your timezone: " + Date(data.currentFileTime);
        })
}
// est();

function utc() {
    fetch(urlUtc)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            let name = data.timeZoneName;
            let hours = data.currentDateTime.substr(11, 5);
            let day = data.currentDateTime.substr(0, 10);
            let dayWeek = data.dayOfTheWeek;
            new Date(data.currentFileTime);
            console.log(Date(data.currentFileTime))
            document.getElementById("est").innerHTML = "Time Zone Name: " + name;
            document.getElementById("est").innerHTML += "<br>Day: " + day;
            document.getElementById("est").innerHTML += "<br>Hours: " + hours;
            document.getElementById("est").innerHTML += "<br>Day of the week: " + dayWeek;
            document.getElementById("est").innerHTML += "<br> Current time of your timezone: " + Date(data.currentFileTime);
        })
}

//NOT WORKING!

// function cet() {
//     fetch(urlCet, { mode: 'no-cors' })
//         .then(res => res.json())
//         .then((data) => {
//             console.log(data)
//             let name = data.timeZoneName;
//             let hours = data.currentDateTime.substr(11, 5);
//             let day = data.currentDateTime.substr(0, 10);
//             let dayWeek = data.dayOfTheWeek;
//             new Date(data.currentFileTime);
//             console.log(Date(data.currentFileTime))
//             document.getElementById("est").innerHTML = "Time Zone Name: " + name;
//             document.getElementById("est").innerHTML += "<br>Day: " + day;
//             document.getElementById("est").innerHTML += "<br>Hours: " + hours;
//             document.getElementById("est").innerHTML += "<br>Day of the week: " + dayWeek;
//             document.getElementById("est").innerHTML += "<br> Current time of your timezone: " + Date(data.currentFileTime);
//         })
// }

function option() {
    var test = document.getElementById("timezone");
    switch (test.value) {
        case 'est':
            est();
            break;
        case 'utc':
            utc();
            break;
        // <!-- I decided to remove the CET timezone option, because the function is not working on the script.js -->
        // case 'cet':
        //     cet();
        //     break;
        default:
            console.log("No option was selected.")

    }
}

