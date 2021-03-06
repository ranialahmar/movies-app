import React from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'

export default function Navbar () {
  return (
    <Menu mode='horizontal'>
      <Menu.Item >
        <Link to='/'>
          <Icon type='home' /> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='popular'>
          <Icon type='heart-o' />Movies
        </Link>
      </Menu.Item>
    </Menu>
  )
}
