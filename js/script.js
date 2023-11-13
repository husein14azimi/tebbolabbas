// const dateEl = document.querySelector(".date");
// const currentDate = new Date();
// dateEl.textContent = currentDate;

function RefreshDate() {
  var refresh_date = setTimeout('ShowDate();', 1000);
}

function ShowDate() {
  var now = new Date();

  // var date= now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
  var time =
    now.getHours().toLocaleString('fa-IR', { minimumIntegerDigits: 2 }) + ":" +
    now.getMinutes().toLocaleString('fa-IR', { minimumIntegerDigits: 2 }) + ":" +
    now.getSeconds().toLocaleString('fa-IR', { minimumIntegerDigits: 2 });

  //PERSIAN DATE
  var perDate = new persianDate();
  var persianDay = perDate.toLocale("fa").format("dddd");
  var persianDayInMonth = perDate.toLocale("fa").format("DD");
  var persianMonth = perDate.toLocale("fa").format("MMMM");
  var persianYear = perDate.toLocale("fa").format("YYYY");
  var persianDateToShow = persianDay + " " + persianDayInMonth + " " + persianMonth + " " + persianYear;

  var show = document.getElementById("time").innerHTML = time + "&nbsp;&nbsp;&nbsp;" + persianDateToShow;
  // var show = document.getElementById("time").innerHTML = time + "  —  " + persianDateToShow;

  var refresh_date = RefreshDate();
}

//////////////////////////////////////////////////
// MOBILE NAVIGATION ACTION
const btnNavEl = document.querySelector('.mobile-nav-btn');
const headerEl = document.querySelector('.header');
const bodyEl = document.querySelector("body");
var navBtnClickCounter = 0;

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav--open');
  if (navBtnClickCounter % 2 == 0) {
    bodyEl.style.backgroundImage = "linear-gradient(rgba(34, 34, 34, 0.1),rgba(34, 34, 34, 0.1))";
  }
  else bodyEl.style.backgroundImage = "none";
  navBtnClickCounter++;
});