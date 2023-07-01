export default class Draw {
  constructor(container) {
    this.container = container;
    this.title = 'Popover title';
    this.message = 'And here\'s some amazing content. It\'s very engaging. Right?';
  }

  drawUI() {
    const form = document.createElement('div');
    form.innerHTML = `
          <form class="widget-form" novalidate>
              <div class="widget-control">
                  <input name="input" id="input" class="input" type="text" placeholder="Some text to enter..." required>
              </div>
              <div>
                  <button type="submit" class="btn">Click to toggle popover</button>
              </div>
          </form>    
          `;
    this.container.appendChild(form);
  }

  drawTooltip() {
    const tooltipElement = document.createElement('div');

    tooltipElement.classList.add('tooltip', 'hidden');

    document.body.appendChild(tooltipElement);

    const tooltipTitle = document.createElement('div');
    tooltipTitle.classList.add('tooltip-title');
    tooltipTitle.textContent = this.title;
    tooltipElement.appendChild(tooltipTitle);

    const tooltipMessage = document.createElement('div');
    tooltipMessage.classList.add('tooltip-message');
    tooltipMessage.textContent = this.message;
    tooltipElement.appendChild(tooltipMessage);

    const btn = document.querySelector('.btn');
    const { left, top } = btn.getBoundingClientRect();

    tooltipElement.style.left = `${left}px`;
    tooltipElement.style.top = `${top - 80}px`;
  }

  showTooltip() {
    const tooltipElement = document.querySelector('.tooltip');
    tooltipElement.classList.remove('hidden');
  }

  closeTooltip() {
    const tooltipElement = document.querySelector('.tooltip');
    tooltipElement.classList.add('hidden');
  }
}
