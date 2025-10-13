const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Website Modifying Date: ${lastModified}`;


function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "none"

}


