import { Box } from "@mui/material";

interface Props {
  value: boolean;
  handleOnClick: () => void;
}

const Bit = ({ value, handleOnClick }: Props) => {
  return (
    <Box
      width={"30px"}
      height={"30px"}
      sx={{
        border: "2px solid black",
        borderRadius: "100%",
        backgroundColor: value ? "black" : "transparent",
        userSelect: "none",
      }}
      onClick={() => {
        handleOnClick();
      }}
    />
  );
};

export default Bit;
