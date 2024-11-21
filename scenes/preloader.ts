import { Scene } from "phaser";

import { GameScenes } from "@/lib/types";

export class Preloader extends Scene {
  constructor() {
    super(GameScenes.Preloader);
  }

  init() {}

  preload() {}

  create() {
    /**
     * It's often worth creating global objects here that the rest of the game can use.
     * e.g. global animations
     */

    this.scene.start(GameScenes.MainMenu);
  }
}
