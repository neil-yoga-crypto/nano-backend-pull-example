# nano-backend-pull-example
Retrieving your wallet's transaction history from a public Nano RPC node example.

```
(async function() { 
    const axios = require('axios');
    let platformPublicWallet = 'nano_3t9ofis75mzxb76tq3mjqekwqzp6xgwcyehrmfpp8mbf1fs4paiipdz9guwy';
    let publicNanoNodeApiUrl = 'https://proxy.powernode.cc/proxy';
    let rpcPost = {
      "action": "account_history",
      "account": platformPublicWallet,
      "count": "60"
    };

    try {
        let res = await axios.post(publicNanoNodeApiUrl,rpcPost);
        // save transactions to your database if they do not exist
        res.data.history.forEach(async(transaction) => {
            console.log("transaction",transaction); 
        });
    } catch(err) {
        console.log("error",String(err)); 
    }

    process.exit(0); // close script
})() // async wrapper end;
```

### Install
```
git clone https://github.com/neil-yoga/nano-backend-pull-example
npm install
# replace your walletId in ./index.js
node index.js
```

### Link to Public Nano Nodes (unofficial)
https://publicnodes.somenano.com/

### Link to Nano Documentation
https://docs.nano.org/commands/rpc-protocol/

### Bonus: Keep things alive
```
// Enjoy the free code sharing. 
//
// ☯️ If you used my code to save time,
//  consider donating eco-friendly crypto:
```

```
nano_3boxqk5q56xsz8ufrw9srrz4pta6ffbkrg9j31aqziz8wtnr6j68ci7s4cnc
```

```
// It matters: Everything is an energy exchange ⚡.
//
//
// ^ Also feel free to copy this template for your own projects and replace the wallets.
// 🙏 You deserve to be happy and free.
```

### Nano?
<a style="color:black;font-size:15px;" href="https://nano.org">Zero Fees, Eco-Friendly, Instant Payments</a>

