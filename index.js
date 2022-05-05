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
