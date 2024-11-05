import { Stack } from "@mui/material";
import Bit from "./Bit";

interface Props {
  values: boolean[];
  update?: Function;
  disabled?: boolean;
}

const Byte = ({ values, update = Function, disabled }: Props) => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          opacity: disabled ? 0.25 : 1,
          pointerEvents: disabled ? "none" : "initial",
        }}
      >
        {values.map((value, index) => (
          <Bit
            handleOnClick={() => {
              update(values.map((v, i) => (index === i ? !v : v)));
            }}
            value={value}
          />
        ))}
      </Stack>
    </>
  );
};

export default Byte;
