# Webpack Purescript Starter

This starter pack presents one approach to how one would incorporate [Purescript](http://www.purescript.org/) into a modern frontend codebase that uses [Webpack](https://webpack.github.io/). 

The intent is not to replace Javascript, but instead *enrich* a JS codebase with bits of statically typed, purely functional, typeclassy code written in Purescript.

---

**Note:** This starter pack does not use [purs-loader](https://github.com/ethul/purs-loader) but instead adds an additional stage of compilation.

---

## Overview
Frontend development nowadays involves *staged computation*:

- With Webpack, one already writes Javascript that gets compiled to Javascript. 
- With this starter pack, one writes Purescript that gets compiled to Javascript that gets compiled to Javascript :)

Because of this, we've chosen an unorthodox file hierarchy that explicitly highlights the separation and dependency of multiple stages of code.

<br/>

#### [`./src0/`](./src0) - Purescript

These files get compiled to Javascript for the next stage in [`./src1/_gen/`](./src1/_gen) via **psc**.

<br/>

#### [`./src1/`](./src1) - Javascript and more

These files get bundled into static assets for the next stage in [`./src2/_gen/`](./src2/_gen) via **webpack**.

<br/>

#### [`./src2/`](./src2) - Static assets

These files are served and then interpreted by your client's **web browser**.

<br/>

## Features
- [x] Import purescript from js
- [x] Sourcemaps
- [ ] Import js from purescript
- [ ] File-watching + Hot reloading all the way through

## Setup
1. Install [`yarn`](https://yarnpkg.com/)
2. Instal [`purescript`](http://www.purescript.org/)
3. `yarn install`

## Usage

Build code for all stages:
```
yarn run build
```

Clean generated code for all stages:
```
yarn run clean
```
