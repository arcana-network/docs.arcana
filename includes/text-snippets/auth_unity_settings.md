* Install [NuGetForUnity](https://github.com/GlitchEnzo/NuGetForUnity).

* In the NuGet Toolbar at the top, click **NuGet > Manage NuGet packages**. <figure markdown="span">![Manage NuGet Packages]({{config.extra.arcana.img_dir}}/unity_manage_nuget_pkg.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }<figcaption>Manage NuGet Packages</figcaption></figure>

* Install the following packages by STA: `Nethereum.Web3`, `WebsocketSharp.Core`

* Use the Unity Editor Project Settings window to edit package settings for your project. Click **Edit > Project Settings > Package Manager**.

      - [Edit Project Settings](https://docs.unity3d.com/Manual/class-PackageManager.html) with URL **https://npm-registry.arcana.network/** and set the scope to `com.cysharp.unitask, dev.voltstro` <figure markdown="span">![Pkg Manager 1]({{config.extra.arcana.img_dir}}/unity_pkg_mgr_1.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }<figcaption>Edit Project Settings</figcaption></figure>

      - Add another new scoped registry with URL **https://unitynuget-registry.azurewebsites.net** and set the scope to `org.nuget`. <figure markdown="span">![Add Scoped Registry]({{config.extra.arcana.img_dir}}/unity_pkg_mgr_2.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }<figcaption>Add Scoped Registry</figcaption></figure>

* In the NuGet window, use the NuGet Toolbar at the top, and click **Window > Package Manager > Add Package by Name**. <figure markdown="span">![Add Package by Name]({{config.extra.arcana.img_dir}}/unity_nuget_pkg_mgr.{{config.extra.arcana.img_png}}){ .an-screenshots }<figcaption>Add Package by Name</figcaption></figure>

* Add the following packages: `com.cysharp.unitask`, ``dev.voltstro.unitywebbrowser.engine.cef`

      - **Windows**:  `dev.voltstro.unitywebbrowser.engine.cef.win.x64`

      - **Linux**: `dev.voltstro.unitywebbrowser.engine.cef.linux.x64`

      - **MacOS**: `dev.voltstro.unitywebbrowser.engine.cef.macos.x64`

See [Unity Web Browser package list](https://projects.voltstro.dev/UnityWebBrowser/latest/articles/user/packages/#package-list) for details.

* {% include "./code-snippets/auth_unity_install.md" %}

* Search for **ArcanaSDK** prefab in the 'Project Window' of the Unity Editor. Click **Assets > ArcanaSDK > Prefabs > ArcanaSDK**. Drag this prefab into the project 'Hierarchy' and configure the prefab as shown here: <figure markdown="span">![Configure Arcana Prefab]({{config.extra.arcana.img_dir}}/unity_configure_prefab.{{config.extra.arcana.img_png}}){ .an-screenshots .width_50pc }<figcaption>Configure Arcana Prefab</figcaption></figure>