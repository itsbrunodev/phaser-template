import { useRef } from "react";

import { IRefPhaserGame, PhaserGame } from "@/components/phaser-game";

const controls = [
  {
    key: "Left Click",
    description: "Some action",
  },
] as const;

export function Index() {
  const phaserRef = useRef<IRefPhaserGame | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <div className="flex w-fit flex-col gap-4">
        <PhaserGame ref={phaserRef} />
        <div className="flex gap-12">
          <div className="flex w-fit max-w-72 flex-col gap-2">
            <h1 className="text-sm italic text-zinc-600">Objective</h1>
            <p className="text-justify text-sm">Lorem ipsum.</p>
          </div>
          <div className="flex w-fit flex-col gap-2">
            <h1 className="text-sm italic text-zinc-600">Controls</h1>
            <div className="flex gap-6">
              {controls
                .reduce(
                  (acc, { description, key }) => {
                    const existing = acc.find(
                      (g) => g.description === description
                    );
                    if (existing) {
                      existing.keys.push(key);
                    } else {
                      acc.push({ description, keys: [key] });
                    }
                    return acc;
                  },
                  [] as { description: string; keys: string[] }[]
                )
                .map(({ description, keys }, i) => (
                  <div
                    className="flex items-center gap-2"
                    key={i}
                  >
                    <div className="inline-flex gap-1">
                      {keys.map((key, i) => (
                        <kbd
                          className="rounded-md border border-zinc-300 bg-zinc-200 px-1 py-0 font-mono text-xs font-medium"
                          key={i}
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                    <span className="text-sm">{description}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
