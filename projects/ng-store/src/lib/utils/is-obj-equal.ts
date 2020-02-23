export function isObjEqual(objA: object, objB: object) {
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!objB.hasOwnProperty(key)) return false;

    const valA = objA[key];
    const valB = objB[key];

    if (typeof valA === "object" && typeof valB === "object")
      return isObjEqual(valA, valB);

    return valA === valB;
  }
}
