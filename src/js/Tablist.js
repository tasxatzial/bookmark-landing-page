export default class Tablist {
  constructor(tabsContainer) {
    this.tabs = Array.from(tabsContainer.querySelectorAll('[role=tab]'));
    this.tabpanels = this.tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    this.selectedTab = this.tabs.filter(tab => tab.getAttribute('aria-selected') === 'true')[0];
    tabsContainer.addEventListener('keydown', this.onKeyDown.bind(this));
    tabsContainer.addEventListener('click', this.onClick.bind(this));
  }

  selectTab(tab) {
    this.selectedTab.setAttribute('aria-selected', 'false');
    this.selectedTab.tabIndex = -1;
    this.tabpanels[this.selectedTab.getAttribute('data-index')].setAttribute('hidden', '');
    tab.setAttribute('aria-selected', 'true');
    tab.removeAttribute('tabindex');
    this.tabpanels[tab.getAttribute('data-index')].removeAttribute('hidden');
    this.selectedTab = tab;
  }

  onKeyDown(e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      return;
    }
    const tab = e.target.closest('button');
    if (!tab) {
      return;
    }
    const tabIndex = tab.getAttribute('data-index');
    const newTabIndex = (e.key === 'ArrowLeft')
                        ? (tabIndex - 1 + this.tabs.length) % this.tabs.length
                        : (tabIndex + 1) % this.tabs.length;
    this.selectTab(this.tabs[newTabIndex]);
    this.tabs[newTabIndex].focus();
    e.preventDefault();
  }

  onClick(e) {
    const tab = e.target.closest('button');
    if (!tab) {
      return;
    }
    if (tab !== this.selectedTab) {
      this.selectTab(tab);
    }
  }
}
