import { pins } from '@dsboard/pico';
import { startLightBulb } from "@devicescript/servers";
import { delay, gpio, GPIOMode } from "@devicescript/core"
import { pinMode } from '@devicescript/gpio';
import { setStatusLight } from "@devicescript/runtime"

const led2 = startLightBulb({
  pin: pins.GP16,
});

setInterval(async () => {
  let b, n;

  await setStatusLight(0x00ff00) // green
  b = await led2.intensity.read();
  n = b > 0 ? 0 : 1;
  await led2.intensity.write(n);

  await delay(500)

  await setStatusLight(0x000000) // off
  b = await led2.intensity.read();
  n = b > 0 ? 0 : 1;
  await led2.intensity.write(n);

  await delay(500)
}, 500)
