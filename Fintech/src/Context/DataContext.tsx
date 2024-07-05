import React, { Dispatch } from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: Dispatch<React.SetStateAction<string>>
  setFinal:Dispatch<React.SetStateAction<string>>
};

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState("");
  const [final, setFinal] = React.useState("");
console.log(inicio);

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/${inicio}&final=${final}`,
  );

  return (
    <DataContext.Provider value={{ data, loading, error,inicio, setInicio,final,setFinal}}>
      {children}
    </DataContext.Provider>
  );
};
