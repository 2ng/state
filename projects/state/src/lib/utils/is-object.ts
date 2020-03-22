export default function isObject(obj: any): boolean {
  return typeof obj === 'object' && obj !== null;
}
