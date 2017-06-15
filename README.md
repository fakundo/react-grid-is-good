# React Grid System

[![npm](https://img.shields.io/npm/v/react-grid-is-good.svg?maxAge=2592000)](https://www.npmjs.com/package/react-grid-is-good)

### Installation
```
npm install react-grid-is-good
```

### Features
- inline styles
- flex
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
          <Span size="25%">#1</Span>
          <Span size="75%">#2</Span>
        </Grid>
        
        <Grid align="center">
          <Span size="1/2">#1</Span>
          <Span size="1/2">#2</Span>
        </Grid>
        
        <Grid size="12">
          <Span size="6">#1</Span>
          <Span size="6">#2</Span>
          <Span size="3">#3</Span>
          <Span size="3">#4</Span>
          <Span size="6">#5</Span>
        </Grid>
        
        <Grid size="12">
          <Span size="3">#1</Span>
          <Span size="3" push="3">#2</Span>
        </Grid>
        
        <Grid size="12">
          <Span size="3" push="6">#1</Span>
          <Span size="3">#2</Span>
        </Grid>
        
        <Grid breakpoint="small" size="12">
          <Span sizeSmall="6">#1</Span>
          <Span sizeSmall="6">#2</Span>
        </Grid>
        
        <Visible breakpoint="tablet" mobile tablet>
          I am visible when breakpoint is "tablet" or "mobile"
        </Visible>

        <Hidden breakpoint="sm" md lg>
          I am hidden when breakpoint is "md" or "lg"
        </Hidden>
      </div>
    );
  }
}
```

### Component properties
#### Grid

  - **`breakpoint`** `{string} [breakpoint]`
  - **`size`** `{string} [size="100%"]`
  - **`gutter`** `{number} [gutter=0]`
  - **`align`** `{string} [align='left']`
  - **`valign`** `{string} [valign='top']`
  - ...props based on your breakpoint, for example if you pass `breakpoint="desktop"` and `sizeDesktop="12"` then size will be `12`

#### Span

  - **`size`** `{string} [size='100%']`
  - **`pull`** `{string} [pull=0]`
  - **`push`** `{string} [push=0]`
  - **`offset`** `{string} [offset=0]`
  - **`break`** `{boolean} [break=false]`
  - **`align`** `{string} [align='left']`
  - **`valign`** `{string} [valign='top']`
  - ...props based on your breakpoint

#### Visible

  - **`breakpoint`** `{string} [breakpoint]` 
  - ...your breakpoints to set visibility`

#### Hidden

  - **`breakpoint`** `{string} [breakpoint]` 
  - ...your breakpoints to set visibility`

### How to use
You should wrap all components and pass to them your own "breakpoint" property. 
This property can be calculated the way you like.
