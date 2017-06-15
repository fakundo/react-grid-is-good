import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Span } from '../src';

function WrappedSpan(props) {
  return (
    <Span {...props}>
      <div
        style={{
          background: '#FFDB6A',
          border: '1px solid #FC5763',
          padding: 10
        }}
      >
        { props.children }
      </div>
    </Span>
  );
}

class TestComponent extends Component {

  render() {
    return (
      <div>
        <Grid>
          <WrappedSpan size="25%">#1</WrappedSpan>
          <WrappedSpan size="75%">#2</WrappedSpan>
        </Grid>
        <hr />
        <Grid align="center">
          <WrappedSpan size="1/2">#1</WrappedSpan>
          <WrappedSpan size="1/2">#2</WrappedSpan>
        </Grid>
        <hr />
        <Grid size="12">
          <WrappedSpan size="6">#1</WrappedSpan>
          <WrappedSpan size="6">#2</WrappedSpan>
          <WrappedSpan size="3">#3</WrappedSpan>
          <WrappedSpan size="3">#4</WrappedSpan>
          <WrappedSpan size="6">#5</WrappedSpan>
        </Grid>
        <hr />
        <Grid size="12">
          <WrappedSpan size="3">#1</WrappedSpan>
          <WrappedSpan size="3" push="3">#2</WrappedSpan>
        </Grid>
        <hr />
        <Grid size="12">
          <WrappedSpan size="3" push="6">#1</WrappedSpan>
          <WrappedSpan size="3">#2</WrappedSpan>
        </Grid>
        <hr />
        <Grid breakpoint="small" size="12">
          <WrappedSpan sizeSmall="6">#1</WrappedSpan>
          <WrappedSpan sizeSmall="6">#2</WrappedSpan>
        </Grid>
      </div>
    );
  }

}

ReactDOM.render(<TestComponent />, document.querySelector('#app'));
