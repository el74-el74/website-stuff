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


/* ==== update age ==== */
function updateAge() {
    const noww = new Date();
    const birthdate = new Date(2009, 11, 10);

    let age = noww.getFullYear() - birthdate.getFullYear();
    console.log(age);
    if (
        noww.getMonth() < birthdate.getMonth() ||  // || means or
        (noww.getMonth() === birthdate.getMonth() &&  // === means equal in value and type && means and
         noww.getDate() < birthdate.getDate())
    ) {
        age--;  // -- shorthand for -1
    }

    document.getElementById("updateAge").textContent = age;
}

updateAge();