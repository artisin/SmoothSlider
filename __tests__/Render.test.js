import { h, render } from 'preact';
import chai, { expect, options } from 'chai';
import assertJsx from 'preact-jsx-chai';
import { SmoothSlider, SmoothSlide } from 'smoothslider';

// activate the JSX assertion extension:
chai.use(assertJsx);

let component = null;
const app = (
  <SmoothSlider interval={500} ref={ref => component = ref}>
    <SmoothSlide
      img={require('./imgs/thumbs-up-1.jpeg')}
      title='Smooth Slider'
      background='#eee'
      color='#9b59b6'>
      {'Sometimes you need a smooth, simple, slider.'}
    </SmoothSlide>
    <SmoothSlide
      img={require('./imgs/thumbs-up-2.jpeg')}
      title='It is Simple'>
      {'No need to complicate things'}
    </SmoothSlide>
  </SmoothSlider>
);

it('should renders without crashing', () => {
  const div = document.createElement('div');
  render(app, div);
});

it('should have 2 slides', () => {
  expect(component.state.slides).to.equal(2);
});

it('Should have h4 tags', () => {
  expect(app).to.contain(<h4 style="color: #9b59b6;">Smooth Slider</h4>);
});

it('should have p desc', () => {
  expect(app).to.contain(<p style="color: #9b59b6;">Sometimes you need a smooth, simple, slider.</p>);
});

it('should change slides', () => {
  expect(component.state.currentSlide).to.equal(0);
  // Not sure why jest is not mocking the timer - have to use settimeout
  // jest.useFakeTimers();
  // jest.setTimeout(8000);
  return new Promise(function (res) {
    setTimeout(function () {
      expect(component.state.currentSlide).to.equal(1);
      expect(component.state.background).to.equal(null);
      expect(component.state.color).to.equal(null);
      expect(component.state.title).to.equal('It is Simple');
      expect(component.state.description).to.equal('No need to complicate things');
      res();
    }, 600);
  });
});
