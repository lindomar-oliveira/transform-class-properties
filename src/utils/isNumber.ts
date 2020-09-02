export function isNumber(value: any): boolean {
  if (!Boolean(Number(value))) {
    throw new Error(`transform-class-properties: ${value} is not number.`);
  }

  return true;
}
