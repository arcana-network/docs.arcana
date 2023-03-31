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
const appType1 = document.getElementById("appType1");
const appType2 = document.getElementById("appType2");
const appType3 = document.getElementById("appType3");
const appType4 = document.getElementById("appType4");
const appType5 = document.getElementById("appType5");
const sidebarText = document.getElementById("sec-sidebar-text");

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
        fetchPageContent('./howto/integrate_auth/integrate_wallet.html',"appType1");
		appType1.style.display = "block";
		appType2.style.display = "none";
        appType3.style.display = "none";
        appType4.style.display = "none";
        appType5.style.display = "none";
        sidebarText.style.display = "block";
	} else if (selection.value === "option2") {
        fetchPageContent('./howto/integrate_auth/integrate_wallet_react.html',"appType2");
		appType1.style.display = "none";
		appType2.style.display = "block";
		appType3.style.display = "none";
        appType4.style.display = "none";
        appType5.style.display = "none";
        sidebarText.style.display = "block";
	} else if (selection.value === "option3") {
        fetchPageContent('./howto/integrate_auth/integrate_wagmi.html',"appType3");
        appType1.style.display = "none";
        appType2.style.display = "none";
        appType3.style.display = "block";
        appType4.style.display = "none";
        appType5.style.display = "none";
        sidebarText.style.display = "block";
    } else if (selection.value === "option4") {
        fetchPageContent('./howto/integrate_auth/integrate_rainbow.html',"appType4");
        appType1.style.display = "none";
        appType2.style.display = "none";
        appType3.style.display = "none";
        appType4.style.display = "block";
        appType5.style.display = "none";
        sidebarText.style.display = "block";
    } else if (selection.value === "option5") {
        fetchPageContent('./howto/integrate_auth/integrate_wallet_vue.html',"appType5");
        appType1.style.display = "none";
        appType2.style.display = "none";
        appType3.style.display = "none";
        appType4.style.display = "none";
        appType5.style.display = "block";
        sidebarText.style.display = "block";
    }
      else {
        appType1.style.display = "none";
		appType2.style.display = "none";
		appType3.style.display = "none";
        appType4.style.display = "none";
        appType5.style.display = "none";
        sidebarText.style.display = "none";
	}
});

window.onload = function() {
    fetchPageContent("./howto/integrate_auth/integrate_wallet.html","appType1");
}


