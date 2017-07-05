import { h } from 'preact';

/**
 * Generates the indv slide slector and arrows
 */
const IndvSelector = function ({slideId, selected, onSlideClick, type}) {
  //arrows prv and next
  if (type) {
    return type === 'first' ? (<div className={'smooth-slider-selector arrow'} onClick={() => onSlideClick('prv', true)}></div>)
                            : (<div className={'smooth-slider-selector arrow'} onClick={() => onSlideClick('next', true)}></div>);
  }
  const selectorSelected = selected ? 'smooth-slider-selector-selected' : '';
  return (
    <div className={'smooth-slider-selector ' + selectorSelected} onClick={() => onSlideClick(slideId, true)}></div>
  );
};

/**
 * Creates the indv childen carousel slides
 * @param {array} children
 */
const SmoothSliderSelector = function (children = []) {
  const self = this;
  children = ['first', ...children, 'last'];
  return children.map(function(item, index, array) {
    if (index === 0 ? 'first' : array.length - 1 === index ? 'last' : false) {
      return IndvSelector({
        onSlideClick: self.onSlideClick.bind(self),
        type: index === 0 ? 'first' : array.length - 1 === index ? 'last' : false
      });
    }
    return IndvSelector({
      slideId: item.attributes.slideId,
      selected: item.attributes.selected,
      onSlideClick: self.onSlideClick.bind(self),
      type: false
    });
  });
};


export default SmoothSliderSelector;

