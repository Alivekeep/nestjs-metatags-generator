import { DynamicModule, Global, Module } from '@nestjs/common';
import { Settings } from 'metatags-generator';

import { MetaTagsGeneratorService } from './metatags-generator.service';

/**
 * Core module
 */
@Global()
@Module({})
export class MetaTagsGeneratorModule {
  /**
   * Basic method
   */
  public static register(settings?: Settings): DynamicModule {
    const metaTagProvider = {
      provide: MetaTagsGeneratorService,
      useFactory: (): MetaTagsGeneratorService => {
        return new MetaTagsGeneratorService(settings);
      }
    };
    return {
      module: MetaTagsGeneratorModule,
      providers: [metaTagProvider],
      exports: [metaTagProvider]
    };
  }
}
