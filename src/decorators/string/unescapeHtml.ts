import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function UnescapeHtml(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target,
      propertyKey,
      type: TransformerTypes.UNESCAPE_HTML
    });
  };
}
