export default function buildWidget() {
  const widget = document.querySelector('.widget');
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
  widget.appendChild(form);
}
