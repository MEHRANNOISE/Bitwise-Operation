export const AndOperation = (
  input1: boolean[],
  input2: boolean[],
  result: boolean[],
  setResult: (newResult: boolean[]) => void
) => {
  setResult(result.map((_, i) => input1[i] && input2[i]));
};
export const OrOperation = (
  input1: boolean[],
  input2: boolean[],
  result: boolean[],
  setResult: (newResult: boolean[]) => void
) => {
  setResult(result.map((_, i) => input1[i] || input2[i]));
};
export const XorOperation = (
  input1: boolean[],
  input2: boolean[],
  result: boolean[],
  setResult: (newResult: boolean[]) => void
) => {
  setResult(
    result.map((_, i) => (input1[i] || input2[i]) && input1[i] != input2[i])
  );
};
export const NotOperation = (
  input1: boolean[],
  result: boolean[],
  setResult: (newResult: boolean[]) => void
) => {
  setResult(result.map((_, i) => !input1[i]));
};
