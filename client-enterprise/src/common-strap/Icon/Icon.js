import React from 'react';
import FontAwesome from 'react-fontawesome'
import cn from 'classnames'
import styles from './Icon.css'

export const Icon = props => {
  const {
    button,
    iconStyle,
    backgroundStyle,
    className,
    children,
    edit,
    cancel,
    save,
    small,
    hilo,
    ...otherProps
  } = props

  const isButton = (
    button
    || edit
    || save
    || cancel
    || hilo
  )

  const classNames = cn(
    'icon',
    styles.icon,
    className,
    {
      button: isButton,
      edit,
      cancel,
      save,
      small,
      hilo
    },
  )

  const iconName = (
    props.name
    || (hilo && 'sort-up')
    || (edit && 'pencil')
    || (cancel && 'times')
    || (save && 'floppy-o')
  )

  if (edit) {
    return (
      <div
        className={classNames}
        style={backgroundStyle}
        {...otherProps}
      >
        <FontAwesome name={iconName} style={iconStyle}/>
      </div>
    )
  }

  return (
    <div
      className={classNames}
      style={backgroundStyle}
      {...otherProps}
    >
      { children || <FontAwesome name={iconName} style={iconStyle}/> }

    </div>
  )
};
