import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function ToUpperCase(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target: target,
      propertyKey,
      type: TransformerTypes.TO_UPPER_CASE
    });
  };
}
