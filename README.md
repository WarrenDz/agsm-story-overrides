# Script-embedded ArcGIS StoryMaps Samples
This repository is intended for sharing samples of script-embedded ArcGIS StoryMaps stories. Embedding stories using a script-embed is a developer-friendly pathway for customizing your stories and implementing custom functionality.

## Usage instructions
In order to embed stories in your website using this workflow, you'll need:
- `index.html` file
- priviledges that allow the addition of custom `<script>` tags

### Embedding a story
Here's what to do...

```html
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
- **HTML** index.html file that acts as the main webpage with a script-embed of an ArcGIS StoryMap story.
- **CSS**  style.css file containing rules for overriding the styling of elements within a story.
- **Javascript (optional)** javascript.js file containing code to manipulate content of the webpage.
- **README** A read me document that outlines the use case for the sample, how to implement it, and a link to a live codepen (if applicable).

## Sample use cases
Here are some ways you can customize your script-embedded stories.

- **[Header and footers](https://github.com/WarrenDz/agsm-story-overrides/blob/master/header-footer)** Wrap your story in your own header and footer.

- **[Custom domain](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-domain)** Host your story on your own domain so you control the url.

- **[Analytics integration](https://github.com/WarrenDz/agsm-story-overrides/blob/master/analytics)** Implement your own analytics integration from X, Y, Z.

- **[Splash screen](https://github.com/WarrenDz/agsm-story-overrides/blob/master/splash-page)** Add a splash screen to your story that welcomes readers or provides some context before they read on.

- **[Custom font](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-font)** Replace fonts in your story with self-hosted fonts so that your story can align to your corporate style guides.

- **[Custom styling](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-styling)** A collection of creative samples that apply custom styling to embedded stories including:
    - **[Line height](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-styling/line-height)** Override the line height of text within your story to suit your font.
    - **[Custom covers](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-styling/custom-cover)** Customize the appearance of your story cover.
    - **[Hover animations](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-styling/hover-animation)** Configure custom animations on elements within your story when a user hovers.
    - **[Hidden hints](https://github.com/WarrenDz/agsm-story-overrides/blob/master/custom-styling/hidden-hints)** Add intrigue with hint text to scavenger hint or quiz-style stories using pseudo elements and hover transitions.

## Resources
- Likely a blog post here...
- Probably a link to some doc here...
