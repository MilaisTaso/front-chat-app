import React from "react";
import clsx from 'clsx';


type ContainerProps = {
  children: React.ReactNode
  display?: 'flex' | 'direction' | 'normal'
  className?: string
}

export const Container: React.FC<ContainerProps> = ({ display = 'normal', children, className = '' }) => {
  return (
    <div className={clsx(display !== 'normal' && 'flex', display === 'direction' && 'flex-col', 'mx-auto w-full', className)}>
      { children }
    </div>
  )
}