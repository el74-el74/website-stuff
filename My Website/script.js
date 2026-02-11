/* ==== Javascript ==== */

/* ==== clock ==== */
function updateClock() {
    const now = new Date();  
    const time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    document.getElementById("clock").textContent = time;
}

updateClock(); // instant display of clock

const now = new Date();
const delay = 60000 - (now.getSeconds() * 1000);  // getting seconds then converting to milliseconds, then calculating how long to wait before updating


setTimeout(() => {  // runs once after a delay, "=>" tells code to run later
updateClock(); 
    setInterval(updateClock, 60000); // updates every minute
}, delay);

/* ==== date ==== */
function updateDate() {
    const day = new Date(); // gives current date and time
    const date = day.toLocaleDateString([], {  // formats date nicely
        weekday: 'short', // short day e.g. Mon
        month: 'short', // short month e.g. Sep
        day: 'numeric' // numeric date e.g. 14
    }).toLowerCase();
    
document.getElementById("date").textContent = date;

}
updateDate();
setInterval(updateDate, 86400000);

/* ==== latest page added ==== */
function getNewPage() {
    var fs = require('fs');
    path.basename('/My Website/finished pages', '.html');

document.getElementById("newest-webpage").textContent = newest-webpage

}

getNewPage();

/* ==== update age ==== */

/*function updateAge() {
    const now = new Date();
    const day = day.toLocaleDateString([], {
        age: 'short'
    }) 

    document.getElementById("age").textContext = date;

}

updateAge();

const yearms = 31536000000
const bday = 

const noww = new Date()
const delayy = yearms - (noww.getMilliseconds());

setTimeout => {
updateAge();
    setInterval(updateAge, yearms);

} */

function updateAge() {
    const noww = new Date();
    const age = noww.GetFullDate("December 10, 2009 00:00:00");
}

updateAge();