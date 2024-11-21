import { Scene } from "phaser";

import { EventBus } from "@/lib/event-bus";
import { GameScenes } from "@/lib/types";

export class GameOver extends Scene {
  constructor() {
    super(GameScenes.GameOver);
  }

  create() {
    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    this.scene.start(GameScenes.MainMenu);
  }
}
