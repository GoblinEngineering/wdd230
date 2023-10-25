

if (localStorage.getItem("page_visit_count") === null) {
    localStorage.setItem("page_visit_count", "1")
}
localStorage.setItem("page_visit_count", (parseInt(localStorage.getItem("page_visit_count")) + 1))
document.querySelector("#NumberVisits").innerHTML = `Page Visits : ${localStorage.getItem("page_visit_count") }`

