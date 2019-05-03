# design-system-poc
proof-of-concept for universal design system

## General Setup:

To setup:

```
git clone
npm install
```

## Run Storybook

Storybook is a playground to individually test your universal UI component.

* Your .storybook/ directory contains your Storybook configuration.
* Your stories/ directory is where your global Storybook stories live.

To run Storybook:

`npm run storybook`

Then go to:

`http://localhost:6006/`

To create a new package within monorepo, go inside the `packages` folder:

```
npx create-react-app [name of package]
cd [name of package]
npm run start
```

Navigate to see your new universal UI component:

```
http://localhost:3000/
```