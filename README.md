# design-system-poc
proof-of-concept for universal design system

## General Setup:

To setup:

```
git clone
npm install
```

## Run Storybook

We use Storybook as a playground to instantiate one, or more UI components from the `packages` folder.

In root of project, run Storybook:

```
npm run storybook
```

Go here, to view all stories:

```
http://localhost:6006/
```

Please Note:

* Your `.storybook/` directory contains your Storybook configuration.
* Your `stories/` directory is where your global Storybook stories live.

## Create a Universal UI Component

Create a new package within the monorepo, inside the `packages` folder:

```
npx create-react-app [name of package]
cd [name of package]
npm run start
```

Navigate to see your component:

```
http://localhost:3000/
```

Next, create a `story` to make sure UI component is working as expected.

## Theming

