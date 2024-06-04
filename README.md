# Bookmark landing page

A landing page for a bookmarking app.

This is a challenge from [Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).

## Features

* Tabs pattern (tablist) with automatic activation.
* Accordion pattern. Only one panel is visible at a time.

## Implementation

* Responsive.
* Accessible + screen reader friendly.
* Mobile first approach.

The implementation isn't an exact match of the depicted design, mainly because I had no access to the Figma files, and partly because there are several design inconsistencies. Therefore, I decided to adjust or even change some elements based on what I considered to be the best approach. Here's a non-exhaustive list:

* The contrast of the main text has been increased.
* The blue background stripes in the first two sections are not mirrored, but their size is based on the foreground image. This resolves many issues that arise when the layout and/or font size changes, ensuring that the top rounded part of the stripes will never be visible.
* The images in the second section did not have the same dimensions, leading to alignment and positioning issues. Therefore, I decided to edit them so that they all have uniform dimensions. This change made the implementation much easier and more consistent.
* There is no section associated with the 'pricing' navigation link, so it currently does nothing.
* The image in the first section is aligned just like the rest of the elements along the same vertical axis. It's not perfectly aligned though since the image also has an almost invisible shadow.
* The hamburger icon size has been increased because it was too small.
* Due to various spacing adjustments, the overall height of the page has been decreased.

Other changes:

* The svg icons have been combined into a single svg to reduce the number of network requests.

## Dependencies

None. The project uses only HTML, CSS, JavaScript.

## Run locally

Download the 'src' folder and setup a local web server to serve its contents.

## Screenshots

See [screenshots](screenshots/).
