These are some additional themes I put together for [AnythingSlider](http://css-tricks.github.com/AnythingSlider/)

See them on the [AnythingSlider Theme Demo Page](http://css-tricks.github.com/AnythingSlider-Themes/)

## Page Header

```html
<!-- jQuery (required) -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js"></script>

<!-- wrapper css, grab the desired css from the file - no need to use the whole thing -->
<link rel="stylesheet" href="css/wrappers.css">

<!-- Add the stylesheet you are going to use here; no need to include the anythingslider.css from the plugin -->
<link rel="stylesheet" href="css/theme-default1.css">

<!-- Older IE stylesheet, to reposition navigation arrows, added AFTER the theme stylesheet -->
<!--[if lte IE 7]>
<link rel="stylesheet" href="css/anythingslider-ie.css" type="text/css" media="screen" />
<![endif]-->

<!-- AnythingSlider -->
<script src="js/jquery.anythingslider.min.js"></script>
<!-- Optional extension -->
<script src="js/jquery.anythingslider.fx.min.js"></script>
```

## HTML

```html
<!-- change the #wrapper class to whatever you want if you use the entire wrappers.css file -->
<div id="wrapper" class="glass">

  <ul id="slider">
    <li><img alt="" src="1.jpg"></li>
    <li><img alt="" src="2.jpg"></li>
    <li><img alt="" src="3.jpg"></li>
    <li><img alt="" src="4.jpg"></li>
  </ul>

</div>
```

## Wrapper

* The Wrapper images are not part of the AnythingSlider theme files and were included to provide some different backdrops in which to view the themes.
* Please feel free to use the background images how ever you want - Where applicable, I used public domain images. 
* All wrapper css is contained in the wrapper.css file.

## Slider Images

* All slider images are copyright Rob Macklin Photography and are used with his permission.
* So, if you love the slider image(s) and want to get a copy, please don't steal it, contact him via his Flickr account: [riverboy777](http://www.flickr.com/photos/29247222@N08/)!

## Theme notes

* **OVERALL** - These theme files are independent of the "anythingslider.css" file of the plugin. If you use one of the themes below, you only need to include it.
* **Default (no images/css3)** - This theme was made as a base to build your own theme on. It doesn't use any images or css3.
* **Default (with images/css3)** - Yes, this theme sucks... I didn't put a lot of effort into it but as I a second default theme, it was made to be used as a base model to build your own theme from :)
* **Mini Dark** - The arrows are really hard to see, I know. I tried to add a glowy effect, but it just didn't look good to me. I'd recommend using this theme if you have a lot of light colored background images.
* **Mini Light** - A little easier to see on dark background images ;)
* **Office** - paperclips and thumb tacks... what else can I say.
* **Polished** - I should have named this brushed aluminum, but the name was just too long and I like being lazy :P
* **Ribbon** - Yeah, I know it's a metallic ribbon... if I was better at photoshop, I'd make it more silky, oh well.
* **Shiny** - I like shiny stuff :P
* **Simple** - Thanks to [larmarange](https://github.com/larmarange) for contributing this theme!
* **Tabs Light** - I really like this theme, but doesn't work too well when the slider's `navigationSize` option is set... the tabs don't fit inside of the navigation block because of the absolutely positioned span it needs. I'll need to modify the Slider code itself to account for this - when I get a chance.
* **Tabs Dark** - This theme has the same problem when setting the `navigationSize` option.

## Contribute

* If you would like to fix a theme or contribute a new theme, then fork this repository, add your theme and send me a pull request.
* Or you could just email me the files and I'll add it.

## Change Log

### Version 1.4.2

* Set all panel z-indexes to zero, active page to one to fix AnythingSlider [issue #447](https://github.com/CSS-Tricks/AnythingSlider/issues/447).

### Version 1.4.1

* Added Simple theme thanks to [larmarange](https://github.com/larmarange)!

### Version 1.4

* Removed max-width from css as the latest version of Opera (11.60+) no longer appears to have that limitation.
* Updated to work with AnythingSlider v1.8+ (fade mode)
* Changed links to point to css-tricks

### Version 1.3

* Updated css files to prevent problems with using the navigation in IE8, as per AnythingSlider [issue #206](https://github.com/CSS-Tricks/AnythingSlider/issues/206). Even though it doesn't appear to be a problem, better to make the change anyway :P

### Version 1.2

* Added overflow properties to every theme to prevent the flash of unstyled content (FOUC).
* Added a note that these themes will work independent of the "anythingslider.css" file - you only need the theme file from here to make the theme work.

### Version 1.1

* Updated tabs-light and tabs-dark themes by removing the navigation width, the update to AnythingSlider (v1.7.12+) should better calculate the tab widths now.

### Version 1.0

* Initial commit