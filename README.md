Terraform
=========

SASS-based CSS Framework that we use on client projects

Currently in the process of a complete redesign

#1 New Proposed Sass Folder Structure:
1. Pages - This is the folder for page specific changes, files named after pages, e.g. home, about-us.scss - very specific css - should only apply to that page only - if it applies across multiple pages then maybe it should actually be in componemtns/areas section...
2. Components - Small re-usable one html level deep components e.g. buttons - still only using classes - more explicitly named - e.g. product-button{}
3. Areas - lot of people call this type of folder "modules" or "layout" - I prefer 'area' as its more natural language in line with what I actually use when describing things in this folder e.g. the "header area" - other areas include sidebar, footer, nav etc - only use class names - they should be agnostically named, e.g. ui-list{}
4. Elements - basic styling for all html elements e.g. h1, a, li - should be no classes defined in these files - should not see any element selectors used in the folders above this one
5. Base - some boilerplate global scope css for the project - e.g. elements to fix issues with default html browser rendering - normalize.scss -- also rules you expect to follow across sites e.g. setting base font size on html element - should not need to alter much of the scss in these files
6. Utilities - e.g. mixins, functions, variables - most files in this folder should not need to be altered from site to site (except for the media_query file) - this folder should not produce any css
7. Settings - files containing basic style settings for current site that you will probably wish to alter e.g. colour.scss - should not produce any css

layers 6 & 7 should not produce any css
layer 5 is first folder that produces some css 
potentially add a level 0 for helper classes - for example if we want a class that applies the clearfix mixin - we could then use it in the html by simply adding '.clearfix' to the html instead of adding clearfix mixin into all components/areas/elements that need it. personally i think i prefer just adding in the mixin into each sass file and lessening the amount of classes that are adding to the html, but we will see which way is actually more productive and intuitive as we go along

We won't have a sass vendors folder as these files will be loaded in using Yarn at project start time.

for the above structure I took inspiration from both ITCSS and 7-1 folder structures mainly - but changed the parts I didnt feel comfortable with. I will probably add another folder for animations as my animations library grows.

Package Manager Used: Yarn

Principles of the new design:
1. No uneccesary abstractions. i.e. Minimise pre-defined grid components - the new css grid element mostly does away with the need for any framework to structure and implement grids. Only use it where you wish to enfore grid rules with sass helpers for example.
2. Design for the latest browsers - ensures you take advantage of their creative capabilites (h/t Rachel Andrew)
3. Have solid fallbacks in place for old browsers
4. Make it as lightweight and performance focused
5. Utilise OO type folder structure - e.g. 7-1, itcss
6. Focus on simple and intuitive sass naming - simplified version of BEM perhaps
7. Add Animation as a core component
8. Accessibility at the heart
9. Fully responsive Typography
