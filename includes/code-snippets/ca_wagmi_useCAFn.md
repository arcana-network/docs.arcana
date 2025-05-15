```js
import { useCAFn } from "@arcana/ca-wagmi"

const { bridge, transfer } = useCAFn()

await bridge({
token: "usdt",
amount: "1.5",
chain: 42161
})

const hash = await transfer({to: "0x80129F3d408545e51d051a6D3e194983EB7801e8",
token: "usdt",
amount: "1.5",
chain: 10
})
```