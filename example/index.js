//base styles
import styles from './base.ctr.js';
import { h, render } from 'preact';
import { SmoothSlider, SmoothSlide } from 'smoothslider';

//custom desciption styles other than background
const customDescriptionStyles = {
  right: 0,
  opacity: 0.6,
  transform: 'translateX(100%)'
};
const app = (
  <SmoothSlider>
    <SmoothSlide
      img={require('./imgs/thumbs-up-1.jpeg')}
      title='Smooth Slider'
      background='#eee'
      color='#9b59b6'>
      {'Sometimes you need a smooth, simple, slider.'}
    </SmoothSlide>
    <SmoothSlide
      img={require('./imgs/thumbs-up-2.jpeg')}
      descriptionStyles={customDescriptionStyles}
      title='It is Simple'>
      {'No need to complicate things'}
    </SmoothSlide>
    <SmoothSlide
      img={require('./imgs/thumbs-up-3.jpeg')}
      title='Slide on'
      background='rgba(0, 0, 0, 0.6)'
      description='Hope you find it of some use'>
    </SmoothSlide>
  </SmoothSlider>
);

render(app, document.getElementById('app'));
