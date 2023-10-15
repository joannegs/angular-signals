import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-signals';

  public count: WritableSignal<number> = signal(0);
  public doubledCount: Signal<number> = computed(() => this.count() * 2);
  public doubleDoubledCount: Signal<number> = computed(() => this.doubledCount() * 2);

  public increment(): void {
    this.count.update(count => count + 1);
  }

  public decrement(): void {
    this.count.update(count => count - 1);
  }

  public setTo10(): void {
    this.count.set(10);
  }
}
