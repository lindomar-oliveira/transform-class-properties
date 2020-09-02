import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function ToLowerCase(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target: target,
      propertyKey,
      type: TransformerTypes.TO_LOWER_CASE
    });
  };
}
