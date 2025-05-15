```js
import {
    useSendTransaction //Note: Use from ca-wagmi SDK
} from "@arcana/ca-wagmi";

const { sendTransaction } = useSendTransaction();
...
sendTransaction(
    {
        to,
        value,
    },
    {
        onSuccess(hash) {
            createSuccessToast(chain, hash);
            form.reset();
            setLoading(false);
            console.log("success");
        },
        onSettled() {
            console.log("settled");
        },
        onError(error) {
            console.log({ error });
            form.reset();
            setLoading(false);
        },
    }
);
...

```