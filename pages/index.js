import React from 'react'
import { Button } from 'antd'

// 全局导入
import '../static/css/site.less'
// 模块化导入
import css from '../static/css/site.less'

const Home = () => ( 
  <div>

  {/* <p className = "title" > 首页 </p> */}
  <p className = {css.title}> 首页 </p>
  <Button type="primary">Primary</Button>

  {/* <style > {`
      .title {
        color: red;
      }
  `} </style> */}

  </div>
)

export default Home