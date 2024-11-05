export const AndOperation = (
  input1: boolean[],
  input2: boolean[],
  result: boolean[],
  setResult: Function
) => {
  setResult(
    result.map((res, i) => {
      return input1[i] === input2[i] && input1[i] === true
        ? (res = true)
        : (res = false);
    })
  );
};
export const OrOperation = (
  input1: boolean[],
  input2: boolean[],
  result: boolean[],
  setResult: Function
) => {
  setResult(
    result.map((res, i) => {
      return input1[i] === true || input2[i] === true
        ? (res = true)
        : (res = false);
    })
  );
};
export const XorOperation = (
  input1: boolean[],
  input2: boolean[],
  result: boolean[],
  setResult: Function
) => {
  setResult(
    result.map((res, i) => {
      return (input1[i] === true || input2[i] === true) &&
        input1[i] != input2[i]
        ? (res = true)
        : (res = false);
    })
  );
};
export const NotOperation = (
  input1: boolean[],
  result: boolean[],
  setResult: Function
) => {
  setResult(
    result.map((res, i) => {
      return input1[i] === true 
        ? (res = false)
        : (res = true);
    })
  );
};
