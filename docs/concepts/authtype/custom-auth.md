---
alias: concept-custom-auth
title: 'Custom Auth'
description: 'Custom verifier-based user authentication.'
arcana:
  root_rel_path: ../..
  app_type: "'Custom Auth'"
  app_example_submodule: "`sample-auth-custom-auth`"
  pnp_login_ui_tag: "use-plug-play-auth"
  custom_login_ui_tag: "index-custom-ui-onboard-users"
  firebase_custom_ui_tag: "build-iam-firebase-auth"
---

# Custom Auth

The custom Auth feature enables Web3 apps to use the {{config.extra.arcana.sdk_name}} for secure key assignment. Authenticate users with a Custom Auth service, issue JWT tokens, and send them to the SDK. The SDK verifies users, retrieves key shares, and generates the private key for blockchain transactions on the client side.

{% include "./text-snippets/warn_custom_auth_appkeys_only.md" %}

## Authentication Flow

1. Log in to the {{config.extra.arcana.dashboard_name}} and register the app to get a unique  {{config.extra.arcana.app_address}}. Then [configure Custom Auth settings](#custom-auth-settings) in the dashboard.

    ```mermaid
    graph TD
        DFLA{{Developer}} --Login --> setup
    
        subgraph setup[{{config.extra.arcana.dashboard_name}}]
        direction LR  
            SP1[1.Register App] --> CLID((Unique ClientID))
            SP2[2.Configure App] --> SP3[Edit/Save Custom Auth Settings]
        end
        classDef an-highlight stroke:#3169b3,stroke-width:0.25rem; 
        class CLID an-highlight

    ```

2. Add code in the app for using a Custom Auth service and obtains a JWT after user authentication.

    ```mermaid
    graph LR
        IAP{{Developer}}
        MMM(Custom Authentication Service)
        subgraph app[App]
        direction LR
        CL[Custom Login]
        end
        IAP --> CL -->  MMM --->|JWT Token| CL

        linkStyle 2 stroke: #3169b3;
    ```

3. Next, install {{config.extra.arcana.sdk_name}}, integrate app with the SDK, initialize `AuthProvider` and then use the JWT obtained after the Custom Auth processing to call the `loginWithCustomProvider()` method.

    ```mermaid
    graph TD
        DFLA{{Developer}} --install --> authsdk
        DFLA --ClientID -->AUTHP
        DFLA --JWT Token -->COA
        subgraph app[App]
            AUTHP[Create/Init AuthProvider] --> authsdk
            COA[Call loginWithCustomOAuth] --> authsdk
            subgraph authsdk[{{config.extra.arcana.sdk_name}}]
            direction TB 
                SDK1[AuthProvider Interface] 
            end
        end
        linkStyle 1,2 stroke: #3169b3;
        authsdk --Verify JWT Claims --> STD[Standard JWT/JWK Validation]
        authsdk --Fetch Key Shares --> BEP[{{config.extra.arcana.company_name}} Auth Protocol] <--> BEK[DKG]
    ```

4. The {{config.extra.arcana.sdk_name}} checks the JWT using dashboard settings. After verification, it gets the user's key shares from the {{config.extra.arcana.company_name}} backend and generates the key locally in the app. This key lets users securely sign blockchain transactions.

    ```mermaid
    graph LR
        BED[{{config.extra.arcana.company_name}} Auth Protocol] --Custom Auth Settings--> BEC{Gateway} 
        BEC <--> BEA[{{config.extra.arcana.company_name}} Auth Protocol] <--> BEDKG[DKG]
    ```

## Custom Auth Settings

The following Custom Auth settings can be specified via the {{config.extra.arcana.dashboard_name}}. 

### JWKS Endpoint

A JWKS Endpoint is a read-only URL exposed by the Custom Auth server or any other server that manages the cryptographic keys or JSON Web Keys (JWK) as per the [IETF RFC7517](https://datatracker.ietf.org/doc/html/rfc7517) and [IETF RFC7519](https://datatracker.ietf.org/doc/html/rfc7519) standards. JWKs are used to validate the integrity of a JWT and the encoded data by the {{config.extra.arcana.sdk_name}}.

### User Identifier String

The 'User Identifier String' links a unique identifier with the user's key. Developers can choose the string from one of the options:

* Sub: The user identifier string identifies the principal that is the subject of the JWT.
* Email: JWT Token claim email identifier for the user
* Custom: A custom string used for JWT Token claim.

### Issuer

The issuer claim identifies the principal that issued the JWT.  For example, it could be the app identifier or deployed app URL. 

*Example:* `Issuer: "https://myapp.example.com"`

### Audience

The audience claim identifies the recipients that the JWT is intended for.

*Example:* `Audience: "arcana-login-nnnnnn"`

### JWK Validation (Optional)

Claims are pieces of information asserted about a subject or user. A JWT can contain a claim called name that asserts that the name of the user authenticating is "John Doe." JWT Validation entities specified by the developer via the  {{config.extra.arcana.dashboard_name}} are key, value pairs. These are used to validate the JWT provided by the developer to the {{config.extra.arcana.sdk_name}} via the `loginWithCustomProvider()` method for authenticated users.

*Examples*

`purpose: 'login'`

`keyUse: 'arcana'`