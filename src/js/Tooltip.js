export default class Tooltip {
  constructor() {
    this.title = 'Popover title';
    this.message = 'And here\'s some amazing content. It\'s very engaging. Right?';
  }

  showTooltip(element) {
    const tooltipElement = document.createElement('div');

    tooltipElement.classList.add('tooltip');

    document.body.appendChild(tooltipElement);

    const tooltipTitle = document.createElement('div');
    tooltipTitle.classList.add('tooltip-title');
    tooltipTitle.textContent = this.title;
    tooltipElement.appendChild(tooltipTitle);

    const tooltipMessage = document.createElement('div');
    tooltipMessage.classList.add('tooltip-message');
    tooltipMessage.textContent = this.message;
    tooltipElement.appendChild(tooltipMessage);

    const { left, top } = element.getBoundingClientRect();

    tooltipElement.style.left = `${left + (element.offsetWidth / 2) - (tooltipElement.offsetWidth / 2)}px`;
    tooltipElement.style.top = `${top - 90}px`;
  }

  // eslint-disable-next-line
  removeTooltip() {
    document.querySelector('.tooltip').remove();
  }
}
