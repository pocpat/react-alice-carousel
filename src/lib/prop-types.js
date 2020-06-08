import PropTypes from 'prop-types'

export const propTypes = process.env.NODE_ENV === 'development' ? {
  autoHeight: PropTypes.bool,
  autoPlay: PropTypes.bool,
  autoPlayDirection: PropTypes.string,
  autoPlayInterval: PropTypes.number,
  buttonsDisabled: PropTypes.bool,
  children: PropTypes.array,
  controlsStrategy: PropTypes.oneOf(['default', 'responsive']),
  disableAutoPlayOnAction: PropTypes.bool,
  dotsDisabled: PropTypes.bool,
  duration: PropTypes.number,
  fadeOutAnimation: PropTypes.bool,
  infinite: PropTypes.bool,
  items: PropTypes.array,
  keysControlDisabled: PropTypes.bool,
  mouseTrackingEnabled: PropTypes.bool,
  onInitialized: PropTypes.func,
  onResized: PropTypes.func,
  onSlideChange: PropTypes.func,
  onSlideChanged: PropTypes.func,
  playButtonEnabled: PropTypes.bool,
  preventEventOnTouchMove: PropTypes.bool,
  responsive: PropTypes.object,
  shouldHandleResizeEvent: PropTypes.func,
  showSlideInfo: PropTypes.bool,
  slideToIndex: PropTypes.number,
  stagePadding: PropTypes.object,
  startIndex: PropTypes.number,
  stopAutoPlayOnHover: PropTypes.bool,
  swipeDelta: PropTypes.number,
  swipeDisabled: PropTypes.bool,
  touchTrackingEnabled: PropTypes.bool,
  transitionTimingFunction: PropTypes.string,
} : undefined

export const defaultProps = {
  autoHeight: false,
  autoPlay: false,
  autoPlayDirection: 'ltr',
  autoPlayInterval: 250,
  buttonsDisabled: false,
  children: [],
  controlsStrategy: 'default',
  disableAutoPlayOnAction: false,
  dotsDisabled: false,
  duration: 250,
  fadeOutAnimation: false,
  infinite: true,
  items: [],
  keysControlDisabled: false,
  mouseTrackingEnabled: false,
  playButtonEnabled: false,
  preservePosition: false,
  preventEventOnTouchMove: false,
  responsive: {},
  showSlideInfo: false,
  slideToIndex: 0,
  stagePadding: {},
  startIndex: 0,
  stopAutoPlayOnHover: true,
  swipeDisabled: false,
  swipeDelta: 10,
  touchTrackingEnabled: true,
  transitionTimingFunction: 'ease-out',
}
