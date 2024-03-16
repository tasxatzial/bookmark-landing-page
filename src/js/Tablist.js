export default class Tablist {
  constructor(tabsContainer) {
    this.tabs = Array.from(tabsContainer.querySelectorAll('[role=tab]'));
    this.tabpanels = this.tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    this.openTabIndex = null;
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].getAttribute('aria-selected') === 'true') {
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
    this.tabs[this.openTabIndex].setAttribute('aria-selected', 'false');
    this.tabs[this.openTabIndex].tabIndex = -1;
    this.tabpanels[this.openTabIndex].setAttribute('hidden', '');
    this.tabs[selectedTabIndex].setAttribute('aria-selected', 'true');
    this.tabs[selectedTabIndex].removeAttribute('tabindex');
    this.tabpanels[selectedTabIndex].removeAttribute('hidden');
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
    const selectedTabIndex = this.tabs.indexOf(tab);
    const newTabIndex = (e.key === 'ArrowLeft')
                        ? (selectedTabIndex - 1 + this.tabs.length) % this.tabs.length
                        : (selectedTabIndex + 1) % this.tabs.length;
    this.selectTab(newTabIndex);
    this.tabs[newTabIndex].focus();
    e.preventDefault();
  }

  onClick(e) {
    console.log(1)
    const tab = e.target.closest('button');
    if (!tab) {
      return;
    }
    const selectedTabIndex = this.tabs.indexOf(tab);
    if (selectedTabIndex !== this.openTabIndex) {
      this.selectTab(selectedTabIndex);
    }
  }
}
