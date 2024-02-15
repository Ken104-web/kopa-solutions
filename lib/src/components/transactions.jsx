import React, { useEffect, useState } from "react";

function TransactionForm(){
    const [accId, setAccId ] = useState('')
    const [amount, setAmount] = useState(0)


    useEffect(() => {
        fetch (`https://infra.devskills.app/api/accounting/transaction${accountId}`.toString(),{
            method: 'POST',
            "Content-Type": "application.json"
        })

            .then((resp) => resp.json())
            .then((data) => {
                        console.log(data)
                    })
            })
    


}

export default TransactionForm;
