import React, { Component } from 'react'

import FlexGrid from 'flex-grid'

export default class App extends Component {
  render () {
    return (
      <div>
        <FlexGrid container gutter={30} align="space-around" justify="space-around">
          <FlexGrid container item columns={{small: 12, medium: 6, large: 4}} key="item1">
            <FlexGrid item columns={{small: 6}} key="item1a">
              <div style={{border: '1px solid'}}>Item 1</div>
            </FlexGrid>
            <FlexGrid item columns={{small: 6}} key="item1b">
              <div style={{border: '1px solid'}}>Item 2</div>
            </FlexGrid>
          </FlexGrid>
          <FlexGrid item columns={{small: 12, medium: 6, large: 4}} key="item2">
            <div style={{border: '1px solid'}}>
              Item 3
            </div>
          </FlexGrid>
          <FlexGrid item columns={{small: 12, medium: 6, large: 4}} key="item3">
            <div style={{border: '1px solid'}}>
              Item 4
            </div>
          </FlexGrid>
        </FlexGrid>
      </div>
    )
  }
}
