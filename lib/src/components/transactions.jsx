import React, {useState, useEffect} from "react";

function TransactionForm(){
    const [accId, setAccId ] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        fetch("/accounts", {
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
        .then((data) => console.log(data))
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
        <form onSubmit={handleSubmit}>
        <h1>Submit Transaction</h1>
        <label htmlFor="accId">AccountId: </label>
         <input
        type="text"
        id="account-id"
        value={accId}
        onChange={(e) => setAccId(e.target.value)}
      />
      <label   htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
            <button onClick={handleSubmit}type="submit">Submit</button>
                
        </form>
        </div>  
    );

}

export default TransactionForm;
