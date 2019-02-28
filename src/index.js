import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class FlexGrid extends Component {
  static propTypes = {
    align: PropTypes.string,
    justify: PropTypes.string,
    container: PropTypes.bool,
    item: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    columns: PropTypes.shape({
      small: PropTypes.number,
      medium: PropTypes.number,
      large: PropTypes.number
    }),
    gutter: PropTypes.number
  }

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
