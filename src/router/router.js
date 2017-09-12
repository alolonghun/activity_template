import App from '../App'
import home from '../pages/home'

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      }
    ]
  }
]
