import { Scene } from "phaser";

import { EventBus } from "@/lib/event-bus";
import { GameScenes } from "@/lib/types";

export class MainMenu extends Scene {
  constructor() {
    super(GameScenes.MainMenu);
  }

  create() {
    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    this.scene.stop(GameScenes.MainMenu);
    this.scene.start(GameScenes.Game);
  }
}
