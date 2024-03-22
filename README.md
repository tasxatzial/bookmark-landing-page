# Bookmark landing page

A landing page for a bookmarking app.

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158).

## Features

* Tabs pattern (tablist) with automatic activation.
* Accordion pattern. Only one panel is visible at a time.

## Implementation

* Responsive.
* Accessible + screen reader friendly.
* Mobile first approach.

Since I did not have access to the Figma files, I only used the image mockups. This means that my implementation isn't an exact match of the depicted design. I also noticed several inconsistencies and therefore decided to adjust or even change some elements based on what I considered to be the best approach. Specifically:

* The contrast of the main text has been increased.
* The blue background stripes in the first two sections are no longer mirrored, but scale based on the foreground image. This resolves many issues that arise when the layout and/or font size changes, ensuring that the top rounded part of the stripes will never be visible.
* The images in the second section did not have the same dimensions, leading to alignment and positioning issues. Therefore, I decided to edit them so that they all have uniform dimensions. This change made the implementation much easier and more consistent.
* The minimum font size of the non-capitalized text is 1rem. Anything below that is too uncomfortable for viewing the site on mobile devices.
* The 'pricing' navigation link takes us to the main page since there's no corresponding section.

## Dependencies

None. The project uses only HTML, CSS, JavaScript.

## Run locally

Download the 'src' folder and setup a local web server to serve its contents.

## Screenshots

See [screenshots](screenshots/).
