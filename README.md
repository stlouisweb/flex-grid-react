# flex-grid-react

> A responsive grid for ReactJS using CSS flexbox.

[![NPM](https://img.shields.io/npm/v/flex-grid.svg)](https://www.npmjs.com/package/flex-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save flex-grid-react
```

## Usage

```jsx
import React, { Component } from 'react'

import FlexGrid from 'flex-grid-react'

class Example extends Component {
  render () {
    return (
      <FlexGrid container>
        <FlexGrid item columns={small: 12, large: 6}>
          <p>Column 1</p>
        </FlexGrid>
        <FlexGrid item columns={small: 12, large: 6}>
          <p>Column 2</p>
        </FlexGrid>
      </FlexGrid>
    )
  }
}
```

## License

MIT © [stlouisweb](https://github.com/stlouisweb)
