# TO DO
- Remove support for old IE Browsers
- Split components in two -  components and patterns?
    * components are reusable (think accordion) that can exist on their own
    * patterns are not reusable (think header) and can contain other components
 
# SCSS OO Architecture Details

## New Proposed Sass Folder Structure:
0. Helpers - helper classes that will go on top of regular components/areas/elements. It took me a while to get my head around why I would need this folder and set of classes but I thought of a good example that helped clarify it for me --> a clearfix utlitiy class - imagine we want clearfix and non-clearfix versions for 10 of our components in components folder - we could create these in the components partials - we would then have 20 different class components, 10 clearfix versions and 10 non-clearfix. However if we just create a clearfix helper class we then only have 11 classes - the 10 non-clearfix components and the clearifx utility. You can see why this is a smarter way to do things I should think!
1. Components - Discrete re-usable components e.g. buttons - only using class selectors - more explicitly named - they are *things*
2. Layout - CSS concerned with layout as opposed to style - free of visual styling - abstract - examples include wrapper, media object and grids - uses class selectors
3. Elements - basic styling for all html elements e.g. h1, a, li - should be no classes defined in these files - also we should 
not see use any element selectors in the folders above this one (0 to 3).
4. Base - some boilerplate global scope css for the project - e.g. elements to fix issues with default html browser rendering - normalize.scss -- also rules you expect to follow across sites e.g. setting base font size, box sizing model, etc - should not need to alter much of the scss in these files - layer 5 is first folder that produces some css -
5. Utilities - e.g. mixins, functions, variables - most files in this folder should not need to be altered from site to site 
(except for the media query breakpoints) - this folder should not produce any css
6. Settings - files containing basic style settings for current site that you will probably wish to alter e.g. colour.scss - should not produce any css

Helpers and placeholders/mixins:
1. Always start with the placeholder/mixin - this is where the scss will be maintained
2. All helper classes should inherit their css from an existing mixin/placeholder where possible
3. Only create a helper class if it can be re-usable - if it's only going to be used by one component then maybe add that scss to the component class instead.

We won't have a sass vendors folder as these files will be loaded in using Yarn at project development time to ensure we get the most up to date versions. They will be referenced in the imports folder however, just ensure the paths are still correct with your versions of the package.

for the above structure I took inspiration from ITCSS, 7-1 folder structure and [this article](https://css-tricks.com/combining-the-powers-of-sem-and-bio-for-improving-css/) mainly - but changed the parts I didnt feel comfortable with. I will probably add another folder for animations as my animations library grows.

## Rules to Follow:
1. If a mixin has 0 arguments then change it to a placeholder - makes for DRYer CSS.
2. If mixins, functions, and variables are specific to a particluar partial file then consider moving them into that file
3. Never go more then 3 levels deep with your nesting
