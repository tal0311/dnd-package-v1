# DragList Class

This is a JavaScript class for handling drag and drop events on a list. The class provides methods for handling various events related to dragging and dropping, such as `dragstart`, `dragover`, `dragleave`, `dragenter`, `drop`, and `click`.

## Usage
First, you need to create an instance of the DragList class, passing the list and its selector to the constructor. Then, you can call the setEvents method to attach event listeners to the list.

```
const list = {
  id: 'list-1',
  items: [
    { id: 'item-1', text: 'Item 1' },
    { id: 'item-2', text: 'Item 2' },
    { id: 'item-3', text: 'Item 3' }
  ]
}
const listSelector = '#list-1'

const dragList = new DragList(list, listSelector)
dragList.setEvents()

```

## Methods
onDragStart(ev)
This method is called when a list item starts being dragged. It sets the data for the drag operation in the `dataTransfer` property of the event object.

### onDrop(ev)
This method is called when a list item is dropped on another list. It retrieves the data for the drag operation from the dataTransfer property of the event object and returns the result of the drag operation as an object.

### ondragenter(ev, styles)
This method is called when a list item enters another list while being dragged. It prevents the default behavior of the event, stops event propagation, and toggles the hover class on the target element.

### onDragOver(ev)
This method is called when a list item is being dragged over another list. It prevents the default behavior of the event and stops event propagation.

### ondragleave(ev)
This method is called when a list item leaves another list while being dragged. It prevents the default behavior of the event, stops event propagation, and toggles the hover class on the target element.

### toggleHover(ev, styles = 'hover')
This method toggles the specified class on the target element. It is used by the ondragenter and `ondragleave` methods to add and remove the hover class on the target element.

## Conclusion
The DragList class provides a simple and flexible way to handle drag and drop events on a list. You can use it as a starting point for building more complex drag and drop interactions, or customize it to fit your specific needs.