import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function Capitalize(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target,
      propertyKey,
      type: TransformerTypes.CAPITALIZE
    });
  };
}
