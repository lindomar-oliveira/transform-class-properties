import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function Replace(searchValue: string | RegExp, replaceValue: string): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target: target,
      propertyKey,
      type: TransformerTypes.REPLACE,
      params: {
        searchValue,
        replaceValue
      }
    });
  };
}
