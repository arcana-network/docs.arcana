{% include "./text-snippets/config_common_steps.md" %}

## App-specific Keys

Follow these steps to configure the **Social Auth** settings and enable user onboarding via Apple. It requires developers to use the {{config.extra.arcana.dashboard_name}} and the [Apple Developer](https://developer.apple.com/) website.

### 1. Get Redirect URI  

Select the app in the **Manage Apps** dashboard screen and click Testnet/Mainnet to configure Apple Sign-in in the respective configuration profile. Go to **Configure > Social Auth**. Copy the redirect URI shown on the top right.

!!! an-tip "Redirect URL for Apple Sign-In"

      Note, unlike other providers, the redirect URL for 'Sign-in with Apple' is **not the one located on the top right** of the dashboard. It is displayed on the **bottom-right**, next to the 'key id' field.
      
      The *Redirect URL** for Apple Sign-In is of the format:

      `https://oauth.arcana.network/auth/apple/redirect/${ClientID}`

      Where `{ClientID}` refers to the unique value assigned by {{config.extra.arcana.company_name}} to each app registered using the {{config.extra.arcana.dashboard_name}}. 

<figure markdown="span">
  ![Copy Redirect URL]({{config.extra.arcana.img_dir}}/an_dApp_config_redirect_url_apple.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Arcana Dashboard: Copy Redirect URL</figcaption>
</figure>

Do not close the **Social Auth** browser tab in the {{config.extra.arcana.dashboard_name}}. Open another tab and set up Apple Sign in for your app via the [Apple Developer](https://developer.apple.com/) website. 

### 2. Get Apple ClientID, TeamID, Key, KeyID

To enable Apple Sign-In for your Web3 app you must set up the following entities:

* Apple App Identifier
* Apple Service Identifier
* Apple Private Key

Login to your developer account using the [Apple Developer](https://developer.apple.com/) website. 

<figure markdown="span">
  ![Apple Developer Website: Log In]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_website_login.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Log In</figcaption>
</figure>

Use the 'Certificates, Identifiers & Profiles' menu option. Create, configure and register the Apple app identifier, Apple service identifier. As part of configuration you will be required to verify your app domain, and associate the domain with an app identifier for app login page that uses 'Sign in with Apple'.

#### 2a. App Id

Click **Identifier**, select **AppId** type identifier and choose **App**. 

<figure markdown="span">
  ![Apple Dev: New Identifier]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_new_appid.{{config.extra.arcana.img_gif}}){ .an-screenshots }
  <figcaption>Apple Dev: New App Identifier </figcaption>
</figure>

Click continue and follow the instructions to configure the AppId identifier setting and enable 'Sign-In with Apple' option. Register the AppId identifier.

<figure markdown="span">
  ![Apple Dev: Enable Apple Sign-In]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_sign_in.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Enable Sign-In with Apple (AppId)</figcaption>
</figure>

#### 2b. Service Id

Next, click **Identifier**, select **ServiceId** type identifier.

<figure markdown="span">
  ![Apple Dev: New Identifier]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_new_srvid.{{config.extra.arcana.img_gif}}){ .an-screenshots }
  <figcaption>Apple Dev: New Service Identifier </figcaption>
</figure>

Follow the instructions and specify the service description and identifier in the Apple Developer site. Make sure you enable the 'Sign-In with Apple' option. Register the Service identifier. 

<figure markdown="span">
  ![Apple Dev: Service Id]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_srv_sign_in.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Enable Sign-In with Apple (ServiceId)</figcaption>
</figure>

In the Service Identifier settings, specify the **Redirect URI** copied from the {{config.extra.arcana.dashboard_name}} into the **Return URL** input field.

<figure markdown="span">
  ![Apple Dev: Return URL (Use Arcana Redirect URI)]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_return_url.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Return URL (Use Arcana Redirect URI)</figcaption>
</figure>

Apple may have additional instructions to verify the domain name that you specify. Make sure you complete those setup steps at the Apple Developer site and complete the service identifier setup.

#### 2c. Apple Key

The 'Sign-in with Apple' service requires a private key that signs JWTs to be used as a client secret. Go to the **Keys** section in the Apple Developer Account site. Create a **key** and follow the instructions to register the key. 

<figure markdown="span">
  ![Apple Dev: Key]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_new_key.{{config.extra.arcana.img_gif}}){ .an-screenshots }
  <figcaption>Apple Dev: New Key</figcaption>
</figure>

Make sure you configure the key and enable 'Sign In with Apple' option. 

<figure markdown="span">
  ![Apple Dev: Key]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_key_sign_in.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Enable Apple Sign-In (Key)</figcaption>
</figure>

Also, configure the key to use the correct **AppId** that was created earlier.

<figure markdown="span">
  ![Apple Dev: Key AppId]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_key_appid.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Select correct AppId for the key</figcaption>
</figure>

**Download the key**. It can only be downloaded once. 

!!! an-warning "Apple Key Security"

      Keep the downloaded Apple Key safe. 
      
      If you lose the key, you cannot download it again but the Apple Key identifier can be copied from the developer account any time. 
      
      If you suspect a private key is compromised, first create a new private key associated with the primary App ID. After transitioning to the new key, revoke the old private key. [Learn more...](https://developer.apple.com/help/account/configure-app-capabilities/create-a-sign-in-with-apple-private-key)

Make a note of the following values. These are required to configure the Apple section in the 'Social Auth' settings page of the {{config.extra.arcana.dashboard_name}}.

* Apple Service Identifier
* Apple Team Identifier
* Apple Private Key Identifier
* Apple Private Key

<figure markdown="span">
  ![Apple Dev: Service Identifier]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_srvid.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Service Identifier</figcaption>
</figure>

<figure markdown="span">
  ![Apple Dev: Key Identifier, Team Identifier]({{config.extra.arcana.img_dir}}/an_dApp_apple_dev_keyid.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Apple Dev: Key Identifier, Team Identifier</figcaption>
</figure>

### 3. Update Social Auth

In the {{config.extra.arcana.dashboard_name}}, click **Configure > Social Auth**. Refer to the empty fields next to the "Apple" setting. Paste the **Service ID** obtained via the Apple Developer Account settings. Copy the **Team Identifier**, **Key Identifier** and the downloaded key value in the respective input fields.

<figure markdown="span">
  ![Update Apple Sign-In Settings]({{config.extra.arcana.img_dir}}/an_dApp_apple_config.{{config.extra.arcana.img_png}}){ .an-screenshots }
  <figcaption>Update Apple Sign-In Settings</figcaption>
</figure>

Save the **Social Auth** settings.

*Your app is all set to onboard users via Apple Sign-In.*
