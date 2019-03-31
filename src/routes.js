import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [{
    path: '/',
    name: "homeLink",
    components: {
      // 路由复用
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {
    path: '/menu',
    name: "menuLink",
    component: Menu
  },
  {
    path: '/admin',
    name: "adminLink",
    component: Admin,
    /* beforeEnter: (to, from, next) => {
      // 路由独享得守卫
      // 判断store.gettes.isLogin === false
      if (to.path == '/login' || to.path == '/register') {
        next();
      } else {
        alert('还没有登陆，请先登陆');
        next('/login');
      }
    } */
  },
  {
    path: '/about',
    name: "aboutLink",
    redirect: '/about/contact',
    component: About,
    children: [
      // 二级路由
      {
        path: '/about/contact',
        name: 'contactLink',
        component: Contact,
        redirect: '/personname',
        children: [
          // 三级路由
          {
            path: '/phone',
            name: 'phoneNumber',
            component: Phone
          },
          {
            path: '/personname',
            name: 'personName',
            component: PersonName
          }
        ]
      },
      {
        path: '/delivery',
        name: 'deliveryLink',
        component: Delivery
      },
      {
        path: '/history',
        name: 'historyLink',
        component: History
      },
      {
        path: '/orderingGuide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      }
    ]
  },
  {
    path: '/login',
    name: "loginLink",
    component: Login
  },
  {
    path: '/register',
    name: "registerLink",
    component: Register
  },
  // {path: '*',component: Home}
  {
    path: '*',
    redirect: '/'
  }
]
