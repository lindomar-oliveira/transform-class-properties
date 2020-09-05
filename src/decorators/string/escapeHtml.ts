import { metadataStorage } from '../../metadataStorage';
import { TransformerTypes } from '../../transformerTypes';

export function EscapeHtml(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    metadataStorage.addMetadata({
      target,
      propertyKey,
      type: TransformerTypes.ESCAPE_HTML
    });
  };
}
