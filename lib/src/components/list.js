import React, { useState, useEffect } from 'react'

function List(){
   const [acc, setAcc] = useState([]);

    useEffect(() => {
        fetch('https://infra.devskills.app/api/accounting/transactions')
        .then((r) => r.json())
        .then((acc) => console.log(acc));
    }, []);
}

export default List;
