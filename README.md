Terraform
=========

SASS-based CSS Framework that we use on client projects

Currently in the process of a complete redesign

#1 New Proposed Sass Folder Structure:
1. Pages - This is the folder for page specific changes, files named after pages, e.g. aboutus.scss
2. Components - Small re-usable one html level deep components e.g. buttons
3. Areas - lot of people call this type of folder "modules" or "layout" - I prefer 'area' as its more natural language in line with what I actually use when describing things in this folder e.g. the "header area" - other areas include sidebar, footer, nav etc
4. Elements - basic styling for all html elements e.g. h1, a, li
5. Settings (may rename this, maybe theme?) - files containing basic style settings for current site that you will probably wish to alter e.g. colour.scss
6. Generic (could also be called base or reset) - elements to fix issues with default html browser rendering - e.g. normalize.scss - should be no need to alter any of these files
7. Utilities - e.g. mixins functions - files in this folder should not need to be altered from site to site - this folder should alo not produce any css

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
