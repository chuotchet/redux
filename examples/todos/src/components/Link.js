// @flow
import * as React from 'react'

type PropsType = {
  active: boolean,
  children: React.Node,
  onClick: Function
}

const Link = ({ active, children, onClick }: PropsType) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)

export default Link
