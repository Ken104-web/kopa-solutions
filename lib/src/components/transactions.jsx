import React, {useState, useEffect} from "react";

function TransactionForm({onAddId}){
    const [token, setToken ] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://127.0.0.1:5000/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: token,
                amount: amount,
            }),
        })
        .then((r) => r,json())
        .then((data) => onAddId(data))
    }

    // useEffect(() => {
    //     fetch (`http://127.0.0.1:5000/account${accId}`.toString(),{
    //         method: 'POST',
    //         "Content-Type": "application/json",
    //         'Accept': 'application/json',
    //     })

    //         .then((resp) => resp.json())
    //         .then((data) => {
    //                     console.log(data)
    //                 })
    //         }, [accId])
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    return(
        <div>
        <h1>Submit Transaction</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
     
            <button type="submit">Submit</button>
                
        </form>
        </div>  
    );

}

export default TransactionForm;
