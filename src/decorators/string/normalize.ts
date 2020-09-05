import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function Normalize(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target,
      propertyKey,
      type: TransformerTypes.NORMALIZE
    });
  };
}
