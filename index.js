const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icon span");



//getting new date , current year and month.
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

const Months = ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "Decemebr"];


const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), //getting first day of Month

     lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last Date of Month

     lastDayofMonth = new Date(currYear, currMonth, firstDayofMonth).getDay(), //getting last Day of Month

     lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last Date of previous Month

    let liTag = "";


    for(i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth -i + 1}</li>`;
    }

    for(i = 1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i-lastDayofMonth + 1}</li>`;
   
    }

    currentDate.innerText = `${Months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
 icon.addEventListener("click", () => { //adding click event both icon
currMonth = icon.id === "prev" ? currMonth-1 : currMonth +1;

if (currMonth < 0 || currMonth > 11){
    date = new Date (currYear, currMonth);
    currMonth = date.getMonth();
    currYear = date.getFullYear();
    
}
else{
    date = new Date();
}

renderCalendar();
 });
});