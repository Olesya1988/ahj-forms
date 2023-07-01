import Draw from './Draw';

export default class Tooltip {
  constructor(container) {
    this.container = container;
    this.draw = new Draw(this.container);
  }

  init() {
    this.draw.drawUI();
    this.draw.drawTooltip();
    this.bindToDOM();
  }

  bindToDOM() {
    document.addEventListener('mouseover', this.mouseover.bind(this));
  }

  mouseover(e) {
    const { target } = e;

    if (target.classList.contains('btn')) {
      this.draw.showTooltip();
    } else {
      this.draw.closeTooltip();
    }
  }
}
