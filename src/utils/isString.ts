export function isString(value: any): boolean {
  if (typeof(value) !== 'string') {
    throw new Error(`transform-class-properties: ${value} is not string.`);
  }

  return true;
}
