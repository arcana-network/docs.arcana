---
alias: concept-custom-oauth
title: 'Custom OAuth'
description: 'Custom verifier-based user authentication.'
arcana:
  root_rel_path: ../..
---

# Custom OAuth

The Custom OAuth feature empowers developers to manage user authentication and integrate Web3 apps with {{config.extra.arcana.sdk_name}}. This enables the secure assignment of keys to authenticated users for signing blockchain transactions. Developers can use any custom authentication server to issue signed-in tokens ([JSON Web Tokens or JWT](https://datatracker.ietf.org/doc/html/rfc7519)) when users log in. The {{config.extra.arcana.sdk_name}} uses these tokens to verify users and fetches Web3 key shares locally. This ensures secure key generation for users to sign blockchain transactions.

{% include "./text-snippets/warn_custom_oauth_appkeys_only.md" %}

## Setup

Before using custom OAuth feature, developer must use the {{config.extra.arcana.dashboard_name}} to update these settings:

* JWKS Endpoint
* User Identifier String
* JWT Validation via Attributes/Claims

### JWKS Endpoint

A JWK Endpoint is a read-only URL exposed by the custom OAuth server or any other server that manages the cryptographic keys or JSON Web Keys (JWK) as per the [IETF RFC7517](https://datatracker.ietf.org/doc/html/rfc7517) and [IETF RFC7519](https://datatracker.ietf.org/doc/html/rfc7519) standards. JWKs are used to validate the integrity of a JWT and the encoded data by the {{config.extra.arcana.sdk_name}}.

### User Identifier String

The 'User Identifier String' is used to associate a unique string identifier with the authenticated user's key. Developers can configure this setting by choosing one of the options:

* Sub: The user identifier string identifies the principal that is the subject of the JWT.
* Email: JWT Token claim email identifier for the user
* Custom: A custom string used for JWT Token claim.

### Issuer

The issuer claim identifies the principal that issued the JWT.  For example, it could be the app identifier or deployed app URL. For example,

Issuer: "https://myapp.example.com"

### Audience

The audience claim identifies the recipients that the JWT is intended for. For example,

Audience: "arcana-login-nnnnnn"

### JWK Validation (Optional)

Claims are pieces of information asserted about a subject or user. A JWT can contain a claim called name that asserts that the name of the user authenticating is "John Doe". JWT Validation entities specified by the developer via the  {{config.extra.arcana.dashboard_name}} are key, value pairs. These are used to validate the JWT provided by the developer to the {{config.extra.arcana.sdk_name}} via the `loginWithCustomProvider()` method for authenticated users. 

Examples:

purpose: 'login'
keyUse: 'arcana'

## How Does Custom OAuth Work?

1. The developer adds code to the app for using a custom OAuth server or a mix of custom authentication methods and obtains a JWT after user authentication.

    ```mermaid
    graph LR
        IAP{{Developer}}
        MMM(Custom Authentication Service)
        subgraph app[App]
        direction LR
        CL[Custom Login]
        end
        IAP --> CL -->  MMM --->|JWT Token| CL

        linkStyle 2 stroke: deeppink;
    ```

2. If the app is not already registered, the developer must log in to the {{config.extra.arcana.dashboard_name}} and register to get a ClientID. Then configure custom OAuth settings in the dashboard.

    ```mermaid
    graph TD
        DFLA{{Developer}} --Login --> setup
    
        subgraph setup[Arcana Developer Dashboard]
        direction LR  
            SP1[1. Register App] --> CLID((Unique ClientID))
            SP2[2. Configure App] --> SP3[Edit/Save Custom OAuth Settings]
        end
        classDef an-pink stroke:#ff4e9f,stroke-width:0.25rem; 
        class CLID an-pink

    ```

3. Next, install {{config.extra.arcana.sdk_name}}, integrate app with the {{config.extra.arcana.sdk_name}}, initialize `AuthProvider` and then use the JWT obtained after the custom OAuth processing to call the `loginWithCustomProvider()` method.

    ```mermaid
    graph TD
        DFLA{{Developer}} --install --> authsdk
        DFLA --ClientID -->AUTHP
        DFLA --JWT Token -->COA
        subgraph app[App]
            AUTHP[Create/Init AuthProvider] --> authsdk
            COA[Call loginWithCustomOAuth] --> authsdk
            subgraph authsdk[Arcana Auth SDK]
            direction TB 
                SDK1[AuthProvider Interface] 
            end
        end
        linkStyle 1,2 stroke: deeppink;
        authsdk --Verify JWT Claims --> STD[Standard JWT/JWK Validation]
        authsdk --Fetch Key Shares --> BEP[Arcana Auth Protocol] <--> BEK[DKG]
    ```

4. {{config.extra.arcana.sdk_name}} verifies the JWT using claim information supplied in the dashboard configuration. Once verified, it fetches the user's key shares from the {{config.extra.arcana.company_name}} backend. It generates the user key locally, with privacy, within the app context from the key shares. The Web3 key allows authenticated users to sign blockchain transactions securely.

    ```mermaid
    graph LR
        BED[Arcana Developer Dashboard] --Custom OAuth Settings--> BEC{Gateway} 
        BEC <--> BEA[Arcana Auth Protocol] <--> BEDKG[DKG]
    ```