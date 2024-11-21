import { AUTO, Game } from "phaser";

import { Boot } from "@/scenes/boot";
import { Game as MainGame } from "@/scenes/game";
import { GameOver } from "@/scenes/game-over";
import { MainMenu } from "@/scenes/main-menu";
import { Preloader } from "@/scenes/preloader";

export const PHASER_CONFIG = {
  type: AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  backgroundColor: "#028af8",
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scene: [Boot, Preloader, MainMenu, MainGame, GameOver],
} as const satisfies Phaser.Types.Core.GameConfig;

export function StartGame(parent: string) {
  return new Game({ ...PHASER_CONFIG, parent });
}
