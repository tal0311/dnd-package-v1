class DragList {
 constructor(list, listSelector) {
  this.list = list;
  this.listSelector = listSelector;
 }

 setEvents() {
  const elList = document.querySelector(this.listSelector);
  elList.addEventListener('dragover', this.handleDragOver.bind(this));
  elList.addEventListener('dragleave', this.handleDragLeave.bind(this));
  elList.addEventListener('dragenter', this.handleDragEnter.bind(this));
  elList.addEventListener('drop', this.handleDrop.bind(this));
  elList.addEventListener('click', this.handleListClick.bind(this));
  elList.addEventListener('dragstart', this.handleDragStart.bind(this));
 }

 handleDragStart(ev) {
  ev.stopPropagation();
  const id = ev.target.dataset.id;
  const item = this.list.items.find(item => item.id === id);
  const data = {
   fromList: this.list.id,
   itemData: item,
  };
  ev.dataTransfer.setData('text', JSON.stringify(data));
 }

 handleDrop(ev) {
  ev.stopPropagation();
  const { fromList, itemData } = JSON.parse(ev.dataTransfer.getData('text'));
  const dragResults = {
   toList: this.list.id,
   fromList,
   itemData,
  };
  return dragResults;
 }

 handleDragEnter(ev, styles) {
  ev.preventDefault();
  ev.stopPropagation();
  this.toggleHover(ev, styles);
 }

 handleDragOver(ev) {
  ev.preventDefault();
  ev.stopPropagation();
 }

 handleDragLeave(ev, styles) {
  ev.preventDefault();
  ev.stopPropagation();
  this.toggleHover(ev, styles);
 }

 toggleHover(ev, styles = 'hover') {
  ev.target.classList.toggle(styles);
 }
}
