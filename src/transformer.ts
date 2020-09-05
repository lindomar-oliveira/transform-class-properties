import { Metadata, metadataStorage } from './metadataStorage';
import { TransformerTypes } from './transformerTypes';

export class Transformer {
  private readonly metadataStorage = metadataStorage;

  public static append(value: string, additionalValue: string | number): string {
    return `${value}${additionalValue}`;
  }

  public static capitalize(value: string): string {
    return value.toLowerCase().replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
  }

  public static escapeHtml(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  public static float(value: number, fractionDigits?: number): number {
    if (fractionDigits) {
      return Number(parseFloat(String(value)).toFixed(fractionDigits));
    }

    return Number(parseFloat(String(value)));
  }

  public static integer(value: number): number {
    return parseInt(String(value));
  }

  public static normalize(value: string): string {
    return value.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
  }

  public static prepend(value: string, additionalValue: string | number): string {
    return `${additionalValue}${value}`;
  }

  public static regex(value: string, expression: RegExp): string {
    return value.match(expression).join('');
  }

  public static removeNonNumeric(value: string): string {
    return value.replace(/\D/g, '')
  }

  public static removeNumeric(value: string): string {
    return value.replace(/[0-9]/g, '');
  }

  public static replace(value: string, searchValue: string | RegExp, replaceValue: string): string {
    return value.replace(searchValue, replaceValue);
  }

  public static toLowerCase(value: string): string {
    return value.toLowerCase();
  }

  public static toUpperCase(value: string): string {
    return value.toUpperCase();
  }

  public static trim(value: string): string {
    return value.trim();
  }

  public static unescapeHtml(value: string): string {
    return value
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, '\'');;
  }

  public transform<T = Record<string, any>>(classInstance: InstanceType<any>): T {
    this.metadataStorage
      .getMetadatasForClassInstance(classInstance)
      .filter(({ propertyKey }) => classInstance[propertyKey] !== undefined && classInstance[propertyKey] !== null)
      .forEach((metadata) => {
        classInstance[metadata.propertyKey] = this.transformValue(classInstance[metadata.propertyKey], metadata);
      });

    return classInstance as T;
  }

  public transformValue(value: any, metadata: Metadata): any {
    switch (metadata.type) {
      case TransformerTypes.APPEND:
        return Transformer.append(value, metadata.params.additionalValue);

      case TransformerTypes.CAPITALIZE:
        return Transformer.capitalize(value);

      case TransformerTypes.ESCAPE_HTML:
        return Transformer.escapeHtml(value);

      case TransformerTypes.FLOAT:
        return Transformer.float(value, metadata.params.fractionDigits);

      case TransformerTypes.INTEGER:
        return Transformer.integer(value);

      case TransformerTypes.NORMALIZE:
        return Transformer.normalize(value);

      case TransformerTypes.REGEX:
        return Transformer.regex(value, metadata.params.expression);

      case TransformerTypes.REMOVE_NON_NUMERIC:
        return Transformer.removeNonNumeric(value);

      case TransformerTypes.REMOVE_NUMERIC:
        return Transformer.removeNumeric(value);

      case TransformerTypes.REPLACE:
        return Transformer.replace(value, metadata.params.searchValue, metadata.params.replaceValue);

      case TransformerTypes.TO_LOWER_CASE:
        return Transformer.toLowerCase(value);

      case TransformerTypes.TO_UPPER_CASE:
        return Transformer.toUpperCase(value);

      case TransformerTypes.TRIM:
        return Transformer.trim(value);

      case TransformerTypes.UNESCAPE_HTML:
        return Transformer.unescapeHtml(value);

      default:
        return value;
    }
  }
}
