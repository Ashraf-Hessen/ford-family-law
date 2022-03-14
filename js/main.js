let prevProcess = document.getElementById("prev-process-btn"),
    nextProcess = document.getElementById("next-process-btn"),
    processesList = document.getElementById("processes");


// Events
prevProcess.onclick = scrollToPrevProcess;
nextProcess.onclick = scrollToNextProcess;

// Processes Scrolling Function
function scrollToPrevProcess() {
    processesList.scrollBy(-2 * processesList.lastElementChild.offsetWidth, 0);
    checkScroll(prevProcess, nextProcess)
}

function scrollToNextProcess() {
    processesList.scrollBy(2 * processesList.lastElementChild.offsetWidth, 0);
    checkScroll(prevProcess, nextProcess)
}

function checkScroll(...list) {
    list.forEach(btn => btn.classList.add("active"));
    setTimeout(_ => {

        if (processesList.scrollLeft ==  0)
        list[0].classList.remove("active");

        if (processesList.scrollLeft >= processesList.scrollWidth - processesList.clientWidth)
        list[1].classList.remove("active");
    }, 500);
}