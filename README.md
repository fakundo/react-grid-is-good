#React Grid System

[![npm](https://img.shields.io/npm/v/react-grid-is-good.svg?maxAge=2592000)](https://www.npmjs.com/package/react-grid-is-good)

### Installation
```
npm install react-grid-is-good
```

### Features
- inline styles
- flex or float
- responsive
- custom breakpoints with your own names
- automatically breaks overflowing rows
- based on Bootstrap styles

### Examples
```js
import React, { Component } from 'react';
import { Grid, Span, Visible, Hidden } from 'react-grid-is-good';

class GridComponent extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Span size="2/4">span1</Span>
          <Span size="1/4">span2</Span>
          <Span size="1/4">span3</Span>
        </Grid>

        <Grid size={12} flex={false}>
          <Span size="6">span1</Span>
          <Span size="6">span2</Span>
        </Grid>

        <Grid breakpoint="lg" size={3}>
          <Span size={{ 'xs,sm': '100%', lg: '1' }} offset={{ lg: '1/3' }}>span1</Span>
          <Span size={{ 'xs,sm': '3', lg: '1/3' }}>span2</Span>
        </Grid>

        <Visible breakpoint="sm" xs sm>
          I am visible when "xs" or "sm"
        </Visible>

        <Hidden breakpoint="sm" md lg>
          I am hidden when "md" or "lg"
        </Hidden>

        // You have full control on breakpoints
        <Hidden breakpoint="desktop" tablet mobile>
          I am hidden when "tablet" or "mobile"
        </Hidden>
      </div>
    );
  }
}
```

### How to use
Normally Grid, Visible and Hidden components should be wrapped for passing your breakpoint, default properties, e.g. use flex or not. There is no defined breakpoints like 'xs', 'sm'. You get breakpoints by yourself and it does not matter how (using window resize, matchMedia, User Agent on server). 

It's written as CommonJS modules. So you can easily import with node, webpack, browserify, etc.

### Component properties
- Grid
  - `className {string} [className]`
  - `children {*} [children]`
  - `flex {boolean} [flex=true]`
  - `breakpoint {string} [breakpoint]`
  - `size {number|object} [size=12] - examples: 12, { xs: 8, md: 12 }`
  - `gutter {number|object} [gutter=20] - examples: 20, { xs: 20, 'md,lg': 40 }`
  - `align {string|object} [align='left'] - examples: 'center', { xs: 'right' }`
  - `valign {string|object} [valign='top'] - examples: 'middle', { xs: 'bottom' }`
- Span
  - `className {string} [className]`
  - `children {*} [children]`
  - `size {number|string|object} [size='100%'] - examples: 6, '1/2', '50%', { 'xs,sm': 6, 'md,lg': 3 }`
  - `pull {number|string|object} [pull=0] - examples: 6, '1/2', '50%', { xs: 3 }`
  - `push {number|string|object} [push=0] - examples: 6, '1/2', '50%', { xs: 3 }`
  - `offset {number|string|object} [offset=0] - examples: 6, '1/2', '50%', { xs: 3 }`
  - `break {boolean|object} [break=false] - examples: true, { xs: false }`
  - `align {string|object} [align='left'] - examples: 'center', { xs: 'right' }`
  - `valign {string|object} [valign='top'] - examples: 'middle', { xs: 'bottom' }`
- Visible
  - `className {string} [className]`
  - `children {*} [children]`
  - `breakpoint {string} [breakpoint]` 
  - `... your breakpoints to set visibility`
- Hidden
  - `className {string} [className]`
  - `children {*} [children]`
  - `breakpoint {string} [breakpoint]` 
  - `... your breakpoints to set visibility`
