---
alias: troubleshooting
title: 'Troubleshooting Guide'
description: 'If you are facing any issues while installing, integrating with the Arcana Auth SDK during app deployment on Arcana Testnet/Mainnet, check this out.'
arcana:
  root_rel_path: .
toc_depth: 2
---

# Troubleshooting Guide

This troubleshooting guide covers common issues faced by developers when integrating Web3 apps with the {{config.extra.arcana.sdk_name}} for user onboarding and signing blockchain transactions.

## Configuration Issues

---

<!---

### Cannot change storage region from North America to Europe

Storage Region can be configured for any application using the dashboard just once.  This setting cannot be changed later, but other application settings such as social authentication provider settings can be reconfigured at any time. To change the storage region, you must [[faq-db|delete the dApp from the dashboard and then configure it again]].

--->

??? an-trbs "Twitter login failures caused by setup issues. What values need to be specified in client ID and secret in the dashboard settings?"

      Often, during SDK usage configurations, developers fail to specify the correct values from the Twitter Developer console into the {{config.extra.arcana.dashboard_name}} resulting in Twitter login failures. Remember to copy the **Redirect URI** values from the {{config.extra.arcana.dashboard_name}} in the Twitter Developer console.

      Also, ensure that you have specified the correct Twitter API Key and the API Key Secret values in the {{config.extra.arcana.dashboard_name}} **Configure > Social Auth > Twitter** settings. [[config-auth-twitter|Learn more...]]

??? an-trbs "Is it possible to stop the {{config.extra.arcana.wallet_name}} UI from being displayed in the app's context."

      The {{config.extra.arcana.product_name}} allows developers to manage the user experience for signing blockchain transactions by controlling when the wallet UI shows up. To manage [[concept-wallet-visibility|visibility mode]], integrate the app with the SDK, and create `AuthProvider` with the `alwaysVisible` parameter set to `false`. Use the `showWallet` function to display the wallet when required.

      ```js hl_lines="6"
      const auth = new AuthProvider(
        "xar_test_445007f942xxxxxxxxxxxxxxxxxx484cAfd2", // App client ID
        { 
          position: 'left',         // default: right
          theme: 'light',           // default: dark
          alwaysVisible: false,     // default: true, wallet always visible
      })
      ```

??? an-trbs "Registered app does not show up in the {{config.extra.arcana.dashboard_name}} 'Manage Apps' screen."

      After logging into the {{config.extra.arcana.dashboard_name}}, the developer can view all the apps that were registered earlier displayed as cards in the 'Manage Apps' screen.  There is one card per registered application.

      If you do not see your registered application card, check if you used a different social login provider or email ID to log into the {{config.extra.arcana.dashboard_name}}. {{config.extra.arcana.product_name}} supports [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/aggregatelogin.md) feature whereby if a developer uses different social login providers to log into the {{config.extra.arcana.dashboard_name}} in subsequent logins, both logins will be recognized as a single developer. This feature works if the **same** email ID is used by the developer across social login providers.

      **Note:** If you are migrating to the latest {{config.extra.arcana.sdk_name}} release from versions older than v1.0.0, you will not see your pre-registered apps in the {{config.extra.arcana.dashboard_name}} due to some breaking changes. You need to re-register your apps again.

