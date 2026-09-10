# WebGL Weekly 5

A small Three.js lighting scene featuring a ground plane, two rotating cubes, a sphere, and a pyramid. The scene uses ambient and directional lighting and can be explored with orbit controls.

## Run locally

Because the project uses JavaScript modules, open it through a local web server instead of opening the HTML file directly.

From the project directory, run:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/weekly5.html](http://localhost:8000/weekly5.html) in a browser.

You can also use the Live Server extension in VS Code.

## Controls

- Drag to orbit around the scene.
- Scroll to zoom.
- Resize the browser window to update the camera and renderer.

## Project files

- [`weekly5.html`](weekly5.html) loads the scene and defines the import map for Three.js.
- [`weekly5.js`](weekly5.js) creates the scene, camera, renderer, objects, lights, controls, and animation loop.

## Technologies

- [Three.js](https://threejs.org/) `0.160.0`
- JavaScript ES modules
- WebGL