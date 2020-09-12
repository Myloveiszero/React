import hammer from 'hammerjs';
export default function WebPullToRefresh() {
  var defaults = {
    bodyEl: document.body,  // 最外层盒子u
    contentEl: null,       // 内容区域
    ptrEl: null,            // loading
    distance: 40,           //下拉距离
    loadingFunction: () => {},    // 返回 Promise
    resistance: 2.5        // 阻尼  100px / 2.5
  }
  function init(options) {
    options = {
      ...defaults,
      ...options
    }
    const h = new hammer(options.contentEl);

    h.get('pan').set({direction: hammer.DIRECTION_VERTICAL});
    h.on('panstart', _panStart);
    h.on('pandown', _panDown);
    h.on('panup', _panUp);
    h.on('panend', _panEnd);

    const ptrClass = options.ptrEl.classList;
    let pan = {};

    function _panStart() {
        ptrClass.add('ptr-start');
    };

    function _panDown(e) {
        // console.log('PULL DOWN');
        pan.distance = e.distance / options.resistance;
        _setContentPan();
    };

    function _panUp(e) {
        pan.distance = e.distance / options.resistance;
        _setContentPan();
    };

    function _panEnd() {
        if(ptrClass.contains('ptr-refresh')) {
            _loading();
        }else {
            _reset();
        }
    };

    function _loading() {
        options.contentEl.style.transform = `translate3d(0, 55px, 0)`;
        options.ptrEl.style.transform = `translate3d(0, 55px, 0)`;
        options.loadingFunction().then(() => {

            _reset();
        })
    };

    function _reset() {
        options.contentEl.style.transform = `translate3d(0, 0px, 0)`;
        options.ptrEl.style.transform = `translate3d(0, 0px, 0)`;
       
    };

    function _setContentPan() {
        options.contentEl.style.transform = `translate3d(0, ${pan.distance}px, 0)`;
        options.ptrEl.style.transform = `translate3d(0, ${pan.distance}px, 0)`;
        if(pan.distance > options.distance) {
            ptrClass.add('ptr-refresh');
        }else {
            ptrClass.remove('ptr-refresh');
        }
    };

  }
  return {
    init
  }
}