??? an-trbs "Aggregate login does not work when GitHub is one of the providers used to login into the {{config.extra.arcana.dashboard_name}}."

      **Issue Details**

      A developer logs into the {{config.extra.arcana.dashboard_name}} for the very first time, using social authentication provider, say P1. The {{config.extra.arcana.dashboard_name}} displays the 'Manage Apps' screen with the 'Create New App' wizard and zero registered app configuration profile cards. The developer can register a new application and obtain a unique **{{config.extra.arcana.app_address}}** say Addr1. This will create a new app configuration profile card on the 'Manage Apps' screen for the newly registered app. Now if the developer logs out and logs back in using a different social authentication provider, say P2, {{config.extra.arcana.product_name}} can recognize that the login is by the same developer. This results in the 'Manage Apps' screen displaying the previously registered application configuration profile card. This behavior is supported only if the developer has the same email ID associated with both the social login providers P1 and P2.

      If the user has a different email ID associated P1 and P2 then during the second login with a different provider, the same developer cannot be recognized and associated with the apps registered earlier using the different social login provider. The {{config.extra.arcana.dashboard_name}} considers login with a new provider (different email ID) as a new identity and assumes this is a fresh login by a new developer. It brings up the 'Manage Apps' screen where the same user will not be able to see the application configuration card that was present earlier while logging in with a different social login provider.

      If one of the providers is GitHub, then even if the same email ID is associated with all providers, {{config.extra.arcana.product_name}} may fail to associate the GitHub identity of the same developer with other providers.  

      Is there a way to get this working?

      **Solution**

      The [aggregate login]({{page.meta.arcana.root_rel_path}}/concepts/aggregatelogin.md) feature of {{config.extra.arcana.product_name}} allows an application developer to login into the {{config.extra.arcana.dashboard_name}} using any supported authentication providers to register and configure the application.

      With GitHub, the behavior is different, only if the GitHub user settings are not in place.  To ensure the same behavior as other social authentication providers, in the case of GitHub, make sure that you specify the following details in GitHub Settings:

        1. In your GitHub profile setting, allow your email to be visible
        2. In the GitHub Email Settings preferences, make sure you do not select the checkbox which says 'Keep my email address private'.

      Refer to the figure below for details:

      <figure markdown="span">
        <img class="an-screenshots-noeffects width_50pc" alt="GitHub Profile: Email Visible" src="{{config.extra.arcana.img_dir}}/an_trbs_gh_issue_visible_email.{{config.extra.arcana.img_png}}"/>
        <figcaption>GitHub Profile: Email Visible</figcaption>
      </figure>

      <figure markdown="span">
        <img class="an-screenshots-noeffects width_50pc"  alt="GitHub Email Settings: Not Private" src="{{config.extra.arcana.img_dir}}/an_trbs_gh_issue_email_not_private.{{config.extra.arcana.img_png}}" width="50%"/>
        <figcaption>GitHub Email Settings: Not Private</figcaption>
      </figure>

??? an-trbs "Why do users experience a 'Redirect URI Mismatch' error during authentication?"

      This error shows up if the developer has not properly set up the social login provider during app registration and configuration using the {{config.extra.arcana.dashboard_name}}.

      * Go to the {{config.extra.arcana.dashboard_name}} and check the app settings in the *Social Auth* section. Note that the Redirect URI displayed for the app is exactly the same as the one you have specified in the social login provider OAuth settings.  For example, in the case of social login provider 'Google', use Google Developer Console and check OAuth settings. Check the spelling of the Redirect URI specified against the entry for your app.

      * If you are deploying the app on the Mainnet, then make sure the Redirect URI displayed in the Mainnet configuration profile of the app in the {{config.extra.arcana.dashboard_name}} is used in the social login provider settings.

<!--
---

## Application Tooling Issues

---

### Failed to integrate with the {{config.extra.arcana.sdk_name}} due to polyfill issues

