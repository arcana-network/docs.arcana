```js
import {
    useBalanceModal
} from "@arcana/ca-wagmi";

const { hideModal, showModal } = useBalanceModal();

...
// if connected

<button onClick={() => showModal()}> 
    Unified Balance
</button>

```