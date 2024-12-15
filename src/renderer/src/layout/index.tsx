import React, { useState } from 'react'
import {
  DesktopOutlined,
  FileFilled,
  HomeFilled,
  PayCircleFilled,
  FundFilled,
  CaretLeftFilled
} from '@ant-design/icons'

import styles from './index.module.scss'
import { Button } from 'antd'

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode) {
  return {
    key,
    icon,
    label
  }
}
{
  /* <SettingFilled /> */
}
const items = [
  getItem('仪表盘', '1', <HomeFilled />),
  getItem('随手记', '2', <DesktopOutlined />),
  getItem('预算', '3', <PayCircleFilled />),
  getItem('账单', '4', <FileFilled />),
  getItem('趋势', '5', <FundFilled />)
]
const LayoutMain = () => {
  return (
    <div className={styles['layout']}>
      <div className={styles['layout__sider']}>
        <div className={styles['menu']}>
          <div className={styles['top']}>
            <div className={styles['top__title']}>芋圆记账</div>
            {items.map((item) => {
              return (
                <div key={item.key} className={styles['top__item']}>
                  <Button type="text" block icon={item.icon} className={styles['btn']} size="large">
                    {item!.label}
                  </Button>
                </div>
              )
            })}
          </div>
          <Button
            type="text"
            icon={<CaretLeftFilled />}
            block
            className={styles['btn']}
            size="large"
          >
            登出
          </Button>
        </div>
      </div>
      <div className={styles['layout__main']}>main</div>
    </div>
  )
}
export default LayoutMain
