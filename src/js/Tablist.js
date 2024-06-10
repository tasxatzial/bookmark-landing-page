export default class Tablist {
  constructor(tabsContainer) {
    this.tabButtons = Array.from(tabsContainer.querySelectorAll('button'));
    this.tabPanels = this.tabButtons.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    this.openTabIndex = null;
    for (let i = 0; i < this.tabButtons.length; i++) {
      if (this.tabButtons[i].getAttribute('aria-selected') === 'true') {
        this.openTabIndex = i;
        break;
      }
    }
    if (this.openTabIndex == null) {
      throw new Error('No open tab found');
    }
    tabsContainer.addEventListener('keydown', this.onKeyDown.bind(this));
    tabsContainer.addEventListener('click', this.onClick.bind(this));
  }

  selectTab(selectedTabIndex) {
    this.tabButtons[this.openTabIndex].setAttribute('aria-selected', 'false');
    this.tabButtons[this.openTabIndex].tabIndex = -1;
    this.tabPanels[this.openTabIndex].setAttribute('hidden', '');
    this.tabButtons[selectedTabIndex].setAttribute('aria-selected', 'true');
    this.tabButtons[selectedTabIndex].removeAttribute('tabindex');
    this.tabPanels[selectedTabIndex].removeAttribute('hidden');
    this.openTabIndex = selectedTabIndex;
  }

  onKeyDown(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      return;
    }
    const tab = e.target.closest('button');
    if (!tab) {
      return;
    }
    const selectedTabIndex = this.tabButtons.indexOf(tab);
    const newTabIndex = (e.key === 'ArrowLeft')
                        ? (selectedTabIndex - 1 + this.tabButtons.length) % this.tabButtons.length
                        : (selectedTabIndex + 1) % this.tabButtons.length;
    this.selectTab(newTabIndex);
    this.tabButtons[newTabIndex].focus();
    e.preventDefault();
  }

  onClick(e) {
    const tab = e.target.closest('button');
    if (!tab) {
      return;
    }
    const selectedTabIndex = this.tabButtons.indexOf(tab);
    if (selectedTabIndex !== this.openTabIndex) {
      this.selectTab(selectedTabIndex);
    }
  }
}
