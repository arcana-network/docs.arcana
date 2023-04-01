const register = document.getElementById("selection_reg");
const configure = document.getElementById("selection_config");
const integrate = document.getElementById("selection_int");
const onboard = document.getElementById("selection_onboard");
const web3wallet = document.getElementById("selection_web3ops");
const sidebarText = document.getElementById("sec-sidebar-text");

const regTypes = [
  document.getElementById("testnet"),
  document.getElementById("mainnet"),
  document.getElementById("globalkeys")
];

const authproviders = [
  document.getElementById("cognito"),
  document.getElementById("discord"),
  document.getElementById("github"),
  document.getElementById("google"),
  document.getElementById("twitch"),
  document.getElementById("twitter")
];

const appTypes = [
  document.getElementById("appType1"),
  document.getElementById("appType2"),
  document.getElementById("appType3"),
  document.getElementById("appType4"),
  document.getElementById("appType5")
];

const onboardTypes = [
  document.getElementById("plugnplay"),
  document.getElementById("customauth")
];

const walletOpTypes = [
  document.getElementById("signt"),
  document.getElementById("sendt"),
  document.getElementById("addswitchnetwork"),
  document.getElementById("showwallet"),
  document.getElementById("accbalance")
];

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

const pageData_reg = {
  option1: { url: '/db/config_dapp_with_db.html#testnet', regType: 0 },
  option2: { url: '/db/config_dapp_with_db.html#mainnet', regType: 1 },
  option3: { url: '/db/config_dapp_with_db.html#configure-mainnet-keyspace', regType: 2 },
};

const pageData_config = {
  option1: { url: '/howto/config_idm/cognito_oauth.html', authProvider: 0 },
  option2: { url: '/howto/config_social/discord_oauth.html', authProvider: 1 },
  option3: { url: '/howto/config_social/github_oauth.html', authProvider: 2 },
  option4: { url: '/howto/config_social/google_oauth.html', authProvider: 3 },
  option5: { url: '/howto/config_social/twitch_oauth.html', authProvider: 4 },
  option6: { url: '/howto/config_social/twitter_oauth.html', authProvider: 6 }
};

const pageData_int = {
  option1: { url: '/howto/integrate_auth/integrate_wallet.html', appType: 0 },
  option2: { url: '/howto/integrate_auth/integrate_wallet_react.html', appType: 1 },
  option3: { url: '/howto/integrate_auth/integrate_wagmi.html', appType: 2 },
  option4: { url: '/howto/integrate_auth/integrate_rainbow.html', appType: 3 },
  option5: { url: '/howto/integrate_auth/integrate_wallet_vue.html', appType: 4 }
};

const pageData_onboard = {
  option1: { url: '/howto/onboard_users/wallet_plugnplay.html', onboardType: 0 },
  option2: { url: '/howto/onboard_users/build_social/index.html', onboardType: 1 }
};

const pageData_web3wops = {
  option1: { url: '/howto/arcana_wallet/wallet_sign.html', walletOpType: 0 },
  option2: { url: '/howto/arcana_wallet/wallet_send.html', walletOpType: 1 },
  option3: { url: '/howto/arcana_wallet/wallet_add_switch_ntwk.html', walletOpType: 2 },
  option4: { url: '/howto/arcana_wallet/wallet_show.html', walletOpType: 3 },
  option5: { url: '/howto/arcana_wallet/wallet_balance.html', walletOpType: 4 },
};

register.addEventListener("change", async function() {
  const option = register.value;

  authproviders.forEach(auth => {
    auth.style.display = "none";
  });
  appTypes.forEach(app => {
    app.style.display = "none";
  });
  onboardTypes.forEach(onboardVal => {
    onboardVal.style.display = "none";
  });
  walletOpTypes.forEach(web3op => {
    web3op.style.display = "none";
  });

  if (pageData_reg.hasOwnProperty(option)) {
    const { url, regType } = pageData_reg[option];
    const { mainContent, sidebarSecondary } = await fetchPageContent(url);
    regTypes.forEach((reg, index) => {
      reg.style.display = index === regType ? "block" : "none";
    });
    sidebarText.style.display = "block";
    document.getElementById(regTypes[regType].id).innerHTML = mainContent;
    sidebarText.innerHTML = sidebarSecondary;
  } else {
    regTypes.forEach(reg => {
      reg.style.display = "none";
    });
    sidebarText.style.display = "none";
  }
});

