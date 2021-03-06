import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function Regex(expression: RegExp): PropertyDecorator {
  return function (target: object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target,
      propertyKey,
      type: TransformerTypes.REGEX,
      params: {
        expression
      }
    });
  };
}
