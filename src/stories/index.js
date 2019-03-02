import React from 'react'

import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import { withKnobs, number, select } from '@storybook/addon-knobs'
import FlexGrid from '../../dist/index'
import GettingStarted from './GettingStarted'

const divStyle = {
  backgroundColor: 'rgb(255, 216, 204)',
  borderRadius: '9px',
  padding: '5px',
  fontSize: '1.5em',
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  color: 'rgb(216, 124, 96)'
}

storiesOf('Getting Started', module).add('Using the module', () => <GettingStarted />, {
  info: {
    disable: true
  }
})

const GridStories = storiesOf('FlexGrid', module)
GridStories.addDecorator(withKnobs)

GridStories.add('basic example', () => (
  <div>
    <FlexGrid container>
      <FlexGrid item columns={{small: 12}}>
        <div style={divStyle}>
          <p>12 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 6}}>
        <div style={divStyle}>
          <p>6 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 6}}>
        <div style={divStyle}>
          <p>6 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 3}}>
        <div style={divStyle}>
          <p>3 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 3}}>
        <div style={divStyle}>
          <p>3 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 3}}>
        <div style={divStyle}>
          <p>3 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 3}}>
        <div style={divStyle}>
          <p>3 columns wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 1}}>
        <div style={divStyle}>
          <p>1 column wide</p>
        </div>
      </FlexGrid>
    </FlexGrid>
  </div>
),
{
  info: {
    text: `
            Construct a grid layout by nesting <FlexGrid item></FlexGrid> components within a <FlexGrid container></FlexGrid>
            ~~~js
            <FlexGrid container>
              <FlexGrid item>
                <p>Item 1</p>
              </FlexGrid>
              <FlexGrid item>
                <p>Item 2</p>
              </FlexGrid>
              <FlexGrid item>
                <p>Item 3</p>
              </FlexGrid>
            </FlexGrid>
            ~~~
          `,
    inline: true,
    header: false
  }
})

const alignmentOptions = ['left', 'right', 'center', 'space-around', 'space-between', 'space-evenly']
GridStories.add('positioning items', () => (
  <div style={{height: '600px'}}>
    <FlexGrid container align={select('align', alignmentOptions, 'space-around')} justify={select('justify', alignmentOptions, 'space-around')} gutter={number('gutter', 16)}>
      <FlexGrid item columns={{small: 3}}>
        <div style={divStyle}>
          <p>Item 1</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 3}}>
        <div style={divStyle}>
          <p>Item 2</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 12}}>
        <div style={divStyle}>
          <p>Item 3</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 6}}>
        <div style={divStyle}>
          <p>Item 4</p>
        </div>
      </FlexGrid>
    </FlexGrid>
  </div>
),
{
  info: {
    text: `
            The align and justify props on <FlexGrid container ... can be used to adjust the layout when there is extra space to fill.
            The gutter prop adds gap of a fixed number of pixels between <FlexGrid item ... nodes.
          `,
    inline: true,
    header: false
  }
})

GridStories.add('responsive grid', () => (
  <div>
    <FlexGrid container gutter={16}>
      <FlexGrid item columns={{small: 12, medium: 6, large: 4}}>
        <div style={divStyle}>
          <p>small-12, medium-6, large-4</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 12, medium: 6, large: 4}}>
        <div style={divStyle}>
          <p>small-12, medium-6, large-4</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 12, medium: 6, large: 4}}>
        <div style={divStyle}>
          <p>small-12, medium-6, large-4</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 'hidden', medium: 6, large: 4}}>
        <div style={{...divStyle, backgroundColor: 'rgb(255, 251, 204)', color: 'rgb(216, 213, 96)'}}>
          <p>small-hidden, medium-6, large-4</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 12, medium: 'hidden', large: 4}}>
        <div style={{...divStyle, backgroundColor: 'rgb(204, 229, 255)', color: 'rgb(96, 143, 216)'}}>
          <p>small-12, medium-hidden, large-4</p>
        </div>
      </FlexGrid>
      <FlexGrid item columns={{small: 12, medium: 6, large: 'hidden'}}>
        <div style={{...divStyle, backgroundColor: 'rgb(233, 255, 204)', color: 'rgb(174, 216, 96)'}}>
          <p>small-12, medium-6, large-hidden</p>
        </div>
      </FlexGrid>
    </FlexGrid>
  </div>
),
{
  info: {

    text: `

    Use the columns prop to specify <FlexGrid item> width at small, medium, and/or large breakpoints.

    `,
    inline: true,
    header: false
  }
})
