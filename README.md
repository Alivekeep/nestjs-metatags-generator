# NestJS meta tags generator

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/nestjs-metatags-generator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/nestjs-metatags-generator
[download-image]: https://img.shields.io/npm/dm/nestjs-metatags-generator.svg?style=flat-square
[download-url]: https://npmjs.org/package/nestjs-metatags-generator

Meta tags generator for NestJS MVC. Should be nice for SEO purposes.

In general, generator can make ~10k records per seconds and use ~80Mb memory for this.
That's mean meta tags generation not be bottleneck with up to 10k RPS.

### Installation

```shell script
npm install nestjs-metatags-generator
```

### How to use

In module file

```typescript
import { MetaTagsGeneratorModule } from 'nestjs-metatags-generator';

@Module({
  imports: [MetaTagsGeneratorModule.register()]
})
export class AppModule {}
```

In controller

```typescript
import { MetaTagsGeneratorService, OpengraphTypes } from 'nestjs-metatags-generator';

@Controller('/')
export class MVCController {
  constructor(private readonly generator: MetaTagsGeneratorService) {}

  @Get('')
  @Render('index-page')
  public async indexPage() {
    const fragments = this.generator.prepare({
      robots: 'index, follow',
      backgroundColor: '#962d2d',
      handheld: 'https://m.example.world',
      canonical: 'https://example.world',
      primaryColor: '#2a797c',
      siteName: 'Example',
      pageType: OpengraphTypes.article,
      description: 'Example site',
      title: 'Example site | Some motivation phrase',
      url: 'https://example.world',
      keywords: 'nestjs, typescript, nodejs, SEO'
    });
    return {
      headFragment: fragments.head
    };
  }
}
```

Finally, you need place HTML output to template, like this:

```html
<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    {{@headFragment}}
  </head>
</html>
```

### Licence

[MIT](./LICENSE)
