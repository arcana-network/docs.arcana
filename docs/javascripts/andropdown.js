/*
function myfun() {
    var x = document.getElementById('state').selectedIndex;
    var text = document.getElementsByTagName("option")[x].text;//its a text
    var newtext = "<a class=\"md-button\" href=\"https://arcana.network\">"+text+"</a>";
    document.getElementById("pr").innerHTML = newtext;
  }
  myfun();
  */

const selection = document.getElementById("selection");
const textA = document.getElementById("textA");
const textB = document.getElementById("textB");
const textC = document.getElementById("textC");
const textD = document.getElementById("textD");
const sidebarText = document.getElementById("sec-sidebar-text");

const pageUrl = './troubleshooting.html';

function fetchPageContent(pageUrl,appType) {
    fetch(pageUrl)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const mainContent = doc.querySelector('div.md-content').innerHTML;
            const sidebarSecondary = doc.querySelector('div.md-sidebar--secondary').innerHTML;
            document.getElementById(appType).innerHTML = mainContent;
            document.getElementById('sec-sidebar-text').innerHTML = sidebarSecondary;
        })
        .catch(error => {
            console.error(error);
        });
}

selection.addEventListener("change", function() {
	if (selection.value === "option1") {
        fetchPageContent('./howto/integrate_auth/integrate_wallet.html',"textA");
		textA.style.display = "block";
		textB.style.display = "none";
        textC.style.display = "none";
        textD.style.display = "none";
        sidebarText.style.display = "block";
	} else if (selection.value === "option2") {
        fetchPageContent('./howto/integrate_auth/integrate_wallet_react.html',"textB");
		textA.style.display = "none";
		textB.style.display = "block";
		textC.style.display = "none";
        textD.style.display = "none";
        sidebarText.style.display = "block";
	} else if (selection.value === "option3") {
        fetchPageContent('./howto/integrate_auth/integrate_wagmi.html',"textC");
        textA.style.display = "none";
        textB.style.display = "none";
        textC.style.display = "block";
        textD.style.display = "none";
        sidebarText.style.display = "block";
    } else if (selection.value === "option4") {
        fetchPageContent('./howto/integrate_auth/integrate_wallet_vue.html',"textD");
        textA.style.display = "none";
        textB.style.display = "none";
        textC.style.display = "none";
        textD.style.display = "block";
        sidebarText.style.display = "block";
    } 
      else {
        textA.style.display = "none";
		textB.style.display = "none";
		textC.style.display = "none";
        textD.style.display = "none";
        sidebarText.style.display = "block";
	}
});

window.onload = function() {
    fetchPageContent("./howto/integrate_auth/integrate_wallet.html","textA");
}


