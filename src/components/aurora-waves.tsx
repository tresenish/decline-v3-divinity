import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";

const vertex = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uSpeed;
uniform float uGlow;
uniform float uTheme; // 0 = dark, 1 = light

// Multi-color palette using blob colors
vec3 palette(float t) {
    // Colors from home page blobs
    vec3 blue = vec3(0.0, 0.455, 0.851);      // #0074D9
    vec3 cyan = vec3(0.224, 0.8, 0.8);        // #39CCCC
    vec3 red = vec3(1.0, 0.255, 0.212);       // #FF4136
    vec3 orange = vec3(1.0, 0.522, 0.106);    // #FF851B
    vec3 green = vec3(0.239, 0.6, 0.439);     // #3D9970
    vec3 purple = vec3(0.694, 0.051, 0.788);  // #B10DC9

    float tt = fract(t * 0.5 + uTime * 0.1);

    if (tt < 0.25) {
        return mix(blue, cyan, tt * 4.0);
    } else if (tt < 0.5) {
        return mix(cyan, green, (tt - 0.25) * 4.0);
    } else if (tt < 0.75) {
        return mix(green, purple, (tt - 0.5) * 4.0);
    } else {
        return mix(purple, blue, (tt - 0.75) * 4.0);
    }
}

// Multiple flowing waves
float wave(vec2 uv, float freq, float phase) {
    return 0.4 * sin(uv.x * freq + uTime * uSpeed + phase);
}

// Sharp line with minimal falloff
float sharpLine(float d, float thickness) {
    return 1.0 - smoothstep(0.0, thickness, d);
}

void main() {
    vec2 uv = (gl_FragCoord.xy / uResolution.xy) * 2.0 - 1.0;
    uv.x *= uResolution.x / uResolution.y;

    float y = uv.y;

    // Multiple wave lines with different frequencies
    float thickness = 1.0 / uGlow; // Higher glow = thinner lines

    // Wave 1
    float w1 = 0.4 * sin(uv.x * 3.0 + uTime * uSpeed);
    float d1 = abs(y - w1);
    float line1 = sharpLine(d1, thickness);

    // Wave 2
    float w2 = 0.3 * sin(uv.x * 5.0 + uTime * uSpeed + 1.0) + 0.2;
    float d2 = abs(y - w2);
    float line2 = sharpLine(d2, thickness);

    // Wave 3
    float w3 = 0.25 * sin(uv.x * 7.0 + uTime * uSpeed + 2.5) - 0.3;
    float d3 = abs(y - w3);
    float line3 = sharpLine(d3, thickness);

    // Wave 4
    float w4 = 0.35 * sin(uv.x * 4.0 + uTime * uSpeed * 0.8 + 4.0) - 0.1;
    float d4 = abs(y - w4);
    float line4 = sharpLine(d4, thickness);

    // Colors for each wave
    vec3 blue = vec3(0.0, 0.455, 0.851);
    vec3 cyan = vec3(0.224, 0.8, 0.8);
    vec3 green = vec3(0.239, 0.6, 0.439);
    vec3 purple = vec3(0.694, 0.051, 0.788);

    // Background
    vec3 bg = mix(vec3(0.02, 0.02, 0.05), vec3(0.98, 0.98, 0.98), uTheme);

    // Composite waves
    vec3 col = bg;
    col = mix(col, blue, line1);
    col = mix(col, cyan, line2);
    col = mix(col, green, line3);
    col = mix(col, purple, line4);

    gl_FragColor = vec4(col, 1.0);
}
`;

type Props = {
  speed?: number;
  glow?: number;
  theme?: "dark" | "light";
  resolutionScale?: number;
};

export default function AuroraWaves({
  speed = 1.0,
  glow = 15.0,
  theme = "dark",
  resolutionScale = 1.0,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    const parent = canvas.parentElement as HTMLElement;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uSpeed: { value: speed },
        uGlow: { value: glow },
        uTheme: { value: theme === "light" ? 1.0 : 0.0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth,
        h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      program.uniforms.uTime.value = (performance.now() - start) / 1000;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [speed, glow, theme, resolutionScale]);

  return <canvas ref={ref} className="w-full h-full block" />;
}
