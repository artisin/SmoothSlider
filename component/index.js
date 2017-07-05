import get from 'object-get';
import { h, render, Component, cloneElement } from 'preact';
import SmoothSlide from './smooth-slide';
import SmoothSelector from './smooth-selector';

class SmoothSlider extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({
      currentSlide: props.currentSlide || 0,
      slides: props.children.length
    }, this.getProps(get(props, 'children[0]')));
  }

  /**
   * Gets the title and desc to be merged into state
   */
  getProps(props) {
    const defaults = {
      background: null,
      color: null,
      descriptionStyles: null,
      h4Styles: null,
      pStyles: null,
      textStyles: null
    };
    return Object.assign(defaults, get(props, 'attributes'), {
      description: get(props, 'children[0]') || get(props, 'attributes.description')
    });
  }

  /**
   * State action when user click a bottom slide button
   * @param {any} id -> slide id
   * @param {boolean} [click=false] -> if user clicked
   */
  onSlideClick(id, click = false) {
    // if user clicks a slide stop the slideshow
    if (click) { clearInterval(this.slideShowInterval); }
    //next/prv buttons
    if (id === 'next' || id === 'prv') {
      let current = this.state.currentSlide;
      id = id === 'next' ? ++current : --current;
      id = id === -1 ? (this.state.slides - 1) : id >= this.state.slides ? 0 : id;
    }
    // get slide data based on id and set new state with it
    const slide = get(this.props, `children[${id}]`);
    this.setState(Object.assign({}, this.state, {
      currentSlide: id
    }, this.getProps(slide)));
  }

  /**
   * Gets the next slide and changes to that slide - used in the setInterval
   */
  getNextSlide() {
    const nextSlide = this.state.currentSlide < this.state.slides - 1 ? ++this.state.currentSlide : 0;
    this.onSlideClick(nextSlide);
  }

  /**
   * Starts the slideshow
   */
  componentDidMount() {
    // Sets the display to update to the next slide ever x milliseconds
    const time = this.props.interval || 6000;
    this.slideShowInterval = setInterval(this.getNextSlide.bind(this), time);
    this.setState({interval: this.slideShowInterval});
  }
  /**
   * Render that magic
   */
  render() {
    const self = this;
    let count = -1;
    const children = self.props.children.map(function(item) {
      return cloneElement(item, {
        selected: (self.state.currentSlide === ++count ? true : false),
        slideId: count
      });
    });
    const background = self.state.background ? {background: self.state.background} : {};
    const color = self.state.color ? {color: self.state.color} : {};
    let descriptionStyles = self.state.descriptionStyles ? self.state.descriptionStyles : {};
    const textStyles = self.state.textStyles ? self.state.textStyles : {};
    const h4Styles = self.state.h4Styles ? self.state.h4Styles : {};
    const pStyles = self.state.pStyles ? self.state.pStyles : {};
    const h4TextStyles = Object.assign({}, color, textStyles, h4Styles);
    const pTextStyles = Object.assign({}, color, textStyles, pStyles);
    descriptionStyles = Object.assign(background, descriptionStyles);
    return (
      <div className='smooth-slider'>
        <div className='smooth-slider-items'>
          {children}
          <div style={descriptionStyles} className='smooth-slider-title-desc'>
            <h4 style={h4TextStyles}>{self.state.title}</h4>
            <p style={pTextStyles}>{self.state.description}</p>
          </div>
        </div>
        <div className='smooth-slider-selectors'>
          {SmoothSelector.call(this, children)}
        </div>
      </div>
    );
  }
}

export {SmoothSlider, SmoothSlide};
