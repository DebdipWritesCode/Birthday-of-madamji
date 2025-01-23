import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import { loadFull } from "tsparticles"
import heartSvg from "../assets/heart.svg";
import bgImage from "../assets/bg.jpg"

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            autoPlay: true,
            background: {
              image: `url(${bgImage})`,
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 1,
            },
            backgroundMask: {
              composite: "destination-out",
              cover: { opacity: 1, color: { value: "" } },
              enable: false,
            },
            clear: true,
            defaultThemes: {},
            delay: 0,
            fullScreen: { enable: true, zIndex: -1 },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: { enable: true, mode: "push" },
                // onDiv: {
                //   selectors: {},
                //   enable: false,
                //   mode: {},
                //   type: "circle",
                // },
                onHover: {
                  enable: true,
                  mode: "connect",
                  parallax: { enable: false, force: 2, smooth: 10 },
                },
                resize: { delay: 0.5, enable: true },
              },
              modes: {
                trail: { delay: 1, pauseOnStop: false, quantity: 1 },
                attract: {
                  distance: 200,
                  duration: 0.4,
                  easing: "ease-out-quad",
                  factor: 1,
                  maxSpeed: 50,
                  speed: 1,
                },
                bounce: { distance: 200 },
                bubble: {
                  distance: 400,
                  duration: 2,
                  mix: false,
                  opacity: 0.8,
                  size: 1000,
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: {},
                  },
                },
                connect: {
                  distance: 300,
                  links: { opacity: 0.5 },
                  radius: 120,
                },
                grab: {
                  distance: 400,
                  links: { blink: false, consent: false, opacity: 1 },
                },
                push: { default: true, groups: [], quantity: 4 },
                remove: { quantity: 2 },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: "ease-out-quad",
                  divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: {},
                  },
                },
                slow: { factor: 3, radius: 200 },
                particle: {
                  replaceCursor: false,
                  pauseOnStop: false,
                  stopDelay: 0,
                },
                light: {
                  area: {
                    gradient: {
                      start: { value: "#ffffff" },
                      stop: { value: "#000000" },
                    },
                    radius: 1000,
                  },
                  shadow: { color: { value: "#fff" }, length: 3000 },
                },
              },
            },
            manualParticles: [],
            particles: {
              bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
              collisions: {
                absorb: { speed: 2 },
                bounce: { horizontal: { value: 1 }, vertical: { value: 1 } },
                enable: false,
                maxSpeed: 50,
                mode: "bounce",
                overlap: { enable: true, retries: 0 },
              },
              color: {
                value: "#f494ef66",
                animation: {
                  h: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  s: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                  l: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    delay: 0,
                    sync: true,
                    offset: 0,
                  },
                },
              },
              effect: { close: true, fill: true, options: {} },
              groups: {},
              move: {
                angle: { offset: 0, value: 90 },
                attract: {
                  distance: 200,
                  enable: false,
                  rotate: { x: 3000, y: 3000 },
                },
                center: { x: 50, y: 50, mode: "percent", radius: 0 },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                gravity: {
                  acceleration: 9.81,
                  enable: false,
                  inverse: false,
                  maxSpeed: 50,
                },
                path: {
                  clamp: true,
                  delay: { value: 0 },
                  enable: false,
                  options: {},
                },
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: false,
                size: false,
                speed: 3,
                spin: { acceleration: 0, enable: false },
                straight: true,
                trail: { enable: false, length: 10, fill: {} },
                vibrate: false,
                warp: false,
              },
              number: {
                density: { enable: true, width: 1920, height: 1080 },
                limit: { mode: "delete", value: 50 },
                value: 300,
              },
              opacity: {
                value: 0.5,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 2,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              reduceDuplicates: false,
              shadow: {
                blur: 0,
                color: { value: "#000" },
                enable: false,
                offset: { x: 0, y: 0 },
              },
              shape: { close: true, fill: false, options: {
                image:  { src: heartSvg  }
              }, type: "image" },
              size: {
                value: 30,
                animation: {
                  count: 0,
                  enable: false,
                  speed: 5,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              stroke: {
                width: 10,
                color: {
                  value: "#7a0078",
                  animation: {
                    h: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 20,
                      delay: 0,
                      sync: true,
                      offset: 0,
                    },
                    s: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: true,
                      offset: 0,
                    },
                    l: {
                      count: 0,
                      enable: false,
                      speed: 1,
                      decay: 0,
                      delay: 0,
                      sync: true,
                      offset: 0,
                    },
                  },
                },
              },
              zIndex: {
                value: 0,
                opacityRate: 1,
                sizeRate: 1,
                velocityRate: 1,
              },
              destroy: {
                bounds: {},
                mode: "none",
                split: {
                  count: 1,
                  factor: { value: 3 },
                  rate: { value: { min: 4, max: 9 } },
                  sizeOffset: true,
                  particles: {},
                },
              },
              roll: {
                darken: { enable: false, value: 0 },
                enable: false,
                enlighten: { enable: false, value: 0 },
                mode: "vertical",
                speed: 25,
              },
              tilt: {
                value: 0,
                animation: { enable: false, speed: 0, decay: 0, sync: false },
                direction: "clockwise",
                enable: false,
              },
              twinkle: {
                lines: { enable: false, frequency: 0.05, opacity: 1 },
                particles: { enable: false, frequency: 0.05, opacity: 1 },
              },
              wobble: {
                distance: 5,
                enable: false,
                speed: { angle: 50, move: 10 },
              },
              life: {
                count: 0,
                delay: { value: 0, sync: false },
                duration: { value: 0, sync: false },
              },
              rotate: {
                value: 50,
                animation: { enable: true, speed: 10, decay: 0, sync: false },
                direction: "clockwise",
                path: true,
              },
              orbit: {
                animation: {
                  count: 0,
                  enable: false,
                  speed: 1,
                  decay: 0,
                  delay: 0,
                  sync: false,
                },
                enable: false,
                opacity: 1,
                rotation: { value: 45 },
                width: 1,
              },
              links: {
                blink: false,
                color: { value: "#ffffff" },
                consent: false,
                distance: 350,
                enable: false,
                frequency: 1,
                opacity: 0.8,
                shadow: { blur: 5, color: { value: "#000" }, enable: true},
                triangles: { enable: false, frequency: 1 },
                width: 5,
                warp: false,
              },
              repulse: {
                value: 0,
                enabled: false,
                distance: 1,
                duration: 1,
                factor: 1,
                speed: 1,
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            responsive: [],
            smooth: false,
            style: {},
            themes: [],
            zLayers: 100,
            key: "connect",
            name: "Connect",
            motion: { disable: false, reduce: { factor: 4, value: true } },
          }}></Particles>
      )}
    </div>
  );
};

export default Background;
