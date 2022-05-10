import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalHandler: number | null = null;
  @Output()
  valueIncremented = new EventEmitter<number>();
  value = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame(): void {
    if (this.intervalHandler === null) {
      this.intervalHandler = setInterval(() => {
        this.value++;
        this.valueIncremented.emit(this.value);
      }, 1000);
    }
  }

  onStopGame(): void {
    clearInterval(this.intervalHandler);
    this.intervalHandler = null;
  }
}
