* Install [NuGetForUnity](https://github.com/GlitchEnzo/NuGetForUnity).

* In the NuGet Toolbar at the top, click **NuGet > Manage NuGet packages**. ![NuGet Manage Pkg](/img/unity_manage_nuget_pkg.png){ .an-screenshots} 

* Install the following packages by STA: `Nethereum.Web3`, `WebsocketSharp.Core`

* Use the Unity Editor Project Settings window to edit package settings for your project. Click **Edit > Project Settings > Package Manager**.

      - [Add a new scoped registry](https://docs.unity3d.com/Manual/class-PackageManager.html) with URL **http://3.95.15.12** and set the scope to `com.cysharp.unitask, dev.voltstro` ![Pkg Manager 1](/img/unity_pkg_mgr_1.png){ .an-screenshots }

      - Add another new scoped registry with URL **https://unitynuget-registry.azurewebsites.net** and set the scope to `org.nuget`.  ![Pkg Manager 2](/img/unity_pkg_mgr_2.png){ .an-screenshots }

* In the NuGet window, use the NuGet Toolbar at the top, click **Window > Package Manager > Add Package by Name**. ![NuGet Pkg](/img/unity_nuget_pkg_mgr.png){ .an-screenshots }

* Add the following packages:

      - **Windows**: `dev.voltstro.unitywebbrowser.engine.cef`, `dev.voltstro.unitywebbrowser.engine.cef.win.x64`

      - **Linux**: `dev.voltstro.unitywebbrowser.engine.cef.linux.x64`

      - **MacOS**: `dev.voltstro.unitywebbrowser.engine.cef.macos.x64`

* {% include "./code-snippets/auth_unity_install.md" %}

* Search for **ArcanaSDK** prefab in the 'Project Window' of the Unity Editor. Click **Assets > ArcanaSDK > Prefabs > ArcanaSDK**. Drag this prefab into the project 'Hierarchy' and configure the prefab as shown here: ![Configure Prefab](/img/unity_configure_prefab.png){ .an-screenshots }