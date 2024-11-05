import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import Byte from "./Byte";
import { AndOperation, NotOperation, OrOperation, XorOperation } from "./operations";

interface Operation{
  And:boolean;
  Or:boolean;
  Xor:boolean;
  Not:boolean;
}

const App = () => {
  const [input1, setInput1] = useState<boolean[]>(Array(8).fill(false));
  const [input2, setInput2] = useState<boolean[]>(Array(8).fill(false));
  const [result, setResult] = useState<boolean[]>(Array(8).fill(false));
  const [operations, setOperation] = useState<Operation>({And : false,Or : false , Xor:false, Not:false});


  return (
    <>
      <Stack padding={3} alignItems={"center"} height={"100vh"}>
        <Typography variant="h3">Bitwise Operation</Typography>
        <Stack
          margin={5}
          width={"100%"}
          height={"100%"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{
            border: "2px dashed black",
            borderRadius: 2,
          }}
        >
          <Stack gap={3} alignItems={"center"}>
            <Typography variant="body1">input 1</Typography>
            <Byte update={setInput1} values={input1} />
          </Stack>
          <Stack gap={3} alignItems={"center"}>
            <Typography variant="body1">input 2</Typography>
            <Byte update={setInput2} values={input2} disabled={operations.Not} />
          </Stack>
          <Stack gap={3} alignItems={"center"}>
            <Typography variant="body1">Operation</Typography>
            <Stack direction={"row"} gap={3} marginTop={1}>
              <Typography
                variant="body1"
                sx={{
                  textDecoration: operations.And ? "underline black" : "none",
                }}
                onClick={() => {
                  setOperation({And : true ,Or : false , Xor:false, Not:false})
                  AndOperation(input1, input2, result, setResult);
                }}
              >
                AND
              </Typography>
              <Typography
                sx={{
                  textDecoration: operations.Or ? "underline black" : "none",
                }}
                variant="body1"
                onClick={() => {
                  setOperation({And : false,Or : true , Xor:false, Not:false})
                  OrOperation(input1, input2, result, setResult);
                }}
              >
                OR
              </Typography>
              <Typography
                sx={{
                  textDecoration: operations.Xor ? "underline black" : "none",
                }}
                variant="body1"
                onClick={() => {
                  setOperation({And : false,Or : false , Xor:true, Not:false})
                  XorOperation(input1, input2, result, setResult);
                }}
              >
                XOR
              </Typography>
              <Typography
                sx={{
                  textDecoration: operations.Not ? "underline black" : "none",
                }}
                variant="body1"
                onClick={() => {
                  setOperation({And : false,Or : false , Xor:false, Not:true})
                  NotOperation(input1, result, setResult)
                }}
              >
                NOT
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={3} alignItems={"center"}>
            <Typography variant="body1">result</Typography>
            <Byte values={result} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default App;
