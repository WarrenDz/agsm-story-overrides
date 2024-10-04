# Script-embedded ArcGIS StoryMaps Samples
This repository is intended for sharing samples of script-embedded ArcGIS StoryMaps stories. Embedding stories using a script-embed is a developer-friendly pathway for customizing your stories and implementing custom functionality.

## Usage instructions
Requirements...? Clarify with Dev Team.
- index.html file
- website

### Embedding a story
Here's what to do...
```
  <!-- Embedded story -->
  <div class="storymaps-root"></div>
  <script
    id="embed-script"
    src="https://storymapsqa.arcgis.com/embed/view"
    data-story-id="1ba69ca9c31b4183b1ee486c36364198"
    data-root-node=".storymaps-root"
  ></script>
```

## Sample structure
Each sample folder within this repository demonstrates a specific use case and contains:
- **HTM**L index.html file 
- **CSS** 
- **Javascript (optional)**
- **README** A read me document that outlines the use case for the sample, how to implement it, and a link to a codepen (if applicable).

## Sample use cases
- **[Header and footers]()** Wrap your story in your own header and footer.

- **[Custom domain](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-domain/CustomDomain.md)**

- **[Analytics integration](https://github.com/WarrenDz/agsm-story-overrides/blob/master/analytics/Analytics.md)** Implement your own analytics integration from X, Y, Z.

- **[Splash screen](https://github.com/WarrenDz/agsm-story-overrides/blob/master/splash-page/SplashScreen.md)** Add a splash screen to your story that welcomes readers or provides some context before they read on.

- **[Custom font](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-font/CustomFont.md)** Replace fonts in your story with self-hosted fonts so that your story can align to your corporate style guides.

- **[Custom styling](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-styling/CustomStyling.md)** A collection of creative samples that apply custom styling to embedded stories including:
    - **Line height**
    - **Custom covers**
    - **Hover animations**

## Resources

