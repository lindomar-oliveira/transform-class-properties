import { Transformer } from './transformer';

export * from './decorators';

const transformer = new Transformer();

export function transform(object: any): void {
  return transformer.transform(object);
}