configure.addEventListener("change", async function() {
  const option = configure.value;
  
  regTypes.forEach(reg => {
    reg.style.display = "none";
  });
  appTypes.forEach(app => {
    app.style.display = "none";
  });
  onboardTypes.forEach(onboardVal => {
    onboardVal.style.display = "none";
  });
  walletOpTypes.forEach(web3op => {
    web3op.style.display = "none";
  });

  if (pageData_config.hasOwnProperty(option)) {
    const { url, authProvider } = pageData_config[option];
    const { mainContent, sidebarSecondary } = await fetchPageContent(url);
    authproviders.forEach((auth, index) => {
      auth.style.display = index === authProvider ? "block" : "none";
    });
    sidebarText.style.display = "block";
    document.getElementById(authproviders[authProvider].id).innerHTML = mainContent;
    sidebarText.innerHTML = sidebarSecondary;
  } else {
    authproviders.forEach(auth => {
      auth.style.display = "none";
    });
    sidebarText.style.display = "none";
  }
});

integrate.addEventListener("change", async function() {
  const option = integrate.value;
  regTypes.forEach(reg => {
    reg.style.display = "none";
  });
  authproviders.forEach(auth => {
    auth.style.display = "none";
  });
  onboardTypes.forEach(onboardVal => {
    onboardVal.style.display = "none";
  });  
  walletOpTypes.forEach(web3op => {
    web3op.style.display = "none";
  });
  if (pageData_int.hasOwnProperty(option)) {
    const { url, appType } = pageData_int[option];
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

onboard.addEventListener("change", async function() {
  const option = onboard.value;
  regTypes.forEach(reg => {
    reg.style.display = "none";
  });
  appTypes.forEach(app => {
    app.style.display = "none";
  });
  authproviders.forEach(auth => {
    auth.style.display = "none";
  });
  walletOpTypes.forEach(web3op => {
    web3op.style.display = "none";
  });
  if (pageData_onboard.hasOwnProperty(option)) {
    const { url, onboardType } = pageData_onboard[option];
    const { mainContent, sidebarSecondary } = await fetchPageContent(url);
    onboardTypes.forEach((onboardVal, index) => {
      onboardVal.style.display = index === onboardType ? "block" : "none";
    });
    sidebarText.style.display = "block";
    document.getElementById(onboardTypes[onboardType].id).innerHTML = mainContent;
    sidebarText.innerHTML = sidebarSecondary;
  } else {
    onboardTypes.forEach(onboardVal => {
      onboardVal.style.display = "none";
    });
    sidebarText.style.display = "none";
  }
});

web3wallet.addEventListener("change", async function() {
  const option = web3wallet.value;

  authproviders.forEach(auth => {
    auth.style.display = "none";
  });
  appTypes.forEach(app => {
    app.style.display = "none";
  });
  onboardTypes.forEach(onboardVal => {
    onboardVal.style.display = "none";
  });
  walletOpTypes.forEach(web3op => {
    web3op.style.display = "none";
  });

  if (pageData_web3wops.hasOwnProperty(option)) {
    const { url, walletOpType } = pageData_web3wops[option];
    const { mainContent, sidebarSecondary } = await fetchPageContent(url);
    walletOpTypes.forEach((wop, index) => {
      wop.style.display = index === walletOpType ? "block" : "none";
    });
    sidebarText.style.display = "block";
    document.getElementById(walletOpTypes[walletOpType].id).innerHTML = mainContent;
    sidebarText.innerHTML = sidebarSecondary;
  } else {
    walletOpTypes.forEach(wop => {
      wop.style.display = "none";
    });
    sidebarText.style.display = "none";
  }
});

window.onload = function() {
  fetchPageContent("/walletsdk/wallet_qs.html")
    .then(({ mainContent,sidebarSecondary  }) => {
      document.getElementById(authproviders[0].id).innerHTML = mainContent;
    });
};
