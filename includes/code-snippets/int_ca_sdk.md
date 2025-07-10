=== "EVM only"

    ```ts
    import { CA } from '@arcana/ca-sdk';
    const provider = window.ethereum;
    const ca = new CA();
    //Set the EVM provider  
    ca.setEVMProvider(provider);

    //Initialize ca
    await ca.init();

    //Get CA enabled provider
    const providerWithCA = ca.getEVMProviderWithCA();

    //Use providerWithCA to issue chain enabled transactions
    await providerWithCA.request({
        method: "eth_sendTransaction",
        params: [
            {
            to: "0xEa46Fb4b4Dc7755BA29D09Ef2a57C67bab383A2f",
            from: "0x7f521A827Ce5e93f0C6D773525c0282a21466f8d",
            value: "0x001",
            },
        ],
    });
    ```

=== "EVM + Fuel"

    ```ts
    import { CA } from '@arcana/ca-sdk';
    const provider = window.ethereum;
    const ca = new CA();
    //Set the EVM provider  
    ca.setEVMProvider(provider);

    //Initialize ca
    await ca.init();

    //connector refers to https://github.com/FuelLabs/fuel-connectors/wiki
    await ca.setFuelConnector(connector);
    const { provider, connector: CAconnector } = await ca.getFuelWithCA();

    const address = CAconnector.currentAccount()!;
    const account = new Account(address, provider, CAconnector);

    //chain abstraction enabled transfer
    await account.transfer(
        "0xE78655DfAd552fc3658c01bfb427b9EAb0c628F54e60b54fDA16c95aaAdE797A",
        1000000,
        "0xa0265fb5c32f6e8db3197af3c7eb05c48ae373605b8165b6f4a51c5b0ba4812e",
    );
    ```