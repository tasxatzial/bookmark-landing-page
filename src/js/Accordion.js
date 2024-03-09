export default class Accordion {
  constructor(container) {
    const buttonsEl = container.querySelectorAll('[aria-controls]');
    this.buttons = new Map();
    buttonsEl.forEach(button => {
      this.buttons.set(button, document.getElementById(button.getAttribute('aria-controls')));
    });
    this.openButton = null;
    container.addEventListener('click', this.onClick.bind(this));
  }

  _openPanel(button) {
    button.setAttribute('aria-expanded', 'true');
    this.buttons.get(button).removeAttribute('hidden');
  }

  _closePanel(button) {
    button.setAttribute('aria-expanded', 'false');
    this.buttons.get(button).setAttribute('hidden', '');
  }

  isPanelOpen(button) {
    return button.getAttribute('aria-expanded') === 'true'
  }

  onClick(e) {
    const button = e.target.closest('button');
    if (!button || !button.getAttribute('aria-controls')) {
      return;
    }
    if (this.isPanelOpen(button)) {
      this._closePanel(button);
      this.openButton = null;
    }
    else {
      if (this.openButton) {
        this._closePanel(this.openButton);
      }
      this._openPanel(button);
      this.openButton = button;
    }
  }
}
