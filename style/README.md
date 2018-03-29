# SCSS OO Architecture Details

## New Proposed Sass Folder Structure:
1. Pages - This is the folder for page specific changes, files named after pages, e.g. home, about-us.scss - very specific css - should only 
apply to that page only - 
if it applies across multiple pages then it should actually be in componemtns/areas section...
2. Components - Small re-usable one html level deep components e.g. buttons - only using class selectors - more explicitly named compared to 
next section 3 - e.g. `.product-list{}`
3. Areas - many call this type of folder "modules", "layout" or "objects" - I prefer 'area' as its more natural language in line with
what I actually use when describing things in this folder e.g. the "header area" - other areas include sidebar, footer, nav etc - only use 
class names - however they should be agnostically named, e.g. `.ui-list{}`
4. Elements - basic styling for all html elements e.g. h1, a, li - should be no classes defined in these files - also we should 
not see use any element selectors in the folders above this one (1-3).
5. Base - some boilerplate global scope css for the project - e.g. elements to fix issues with default html browser rendering - normalize.scss -- 
also rules you expect to follow across sites e.g. setting base font size, box sizing model, etc - should not need to alter much of the scss in these 
files - layer 5 is first folder that produces some css 
6. Utilities - e.g. mixins, functions, variables - most files in this folder should not need to be altered from site to site 
(except for the media query breakpoints) - this folder should not produce any css
7. Settings - files containing basic style settings for current site that you will probably wish to alter e.g. colour.scss - should not produce any css

To be Added:
A level 0 for 'helpers' folder:
- for example if we want a class that applies the clearfix mixin where we need it applied to different types of components 
and only certain versions of those components we could use a helper class. 
- we could then use it in the html by simply adding '.clearfix' to the html instead of adding clearfix mixin into all components/areas/elements that need it.
- should help with keeping code dry.

Helpers and placeholders/mixins:
1. Always start with the placeholder/mixin - this is where the scss will be maintained
2. All helper classes should inherit their css from an existing mixin/placeholder where possible
3. Only create a helper class if it can be re-usable - if it's only going to be used by one component then maybe add that scss to the component class instead.
- Placeholder/Mixin = used as base styling for a component and seen across all instances of that component - can be used by different types of components.
-- e.g. 5 buttons and 5 images on screen - clearfix placeholder applied to all 10 components - clearfix css seen in source of all 10.
- Helper = used as auxillery styling for exceptional versions of a component - can be used by different types of components.
-- e.g. 5 buttons and 5 images on screen - is-disabled helper class applied to just 1 of the 5 buttons and 1 of the 5 images - is-disabled css appears in source of just those 2 components.

We won't have a sass vendors folder as these files will be loaded in using Yarn at project development time to ensure we get the most up to date versions.

for the above structure I took inspiration from both ITCSS and 7-1 folder structures mainly - but changed the parts I didnt feel comfortable with. I will 
probably add another folder for animations as my animations library grows.

## Rules to Follow:
1. If a mixin has 0 arguments then change it to a placeholder - makes for DRYer CSS.
2. If mixins, functions, and variables are specific to a particluar partial file then consider moving them into that file
3. Never go more then 3 levels deep with our nesting
