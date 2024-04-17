import React, {useState, useEffect} from "react";

function TransactionForm({onAddId}){
    const [accId, setAccId ] = useState("")
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


    return(
        <div>
        <h1>Submit Transaction</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="token"
          placeholder="Account Id"
          value={accId}
          onChange={(e) => setAccId(e.target.value)}
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
