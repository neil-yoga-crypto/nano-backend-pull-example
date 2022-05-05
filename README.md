# nano-backend-pull-example
Retrieving your wallet's transaction history from a public Nano RPC node example.

I am using https://github.com/neil-yoga/crud-true-power for the HTTP POST request, but you can use of course another library of preference, like Axios.

```
(async function() { // async wrapper start + 
try {
    var crud = require('./crud-true-power')();
    // feel free to replace crud with axios if you
    let platformPublicWallet = 'nano_3t9ofis75mzxb76tq3mjqekwqzp6xgwcyehrmfpp8mbf1fs4paiipdz9guwy';
    let publicNanoNodeApiUrl = 'https://proxy.powernode.cc/proxy';
    let rpcPost = {
      "action": "account_history",
      "account": platformPublicWallet,
      "count": "60"
    };

    let res = await crud.http.create(publicNanoNodeApiUrl,rpcPost);
    if(res.error) {
        console.log("error",String(res.error)); 
    } else {
        // save transactions to your database if they do not exist
        res.history.forEach(async(transaction) => {
            console.log("transaction",transaction); 
        });
    }
    process.exit(0); // close script
     } catch(err) { console.log(err);process.exit(1);}
})() // async wrapper end;
```
