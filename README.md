# design-system-poc
proof-of-concept for universal design system

## General Setup:

To setup:

```
git clone
npm install
```

## Run Storybook

We use Storybook as a playground to build individual UI components, before publishing it to the `packages` folder.

In root of project, run Storybook:

```
npm run storybook
```

Go here, to view all stories:

```
http://localhost:6006/
```

Please Note:

* Your `.storybook/ directory` contains your Storybook configuration.
* Your `stories/ directory` is where your global Storybook stories live.

## Publish a New Universal UI Component

Create a new package within the monorepo, go inside the `packages` folder:

```
npx create-react-app [name of package]
cd [name of package]
npm run start
```

Navigate to see your new universal UI component:

```
http://localhost:3000/
```