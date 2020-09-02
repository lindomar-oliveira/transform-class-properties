import { TransformerTypes } from './transformerTypes';

export interface Metadata {
  target: Object;
  propertyKey: string | symbol;
  type: TransformerTypes;
  params?: any;
  options?: any;
}

class MetadataStorage {
  private readonly metadataStore: Map<Function, Metadata[]> = new Map();

  public addMetadata(metadata: Metadata): void {
    const target = metadata.target as Function;
    if (!this.metadataStore.has(target)) {
      this.metadataStore.set(target, []);
    }

    this.metadataStore.get(target).push(metadata);
  }

  public getMetadatasForClassInstance(classInstance: Object): Metadata[] {
    const targetMetadata = this.metadataStore.get((classInstance as any)['__proto__']) || [];
    const parentMetadata = this.metadataStore.get((classInstance as any)['__proto__']['__proto__']) || [];

    return [...targetMetadata, ...parentMetadata];
  }
}

export const metadataStorage = new MetadataStorage();
