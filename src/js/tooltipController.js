import Tooltip from './Tooltip';

export default function tooltipController() {
  const tooltip = new Tooltip();
  const btn = document.querySelector('.btn');

  btn.addEventListener('mouseover', () => {
    tooltip.showTooltip(btn);
  });

  btn.addEventListener('mouseout', () => {
    tooltip.removeTooltip();
  });
}
