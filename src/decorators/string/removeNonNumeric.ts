import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function RemoveNonNumeric(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target: target,
      propertyKey,
      type: TransformerTypes.REMOVE_NON_NUMERIC
    });
  };
}
