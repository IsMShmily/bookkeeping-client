import styles from './index.module.scss'
import logo from '../../assets/logo.png'

import { Input, Button } from 'antd'
const Login = () => {
  return (
    <div className={styles['login']}>
      <div className={styles['login__display']}>
        <div>芋圆记账 © 2024</div>
        <div>在做预算时追踪你的情绪</div>
        <div>发现适合每种感受的完美费用追踪器！</div>
        <img src={logo} alt="" />
        <div>随时随地记录开支！</div>
      </div>
      <div className={styles['login__form']}>
        <div className={styles['title']}>登录</div>
        <div className={styles['subtext']}>开始您的预算之旅</div>
        <Input placeholder="请输入您的名称" className={styles['ipt']} size="large" />
        <Input placeholder="请输入您的账号" className={styles['ipt']} size="large" />
        <Input placeholder="请输入您的密码" className={styles['ipt']} size="large" />
        <Button type="primary" className={styles['btn']} size="large">
          登录
        </Button>
      </div>
    </div>
  )
}

export default Login
