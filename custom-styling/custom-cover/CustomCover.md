# Customized cover
Customizing the cover of your story is one way to make it stand out. When a story is embedded using a script-embed, additional styling can be implemented using CSS. While there are many ways a cover, and the story itself, can be customized this example demonstrates how:
- The title font can be customized
- The cover image can be manipulated within the title text.
- The larger media panel of the cover can be modified.

## Live sample
[![Custom cover sample codepen](./assets/sample_custom_cover.jpg "Custom cover sample codepen")](https://codepen.io/Warren-Davison/pen/MWNegKp)

## Usage instructions
In this example, implementing a custom cover involves:
- Adding an additional font from Google Fonts.
- Configuring the font size.
- Filling the text with a background image and using `-webkit-background-clip` to clip it to the title text.
- Modifying the color and opacity of the cover media container.

### HTML snippet
**Reference Google Font**: This references an additional typeface from Google Fonts.
```html
<!-- Reference Google Font: Six Caps -->
<link href="https://fonts.googleapis.com/css2?family=Six+Caps&display=swap" rel="stylesheet">
```

### CSS snippet
**Style the title**: This selects the story title using `h1.sc-title` and replaces the font with the `Six Caps` imported from Google Fonts. In addition, the size, weight, and case are customized.

```css
/* Replace cover title font and image cutout */
h1.sc-title {
    font-family: "Six Caps", sans-serif;
    font-size: 2750%;
    font-weight: 800;
    font-style: normal;
    text-transform: uppercase;
    text-align: center;
    color: #DDD3D9;
...
```
**Using a background image in the title**: This references the same image from the cover and places it as a `background` within the title text. Using the `webkit-background-clip` the image is clipped to the text characters.
```css
...
    /* This sets the background image and clips it to the text characters */
    background: url(https://cdn.arcgis.com/sharing/rest/content/items/e857e2e8b0f34597999077a04dba4350/resources/C1VCMdFCo1WDwDyUI1NX0.jpeg) no-repeat;
    background-position: 50% 50%;
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
```
**Fade the back main background image**: To enhance the effect, the background image container of the cover is given a background to match the story `#0F1116` and the opacity of the element is reduced to `20%` to make it less prominent than the title text.
```css
/* Knock back the visibility of the cover image */
div.media-panel.background img {
  color: #0F1116;
  opacity: 0.2;
}
```