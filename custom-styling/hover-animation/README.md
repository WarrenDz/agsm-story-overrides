# Hover animations
This sample demonstrates how custom hover animations can be implemented on a number of elements within a story. These animations can be strategically used to draw greater attention to elements within your story such as call-to-actions.

In this example a wave shaped animation has been applied to:
- Links
- Quote blocks
- Embed cards

## Usage instructions
Implementing hover animations in a story involves:
- Configuring a `background-image` for the desired story elements.
- Creating an animation with `@keyframes` for the position of the background image.

### CSS snippet
**Configure the location of the background-image**: The `wave.svg` is used as a `background-image`. Using the initial `background-position: 0 -100%;` positions it outside the element so that it cannot be seen. The `transition: 1.25s ease-in-out;` determines how fast the image will move and when. In this case it will take 1.25s to perform it's movement when it moves in and out of place.
```css
/* Configure the initial location of the background image on the link element*/
a {
  background: transparent;
  background-size: 100px;
  background-image: url('wave.svg');
  background-repeat: repeat-x;
  background-position: 0 -100%;
  transition: 1.25s ease-in-out;
}
```

**Move the background image on hover**: When the reader hovers over the link element, the `background-image` is moved using `background-position: 50% 100%;`.
````css
/* Translate the location of the wave background-image on hover */
a:hover {
  background-position: 50% 100%;
}
```