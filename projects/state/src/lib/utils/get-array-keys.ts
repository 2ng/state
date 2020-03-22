export default function getArrayKeys(array: any[]) {
  return Array(array.length)
    .fill(undefined)
    .map((e, i) => i);
}
