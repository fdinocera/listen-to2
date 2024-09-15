import {Component} from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop horizontal wrapping list
 */
@Component({
  selector: 'app-mixed-drag-drop',
  templateUrl: 'mixed.component.html',
  styleUrl: 'mixed.component.css',
  standalone: true,
  imports: [CdkDropList, CdkDrag],
})
export class MixedDragDropExampleComponent {
  items = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}