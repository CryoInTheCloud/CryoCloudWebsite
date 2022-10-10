"use strict";

/* ======= Header animation ======= */
const header = document.getElementById('header');

window.onload = function () {
  headerAnimation();
};

window.onresize = function () {
  headerAnimation();
};

window.onscroll = function () {
  headerAnimation();
};

function headerAnimation() {
  const scrollTop = window.scrollY;

  if (scrollTop > 100) {
    header.classList.add('header-shrink');
  } else {
    header.classList.remove('header-shrink');
  }
}

/* ===== Smooth scrolling ====== */

const scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navigation');
const yOffset = 69; //page .header height

scrollLinks.forEach((scrollLink) => {
  scrollLink.addEventListener('click', (e) => {
    e.preventDefault();

    let element = document.querySelector(scrollLink.getAttribute("href"));
    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});

    //Collapse mobile menu after clicking
    if (pageNavWrapper.classList.contains('show')) {
      pageNavWrapper.classList.remove('show');
    }
  });
});

// Jump to section if requested via URL 'jump_to' parameter

function jumpToSection() {
  const section = new URLSearchParams(window.location.search).get('jump_to');

  if (section && section.length > 0) {
    window.scrollTo({
      top: document.getElementById(section).offsetTop + yOffset,
      behavior: 'smooth'
    })
  }
}

if (window.location.search.length > 1) {
  jumpToSection();
}

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */
// Get the sticky header
const spy = new Gumshoe('#navigation a', { offset: yOffset });

// variables for time units
const counterDiv = document.getElementById("countdown-box");
const endDate = new Date(counterDiv.getAttribute('data-start-date'));
let days, hours, minutes, seconds;

function createCountdownSpans(className) {
  const span = document.createElement("SPAN");
  span.className = className;
  return span
}

function updateCountdownHTML(span, value, unit) {
  span.innerHTML = '<span class="number">' + value + '</span>' +
    '<span class="unit">' + unit + '</span>';
}

function timeLeft() {
  // find the amount of "seconds" between now and target
  const currentDate = new Date().getTime();
  return (endDate - currentDate) / 1000;
}

function updateCounter(counterDiv) {
  let secondsLeft = timeLeft()
  let days = parseInt(secondsLeft / 86400);
  secondsLeft = secondsLeft % 86400;

  let hours = parseInt(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  let minutes = parseInt(secondsLeft / 60);
  let seconds = parseInt(secondsLeft % 60);

  // format countdown string + set tag value.
  updateCountdownHTML(counterDiv.getElementsByClassName('days')[0], days, 'Days');
  updateCountdownHTML(counterDiv.getElementsByClassName('hours')[0], hours, 'Hours');
  updateCountdownHTML(counterDiv.getElementsByClassName('minutes')[0], minutes, 'Mins');
  updateCountdownHTML(counterDiv.getElementsByClassName('secs')[0], seconds, 'Secs');
}

function startCountDown(counterDiv) {
  if (timeLeft() > 0) {
    counterDiv.appendChild(createCountdownSpans('days'))
    counterDiv.appendChild(createCountdownSpans('hours'))
    counterDiv.appendChild(createCountdownSpans('minutes'))
    counterDiv.appendChild(createCountdownSpans('secs'))

    // update the counter every 1 second
    setInterval(updateCounter, 1000, counterDiv);
  } else {
    document.getElementById("countdown-intro").remove();
  }
}

startCountDown(counterDiv);

/* === Select schedule tab of current day */

function today(){
  const today = new Date();
  const weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(today);
  const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(today);
  const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(today);

  return [weekday, day, month].join(' ')
}

function selectScheduleDay() {
  const tab = document.querySelector(`[data-schedule-day="${today()}"]`)
  if(tab) { tab.click() }
}

selectScheduleDay()
