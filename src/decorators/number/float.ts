import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function Float(fractionDigits?: number): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target: target,
      propertyKey,
      type: TransformerTypes.FLOAT,
      params: {
        fractionDigits
      }
    });
  };
}
