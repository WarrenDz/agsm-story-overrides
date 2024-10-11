# Custom domain
Esri offers a developer friendly solution for self hosting stories created in ArcGIS StoryMaps. Users cannot download the source code for their stories but instead can incorporate simple Javascript to add their stories to their websites. This will change the url for a story from https://storymaps.arcgis.com/stories/xxxxxxxxxxxxxxxxxxxxx to your organization's domain. This is the recommended solution for incorporating a story into your organization's website. With this solution, authors can still edit their stories using the ArcGIS StoryMaps builder to keep their story up-to-date.

## Live sample
https://codepen.io/rdonihue/pen/oNKBboj

## Usage instructions
Implementing a custom domain involves:
- Create an index.html page or add the following to an existing HTML page
- add the embed-script id to your HTML page
- add your story id in the data-story-id=""
- host your HTML page


### HTML customizations

<div class="storymaps-root"></div>
<script>
  id="embed-script"
  src="https://storymapsqa.arcgis.com/embed/view"
  data-story-id="1ba69ca9c31b4183b1ee486c36364198"
  data-root-node=".storymaps-root"
</script>

### CSS customizations
> Use only if needed. Include a snippet of the business end of the CSS file and direct users where to make modifications.



### Javascript customizations
> Use only if needed. Include a snippet of the business end of the javascript file and direct users where to make modifications.
