import React from "react";

// import "./App.css";

import {
  Box,
  Text,
  Link,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Stack,
  Heading,
} from "@chakra-ui/react";
import InputPlaca from "./components/input";
import TablePlaceholder from "./components/table-placeholder";

function App() {
  const [query, setQuery] = React.useState("");
  return (
    <>
      <InputPlaca
        sendText={(value: any) => {
          setQuery(value);
          console.log("Text: ", value);
        }}
      />
      <div className="App">
        <Table size="sm" variant="striped" colorScheme="brand">
          <Thead>
            <Tr textAlign="center" bg="#1C4C61">
              <Th color="white" textAlign="center" fontSize={[8, 8, 12, 12]}>
                Razao Social/CNPJ
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Placa
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Usuário
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Status Infração
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Data da Infração
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Data Limite Envio Documentos
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Valor da Infração
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Valor Faturado
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Situação Processo Indicação
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Condutor Indicado
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Visualizar/Indicar
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Enviar Autuação
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Recusar Indicação
              </Th>
              <Th textAlign="center" color="white" fontSize={[8, 8, 12, 12]}>
                Interpor Recursos
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <TablePlaceholder queryText={query} />
          </Tbody>
        </Table>
      </div>
    </>
  );
}

export default App;
