import React from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import { Sandpack } from "https://esm.sh/@codesandbox/sandpack-react@2.8.0";

/*
function reloadClick(){
    document.getElementById('CTA').onclick = function(){
        console.log('Reloading Sandpack...');
        location.reload();
    }
}
*/

function getTheme() {
    let themeType;

    const startCurrentTheme = document.body.getAttribute("data-md-color-scheme");

    if (startCurrentTheme === "slate") {
        themeType = "dark";
    } else if (startCurrentTheme === "default") {
        themeType = "light";
    }
    console.log("Sandpack theme:", themeType)
    return { themeType };
}

function setObserver(observeNode) {

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === "attributes" && mutation.attributeName === "data-md-color-scheme") {
                console.log(`The ${mutation.attributeName} attribute was modified.`);
                console.log("Mutation:", mutation);
                
                const currentTheme = document.body.getAttribute("data-md-color-scheme");
                console.log("Current theme:", currentTheme);
                
                // Determine theme type based on current theme
                if (currentTheme === "slate") {
                    themeType = "dark";
                } else if (currentTheme === "default") {
                    themeType = "light";
                }
                console.log("Theme type:", themeType);
            }
        }
    };  

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(observeNode, config);
}

function fetchAndStoreFiles(fileUrls, targetObject) {
    const filePromises = fileUrls.map(url => {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}`);
                }
                return response.text();
            })
            .then(data => {
                const fileName = url.substring(url.lastIndexOf('/') + 1);
                targetObject[`/${fileName}`] = data;
            });
    });

    return Promise.all(filePromises);
}

function renderSandpack(template, theme, files, externalPkg, sandpackInstance) {
    const sandpackComponent = React.createElement(
        Sandpack,
        {
            template,
            customSetup: {
                dependencies: { 
                    "dotenv": "^16.3.1",
                    "parcel": "^2.9.3"
                }
            },
            theme,
            options: {
                showNavigator: true,
                showTabs: true,
                showConsole: true,
                showConsoleButton: true,
                externalResources: externalPkg,
                editorHeight: '95vh',
                autoRun: true,
                autoReload: true,
                initMode: "immediate", //"user-visible",
                resizablePanels: true,
            },
            files,
        },
        null
    );
    sandpackInstance.render(sandpackComponent);
}

export { /*reloadClick,*/ getTheme, setObserver, fetchAndStoreFiles, renderSandpack };