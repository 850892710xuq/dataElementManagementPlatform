import type { RegistrableApp } from 'qiankun'

// 子应用列表
const microApps: RegistrableApp[] = [
  {
    name: 'data-explore',
    entry: '//localhost:8006',
    container: '#subapp-viewport',
    activeRule: '/data-explore',
    props: {
      routerBase: '/data-explore'
    }
  }
]

export default microApps 