import { OpengraphTypes } from 'metatags-generator';

export class PreparingOptions {
  /**
   * Page title
   */
  public title: string;

  /**
   * Page description
   */
  public description: string;

  /**
   * Page keywords
   */
  public keywords: string;

  /**
   * Page URL
   */
  public url: string;

  /**
   * Site logo
   */
  public logo?: string;

  /**
   * Robots tag
   */
  public robots?: string;

  /**
   * Page short link
   */
  public shortlink?: string;

  /**
   * Page canonical URL
   */
  public canonical?: string;

  /**
   * Mobile version URL
   */
  public handheld?: string;

  /**
   * Site name, can be used for application name to
   */
  public siteName?: string;

  /**
   * Site primary color
   */
  public primaryColor?: string;

  /**
   * Background color for Microsoft bookmarks
   */
  public backgroundColor?: string;

  /**
   * Open Graph page type
   */
  public pageType?: OpengraphTypes;

  /**
   * Movie duration. Works only with pageType: movie
   */
  public movieDuration?: number;

  /**
   * Facebook App ID
   */
  public facebookAppId?: number;

  /**
   * Twitter Card
   */
  public twitterCard?: string;

  /**
   * Twitter site
   */
  public twitterSite?: string;

  /**
   * Twitter creator
   */
  public twitterCreator?: string;

  /**
   * Page main image for preview
   */
  public mainImage?: string;
}
