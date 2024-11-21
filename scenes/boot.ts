import { Scene } from "phaser";

import { GameScenes } from "@/lib/types";

export class Boot extends Scene {
  constructor() {
    super(GameScenes.Boot);
  }

  preload() {
    /**
     * Load the assets for the game, the smaller the file size the better of the assets the better.
     * The boot scene does not have a preloader.
     */
  }

  create() {
    this.scene.start(GameScenes.Preloader);
  }
}
