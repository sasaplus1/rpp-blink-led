import { delay } from "@devicescript/core";
import { setStatusLight } from "@devicescript/runtime";

setInterval(async () => {
  await setStatusLight(0x00ff00); // green
  await delay(500);
  await setStatusLight(0x000000); // off
  await delay(500);
}, 500);
