"use strict";

const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const h1 = document.querySelector(".h1");
const listContainer = document.querySelector(".list-container");

const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const taskIcon = document.querySelector(".task-icon");
const section = document.querySelector(".section");

btn.addEventListener("click", function () {
  if (input.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function saveTheme() {
  let currentTheme;
  if (document.body.classList.contains("dark-mode")) {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }
  localStorage.setItem("theme", currentTheme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    moonIcon.classList.add("chosen-one");
    sunIcon.classList.remove("chosen-one-orange");
    document.body.classList.add("dark-mode");
    section.classList.add("dark-box-shadow");
    btn.classList.add("dark-btn");
    h1.classList.add("dark-h1");
    taskIcon.classList.add("dark-icon");
  } else {
    sunIcon.classList.add("chosen-one-orange");
    moonIcon.classList.remove("chosen-one");
    document.body.classList.remove("dark-mode");
    section.classList.remove("dark-box-shadow");
    btn.classList.remove("dark-btn");
    h1.classList.remove("dark-h1");
    taskIcon.classList.remove("dark-icon");
  }
}

loadTheme();

sunIcon.addEventListener("click", function () {
  sunIcon.classList.add("chosen-one-orange");
  moonIcon.classList.remove("chosen-one");
  document.body.classList.remove("dark-mode");
  section.classList.remove("dark-box-shadow");
  btn.classList.remove("dark-btn");
  h1.classList.remove("dark-h1");
  taskIcon.classList.remove("dark-icon");
  saveTheme();
});

moonIcon.addEventListener("click", function () {
  moonIcon.classList.add("chosen-one");
  sunIcon.classList.remove("chosen-one-orange");
  document.body.classList.add("dark-mode");
  section.classList.add("dark-box-shadow");
  btn.classList.add("dark-btn");
  h1.classList.add("dark-h1");
  taskIcon.classList.add("dark-icon");
  saveTheme();
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    btn.click();
  }
});
