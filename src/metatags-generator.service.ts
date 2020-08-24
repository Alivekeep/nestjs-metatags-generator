import { Injectable } from '@nestjs/common';
import { MetadataGenerator, MetatagsDocument, PageMeta, ProjectMeta, Settings, TwitterMeta } from 'metatags-generator';

import { PreparingOptions } from './interfaces/preparing-options';

/**
 * Meta tag generator service
 */
@Injectable()
export class MetaTagsGeneratorService {
  /**
   * Generator instance
   * @private
   */
  private readonly generator: MetadataGenerator;

  /**
   * Optional setting
   */
  constructor(settings?: Settings) {
    this.generator = new MetadataGenerator();

    if (settings) this.generator.configure(settings);
  }

  /**
   * Prepare HTML fragments from object
   */
  public prepare(options: PreparingOptions): MetatagsDocument {
    this.generator.clear();

    this.generator.disableMicrosoftAppConfig();

    if (options.robots) {
      this.generator.setRobots(options.robots);
    }

    if (options.shortlink) {
      this.generator.setShortLink(options.shortlink);
    }

    if (options.canonical) {
      this.generator.setCanonical(options.canonical);
    }

    if (options.handheld) {
      this.generator.setAlternateHandheld(options.handheld);
    }

    const preparedProjectData: ProjectMeta = {
      url: options.url
    };

    if (options.siteName) {
      preparedProjectData.name = options.siteName;
    }

    if (options.primaryColor) {
      preparedProjectData.primaryColor = options.primaryColor;
    }

    if (options.backgroundColor) {
      preparedProjectData.backgroundColor = options.backgroundColor;
    }

    if (options.logo) {
      preparedProjectData.logo = options.logo;
    }

    this.generator.setProjectMeta(preparedProjectData);

    if (options.pageType) {
      this.generator.openGraphData(options.pageType, options.movieDuration);
    }

    if (options.facebookAppId) {
      this.generator.setFacebookMeta(options.facebookAppId);
    }

    const preparedTwitter: TwitterMeta = {};

    if (options.twitterCard) {
      preparedTwitter.card = options.twitterCard;
    }

    if (options.twitterCreator) {
      preparedTwitter.creator = options.twitterCreator;
    }

    if (options.twitterSite) {
      preparedTwitter.site = options.twitterSite;
    }

    this.generator.setTwitterMeta(preparedTwitter);

    const preparedMeta: PageMeta = {
      title: options.title,
      description: options.description,
      keywords: options.keywords,
      url: options.url
    };

    if (options.mainImage) {
      preparedMeta.image = options.mainImage;
    }

    this.generator.setPageMeta(preparedMeta);

    return this.generator.build();
  }
}
