"use strict";

document.documentElement.classList.add("js");

// Essential content and navigation remain available without JavaScript.
const navToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const mobileNavigation = window.matchMedia("(max-width: 759px)");

function syncNavigation() {
  navToggle.hidden = !mobileNavigation.matches;
  navToggle.setAttribute("aria-expanded", "false");
  navLinks.hidden = mobileNavigation.matches;
}

navToggle.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  navLinks.hidden = expanded;
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a") && mobileNavigation.matches) {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileNavigation.matches && !navLinks.hidden) {
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.hidden = true;
    navToggle.focus();
  }
});

mobileNavigation.addEventListener("change", syncNavigation);
syncNavigation();

const filterGroup = document.querySelector(".project-filters");
const filterButtons = Array.from(filterGroup.querySelectorAll("button"));
const projects = Array.from(document.querySelectorAll(".project-card"));
const projectStatus = document.getElementById("project-status");
const categoryNames = { all: "all work", mobile: "mobile applications", integration: "enterprise integration" };

filterButtons.forEach((button) => {
  const category = button.dataset.filter;
  const count = projects.filter((project) => category === "all" || project.dataset.category === category).length;
  button.querySelector("span").textContent = String(count);

  button.addEventListener("click", () => {
    let visibleCount = 0;
    projects.forEach((project) => {
      project.hidden = category !== "all" && project.dataset.category !== category;
      if (!project.hidden) visibleCount += 1;
    });
    filterButtons.forEach((filter) => filter.setAttribute("aria-pressed", String(filter === button)));
    projectStatus.textContent = `${visibleCount} projects · ${categoryNames[category]}`;
  });
});
filterGroup.hidden = false;

document.getElementById("year").textContent = String(new Date().getFullYear());
