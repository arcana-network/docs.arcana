import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import { /*reloadClick,*/ getTheme, setObserver, fetchAndStoreFiles, renderSandpack } from './common.js';

const gaslesssandpack = createRoot(document.getElementById("gaslesssandpack"));

const targetNode = document.body;
setObserver(targetNode);

const exRes = [
    "https://cdnjs.cloudflare.com/ajax/libs/ethers/5.7.2/ethers.umd.min.js",
    "https://unpkg.com/@arcana/scw@0.0.30/dist/standalone/scw.umd.js",
];

const gaslessFileUrls = [
    'https://raw.githubusercontent.com/arcana-network/sandpack-examples/main/gl/index.html',
    'https://raw.githubusercontent.com/arcana-network/sandpack-examples/main/gl/index.js',
    'https://raw.githubusercontent.com/arcana-network/sandpack-examples/main/gl/styles.css',
    'https://raw.githubusercontent.com/arcana-network/sandpack-examples/main/gl/myerc20.js',
];

console.log("Using theme", getTheme());
const glFiles = {};
fetchAndStoreFiles(gaslessFileUrls, glFiles).then(() => {
        console.log('Gasless Sandpack files:', glFiles);
        renderSandpack('vanilla', getTheme(), glFiles, exRes, gaslesssandpack);
        //reloadClick();
}).catch(error => {
        console.error('Error loading gasless sample files:', error);
});  

