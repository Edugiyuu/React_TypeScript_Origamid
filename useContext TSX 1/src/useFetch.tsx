import React, { useState } from "react";
//Lembrando que esse generic <Interface> pode ser qualquer nome
//Esse Interface vai ser definido lá no app.tsx como useFetch<Produto[]>
//                                                  (esse Produto é a interface que está criada no app.tsx)
//                                                   (esse [] é um array de produtos da api né)
function useFetch<Interface>(url:RequestInfo | URL, options?:RequestInit) {

    const [data,setData] = useState<Interface | null>(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    
    return {data,loading,error}
}



export default useFetch