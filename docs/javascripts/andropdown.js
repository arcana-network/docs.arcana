const selection = document.getElementById("selection");
const appTypes = [
  document.getElementById("appType1"),
  document.getElementById("appType2"),
  document.getElementById("appType3"),
  document.getElementById("appType4"),
  document.getElementById("appType5")
];
const sidebarText = document.getElementById("sec-sidebar-text");

function fetchPageContent(pageUrl) {
  return fetch(pageUrl)
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const mainContent = doc.querySelector('div.md-content').innerHTML;
      const sidebarSecondary = doc.querySelector('div.md-sidebar--secondary').innerHTML;
      return { mainContent, sidebarSecondary };
    })
    .catch(error => {
      console.error(error);
    });
}

const pageData = {
  option1: { url: './howto/integrate_auth/integrate_wallet.html', appType: 0 },
  option2: { url: './howto/integrate_auth/integrate_wallet_react.html', appType: 1 },
  option3: { url: './howto/integrate_auth/integrate_wagmi.html', appType: 2 },
  option4: { url: './howto/integrate_auth/integrate_rainbow.html', appType: 3 },
  option5: { url: './howto/integrate_auth/integrate_wallet_vue.html', appType: 4 }
};

selection.addEventListener("change", async function() {
  const option = selection.value;
  if (pageData.hasOwnProperty(option)) {
    const { url, appType } = pageData[option];
    const { mainContent, sidebarSecondary } = await fetchPageContent(url);
    appTypes.forEach((app, index) => {
      app.style.display = index === appType ? "block" : "none";
    });
    sidebarText.style.display = "block";
    document.getElementById(appTypes[appType].id).innerHTML = mainContent;
    sidebarText.innerHTML = sidebarSecondary;
  } else {
    appTypes.forEach(app => {
      app.style.display = "none";
    });
    sidebarText.style.display = "none";
  }
});

window.onload = function() {
  fetchPageContent("/howto/integrate_auth/integrate_wallet.html")
    .then(({ mainContent }) => {
      document.getElementById(appTypes[0].id).innerHTML = mainContent;
    });
};
