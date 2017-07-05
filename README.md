# SmoothSlider → A Preact Carousel Slider

[![npm](https://img.shields.io/npm/l/smoothslider.svg)](https://github.com/artisin/SmoothSlider/blob/master/LICENSE.txt)
[![npm](https://img.shields.io/npm/v/smoothslider.svg)](https://www.npmjs.com/package/SmoothSlider)
[![wercker status](https://app.wercker.com/status/a5cd2c460ebd46869b203308802dc50e/s/master "wercker status")](https://app.wercker.com/project/byKey/a5cd2c460ebd46869b203308802dc50e)
[![David](https://img.shields.io/david/artisin/SmoothSlider.svg)](https://github.com/artisin/SmoothSlider/blob/master/package.json)

<p align="center">
  <img src="https://media.giphy.com/media/3o7btW63p3L2au0g4E/giphy.gif" width="450"/>
</p>
<p align="center">
  <a href="https://artisin.github.io/SmoothSlider/">Online Demo</a>
</p>


## Description

A fully responsive and simply smooth carousel slider for Preact for when you need a small 3kB alternative to React. SmoothSlider also comes prepacked with ctr that makes configuring the CSS a trivially quick matter. I created SmoothSlider as an alternative to the many bloated Jquery and hackey Javascript sliders. It’s a perfect fit if you want a simple, small, and configurable slider in your primarily HTML or Preact project.

## Project Setup

You must configure and install Preact along with the jsx global pragma for babel to use SmoothSlider. Setting up both these assets is straight forward especially if you are familiar with React/Preact projects. If not, I recommend you give it a shot particularly if you're already using Babel. Check out Preact's setup documentation [here](https://preactjs.com/guide/getting-started) to get more information.


## General Install

You can download and install the SmoothSlider component via npm of manually by cloning/downloading this repository.

```bash
   # npm install
   yarn add smoothslider
```

```bash
   # github download
   git clone https://github.com/artisin/SmoothSlider
```

## JavaScript Use

SmoothSlider has two import components and you will have to import both of them. The first is `SmoothSlider`, this component is the slider container and logic that configures the buttons, interval time, click events, and the other logic needed to use the Slider. The second component is the `SmoothSlide` which handles the individual logic for each slide of the slider.

__`SmoothSlider` Props__

+ `interval={<num>}` → Time interval to change to the next slide in milliseconds - the default is `6000`.
+ `currentSlide={<num>}` → The starting slide, which starts at `0` and is the default. If you want you the slider to start on the second slide use `1`.

__`SmoothSlide` Props__

+ `img={<...>}` → Your image asset or path depending on you build pipeline.
+ `title={<str>}` → The title (h4) description for the slide in question.
+ `description={<str>}` → The text (p) description for the slide in question. You can also place within the component to take advantage of the default description property.
+ `background={<str>}` → A custom background style value for a specific slide otherwise it defaults to the set CSS
+ `color={<str>}` → Custom color style value for a specific slide that targets both the title and description otherwise it defaults to the set CSS
+ `descriptionStyles={<obj>}` → Custom styles for a specific description slide
+ `textStyles={<obj>}` → Custom styles for the text, both the title and description for a specific slide
+ `h4Styles={<obj>}` → Custom styles for the title (h4) for a specific slide
+ `pStyles={<obj>}` → Custom styles for the description (p) for a specific slide



```js
// Import Preact and SmoothSlider, SmoothSlide assets
import { h, render } from 'preact';
import { SmoothSlider, SmoothSlide } from 'smoothslider';
//css assets (npm install)
//import 'SmoothSlider/component/styles.css';

//custom desciption styles other than background
const customDescriptionStyles = {
  right: 0,
  opacity: 0.6,
  transform: 'translateX(100%)'
};
const app = (
  <SmoothSlider>
    <SmoothSlide
      img={require('./my/img/path.jpeg')}
      title='Smooth Slider'>
      {'Sometimes you need a smooth, simple, slider.'}
    </SmoothSlide>
    <SmoothSlide
      img={require('./my/img/path.jpeg')}
      title='It is Simple'
      descriptionStyles={customDescriptionStyles}>
      {'No need to complicate things'}
    </SmoothSlide>
    <SmoothSlide
      img={require('./my/img/path.jpeg')}
      title='Slide on'
      background='#eee'
      color='#9b59b6'
      description='Hope you find it of some use'>
    </SmoothSlide>
  </SmoothSlider>
);

render(app, document.getElementById('app'));
```


## CSS ([`ctr`](https://docs.ctr-lang.com)) Use

If you like the default styles you can just copy/paste the CSS styles that are located inside the SmoothSlider directory into your project. If you wish to easly customize the CSS you can do so through the `styles.ctr.yml` file, but to do so you either have to set up the [`ctr-loader`](https://github.com/ctr-lang/ctr-loader) in your project via webpack. Or make your desired changes in by cloning this project and running the example. If you wish to do the latter just follow the below instructions.


```bash
   git clone https://github.com/artisin/SmoothSlider
   cd SmoothSlider
   yarn install
   yarn run dev
```

After you run `yarn run dev` it will boot up the example project. From here you can make your changes inside the `example/` directory to the `styles.ctr.yml`. For example to if you want to change the base accent color find and change the `accent: '#da6a6a'` key/pair value inside `styles.ctr.yml` and ctr will automatically change all the values for you. If your happy with the results just copy/paste the resulting `style.css` file located in the `example-build/` directory.

---

Best, te
