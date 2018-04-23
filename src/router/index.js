import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/common/Home'
import Login from '@/components/page/Login'
import Statistics from '@/components/page/Statistics'
import AddBill from '@/components/page/AddBill'
import OutgoList from '@/components/page/OutgoList'
import IncomeList from '@/components/page/IncomeList'
import OutgoCategory from '@/components/page/OutgoCategory'
import IncomeCategory from '@/components/page/IncomeCategory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/statistics',
          component: Statistics
        },
        {
          path: '/addBill',
          component: AddBill
        },
        {
          path: '/outgoList',
          component: OutgoList
        },
        {
          path: '/incomeList',
          component: IncomeList
        },
        {
          path: '/outgoCategory',
          component: OutgoCategory
        },
        {
          path: '/incomeCategory',
          component: IncomeCategory
        }
      ]
    }
  ]
})
