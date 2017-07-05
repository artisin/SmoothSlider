import { h } from 'preact';

const SmoothSlider = function ({selected, img}) {
  return (
    <div className={'smooth-slider-slide ' + (selected ? 'smooth-slider-slide-selected' : '')}>
      <img src={img} />
    </div>
  );
};

export default SmoothSlider;