Polyfill errors are often encountered by a vast majority of Web3 libraries and applications using node.js libraries. These are often reported in [stackoverflow](https://stackoverflow.com/a/65556946) and the context of [Vite](https://github.com/vitejs/vite/discussions/3126).

The polyfilling issues result in developers not being able to import the {{config.extra.arcana.sdk_name}} at all in their applications. Bundlers complain or otherwise, you may see runtime errors as shown in the [example](https://github.com/facebook/create-react-app/issues/11756) below.

```
If you want to include a polyfill, you need to:
	- add a fallback 'resolve.fallback: { "os": require.resolve("os-browserify/browser") }'
	- install 'os-browserify'
If you don't want to include a polyfill, you can use an empty module like this:
	resolve.fallback: { "os": false }
 @ ./src/config.ts 5:0-28 8:0-13
 @ ./src/index.tsx 17:0-66 27:19-27 29:23-43 30:23-43 34:35-60
 ```

 While integrating with the {{config.extra.arcana.sdk_name}}, if your application encounters similar polyfill errors while using bundlers such as Vue-CLI, or CRA, follow these steps to fix them.  Other bundlers or toolchains may require their solutions. Some toolchains may do this by default and require no further modification. You can also refer to [sample code](https://github.com/arcana-network/test-vite-app/blob/master/vite.config.js) for details.

#### Vue-CLI

With Vue-CLI it’s relatively easy to address polyfill issues. Simply add “node-polyfill-webpack-plugin” and that’s all you need.

```javascript
const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  }
})
```

#### CRA

CRA by default doesn’t allow customizing Webpack configuration. The recommended way to address polyfill issues is to use “react-app-rewired”  with a configuration like this.

!!! an-note

      You need to exclude “console” otherwise it’ll fail.

```javascript
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  webpack: (config, env) => {
    config.plugins.push(new NodePolyfillPlugin({
      excludeAliases: ['console']
    }))
    return config
  }
}
```

#### Vite

Besides installing all the required poly-fills, Vite can enable poly-fills per dependency as shown below:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // This Rollup aliases are extracted from @esbuild-plugins/node-modules-polyfill,
      // see https://github.com/remorses/esbuild-plugins/blob/master/node-modules-polyfill/src/polyfills.ts
      // process and buffer are excluded because already managed
      // by node-globals-polyfill
      util: 'rollup-plugin-polyfill-node/polyfills/util',
      sys: 'util',
      events: 'rollup-plugin-polyfill-node/polyfills/events',
      stream: 'rollup-plugin-polyfill-node/polyfills/stream',
      path: 'rollup-plugin-polyfill-node/polyfills/path',
      querystring: 'rollup-plugin-polyfill-node/polyfills/qs',
      punycode: 'rollup-plugin-polyfill-node/polyfills/punycode',
      url: 'rollup-plugin-polyfill-node/polyfills/url',
      http: 'rollup-plugin-polyfill-node/polyfills/http',
      https: 'rollup-plugin-polyfill-node/polyfills/http',
      os: 'rollup-plugin-polyfill-node/polyfills/os',
      assert: 'rollup-plugin-polyfill-node/polyfills/assert',
      constants: 'rollup-plugin-polyfill-node/polyfills/constants',
      _stream_duplex:
        'rollup-plugin-polyfill-node/polyfills/readable-stream/duplex',
      _stream_passthrough:
        'rollup-plugin-polyfill-node/polyfills/readable-stream/passthrough',
      _stream_readable:
        'rollup-plugin-polyfill-node/polyfills/readable-stream/readable',
      _stream_writable:
        'rollup-plugin-polyfill-node/polyfills/readable-stream/writable',
      _stream_transform:
        'rollup-plugin-polyfill-node/polyfills/readable-stream/transform',
      timers: 'rollup-plugin-polyfill-node/polyfills/timers',
      console: 'rollup-plugin-polyfill-node/polyfills/console',
      vm: 'rollup-plugin-polyfill-node/polyfills/vm',
      zlib: 'rollup-plugin-polyfill-node/polyfills/zlib',
      tty: 'rollup-plugin-polyfill-node/polyfills/tty',
      domain: 'rollup-plugin-polyfill-node/polyfills/domain'
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true
        }),
        NodeModulesPolyfillPlugin()
      ]
    }
  },
  build: {
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill()
      ]
    }
  }
})
```

!!! an-caution

    The vite configuration example above demonstrates a generic configuration that covers all libraries. You need to specify only the ones that are referred to by your application.

Make sure you update the dependency for polyfills in `package.json` file as well. Here is an example of a `package.json` file:

```json
{
  "name": "test-vite-app",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@arcana/storage": "https://testnet-dev.s3.dualstack.ap-south-1.amazonaws.com/storage-1654680842-1e5926ffe590fad67d03aa149673f94e43f0773b9130374f306d37ea.tar",
    "vue": "^3.2.25"
  },
  "devDependencies": {
    "@esbuild-plugins/node-globals-polyfill": "^0.1.1",
    "@esbuild-plugins/node-modules-polyfill": "^0.1.4",
    "@vitejs/plugin-vue": "^2.3.3",
    "crypto-browserify": "^3.12.0",
    "rollup-plugin-polyfill-node": "^0.9.0",
    "string_decoder": "^1.3.0",
    "vite": "^2.9.9"
  }
}
```

For a complete sample app that addresses polyfill issues - refer to [sources in GitHub](https://github.com/arcana-network/test-vite-app/).

---

-->

## Auth Issues

---

??? an-trbs "Configured social login providers do not show up in the {{config.extra.arcana.wallet_name}} UI with v1.0.0."

      If you are using an older version of the {{config.extra.arcana.sdk_name}} before v1.0.0, simply upgrading the package to v1.0.0 or beyond is not sufficient. Your older app configuration settings will no longer work. If you allow users to log in, their auth plug-and-play pop-up UI will not show any of the configured social login providers. 

      Please follow the instructions in the [[migration-guide-v1.0.1|Migration to v1.0.0 Guide]] before integrating with the {{config.extra.arcana.sdk_name}} v1.0.0. We highly recommend that you use the latest {{config.extra.arcana.sdk_name}}.

      If your app users continue to see the same issue of social login providers not showing after migrating properly, please double-check the **{{config.extra.arcana.app_address}}** that is specified at the time of instantiating the `AuthProvider`.  If you are using v1.0.0, and do not explicitly specify any `network` value while instantiating the `AuthProvider`, then by default 'Mainnet' is selected. In this case, make sure you provide the **{{config.extra.arcana.app_address}}** assigned to your app's 'Mainnet' configuration profile. If you specify a different **{{config.extra.arcana.app_address}}** during app integration with the SDK then you will only see the social login providers in the login UI that are associated with the specified {{config.extra.arcana.app_address}}.

      If you choose to specify the optional `network` parameter as 'testnet' while instantiating the `AuthProvider`, then make sure you specify the **{{config.extra.arcana.app_address}}** corresponding to the 'Testnet' configuration profile of the app as displayed in the {{config.extra.arcana.dashboard_name}}.

??? an-trbs "User used Hotmail address for passwordless login. No email with OTP was received."

    The {{config.extra.arcana.sdk_name}} does not support passwordless user login via Hotmail. Use other social login providers or Google email for passwordless authentication. 
    
    Also, user login via Microsoft accounts is not supported in the current release.

??? an-trbs "Error: Wallet is not initialized."

      **Issue**

       <figure markdown="span">
         <img class="an-screenshots-noeffects width_35pc" alt="Wallet Not Initialized Error in a Web3 app." src="{{config.extra.arcana.img_dir}}/trbs_wallet_not_init.{{config.extra.arcana.img_png}}" width="35%"/>
         <figcaption>Wallet Not Initialized</figcaption>
      </figure>

      **Solution**

      This error is caused due to incorrect integration of the {{config.extra.arcana.sdk_name}}.  While integrating with the {{config.extra.arcana.sdk_name}}, you need to perform the following key steps in the suggested order:

      1. First, [[sdk-installation|install the {{config.extra.arcana.sdk_name}}]]

      2. Next, create an `AuthProvider` instance. 

      3. Lastly, initialize the `AuthProvider` by calling the `init()` function. This is important as it initializes the embedded {{config.extra.arcana.wallet_name}}. Only after a successful login, the {{config.extra.arcana.wallet_name}} is visible in the context of an application. 

??? an-trbs "User could log in to the Web3 app but subsequent login fails after a developer enables the 'global keys' feature in the app."

      By default, {{config.extra.arcana.sdk_name}} is configured to allow app-specific keys for the Web3 apps that integrate with the SDK. Developers can begin deploying their apps on the {{config.extra.arcana.company_name}} Testnet and then deploy them on the {{config.extra.arcana.company_name}} Mainnet.  To use the global keys feature in their apps, the developers are required to fill up an online form, submit it and wait for approval from the {{config.extra.arcana.company_name}} team before global keys are enabled for an app. The status of the feature request is displayed in the {{config.extra.arcana.dashboard_name}}. While the feature is in 'review' status, the app can be deployed on the {{config.extra.arcana.company_name}} Testnet and users are allowed to log in and use the app. 

      While an app is switching over from the default 'app-specific' keys configuration to the 'global keys' configuration, the developer may choose to allow app users to log in before the global features option is approved. Users that log in before the global keys are approved will be assigned 'app-specific' keys. There is some part of key metadata that is stored locally in the authenticated user's device. In this case, once the feature gets **approved**, the user keys are re-assigned. The keys change from 'app-specific' to 'global keys' and this results in new key metadata. There is a mismatch between the keys or {{config.extra.arcana.wallet_name}} addresses already in use by the users and the new global keys that are now reconfigured for the app users.  As a result, users will not be able to log in to the app anymore.

      To fix this issue, the user needs to clear the local storage used by the {{config.extra.arcana.wallet_name}} on their device by clearing the browser cache and then attempting another login from a fresh browser window.

      
