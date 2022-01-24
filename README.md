# JamalBetria's Homepage

## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Three.js](https://threejs.org/) - 3D library for JavaScript
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

## Project structure

```
$PROJECT_ROOT
│   # Page files
├── pages
│   # React component files
├── components
│   # Non-react modules
├── lib
│   # Static files for images and 3d model file
└── public
```

## Setup

1. run command `npm install` in root project
2. run `npm run dev`
3. open browser type: http://localhost:3001

If you received a similar error like this: `Error: listen EACCES: permission denied 0.0.0.0:3001`
Open Command Prompt as Administrator and run:
`net stop winnat`
then
`net start winnat`
and try to run again `npm run dev`

## License

MIT License.
