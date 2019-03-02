import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

class FlexGrid extends Component {
  getClassesFromProps() {
    const {
      container,
      item,
      columns
    } = this.props
    let classNames = `${container ? styles.container : ''} ${item ? styles.item : ''}`
    if (columns) {
      if (columns.small) {
        classNames += ' ' + styles[`small-${columns.small}`]
      } else {
        classNames += ' ' + styles['small-12']
      }

      if (columns.medium) {
        classNames += ' ' + styles[`medium-${columns.medium}`]
      }

      if (columns.large) {
        classNames += ' ' + styles[`large-${columns.large}`]
      }
    }

    console.log(classNames)
    return classNames
  }

  render() {
    const {
      align,
      justify,
      container,
      item,
      children,
      gutter = 0
    } = this.props

    const classes = this.getClassesFromProps()

    const flexItems = React.Children.map(children, child => React.cloneElement(child, { gutter }))

    const style = {}

    if (container && !item) {
      style.margin = '-' + gutter / 2 + 'px'
      style.width = `calc(100% + ${gutter}px)`
      style.alignContent = align
      style.justifyContent = justify
    }

    if (container && item) {
      style.width = `calc(100% + ${gutter}px)`
      style.alignContent = align
      style.justifyContent = justify
      style.margin = 0
      style.padding = 0
    }

    if (item && !container) {
      style.padding = gutter / 2 + 'px'
    }

    return (
      <div className={classes} style={style}>
        {flexItems}
      </div>
    )
  }
}

FlexGrid.propTypes = {
  /**
   * Sets the align-content property for a container.
   */
  align: PropTypes.string,
  /** Sets the justify-content property for a container. */
  justify: PropTypes.string,
  /** Containers contain items. */
  container: PropTypes.bool,
  /** Items can span a number of columns, and can also be containers, with other items as children. */
  item: PropTypes.bool,
  /** Child nodes of the FlexGrid component. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  /** Columns is an object with the keys 'small', 'medium', and 'large', the value for each is a number specifying the number of columns the item spans.
   *  all breakpoints are optional, if columns aren't specified then the default is small-12.
   */
  columns: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number
  }),
  /** Sets the gutter space between columns in pixels. */
  gutter: PropTypes.number
}

FlexGrid.defaultProps = {
  columns: { small: 12 },
  gutter: 16
}

export default FlexGrid
