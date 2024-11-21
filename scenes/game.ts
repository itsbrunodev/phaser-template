import { Scene } from "phaser";

import { EventBus } from "@/lib/event-bus";
import { GameScenes } from "@/lib/types";

export class Game extends Scene {
  constructor() {
    super(GameScenes.Game);
  }

  create() {
    EventBus.emit("current-scene-ready", this);
  }

  gameOver() {
    this.scene.switch(GameScenes.GameOver);
  }
}
