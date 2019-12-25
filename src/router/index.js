import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/login/Home'

import FactoryOrder from '@/components/Warehouse/FactoryOrder'
import SurgeryOrder from '@/components/Warehouse/SurgeryOrder'
import DealerOrder from '@/components/Warehouse/DealerOrder'
import Rawmaterialwarehouse from '@/components/Warehouse/Rawmaterialwarehouse'
import Semifinishedwarehouse from '@/components/Warehouse/Semifinishedwarehouse'
import Finishedgoodswarehouse from '@/components/Warehouse/Finishedgoodswarehouse'
import Auxiliarymaterialwarehouse from '@/components/Warehouse/Auxiliarymaterialwarehouse'
import Login from '@/components/login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/Warehouse/FactoryOrder',
          name: 'FactoryOrder',
          component: FactoryOrder
        },
        {
          path: '/Warehouse/SurgeryOrder',
          name: 'SurgeryOrder',
          component: SurgeryOrder
        },
        {
          path: '/Warehouse/dealerOrder',
          name: 'DealerOrder',
          component: DealerOrder
        },
        {
          path: '/Warehouse/Semifinishedwarehouse',
          name: 'Semifinishedwarehouse',
          component: Rawmaterialwarehouse
        },
        {
          path: '/Warehouse/Rawmaterialwarehouse',
          name: 'Rawmaterialwarehouse',
          component: Rawmaterialwarehouse
        },
        {
          path: '/Warehouse/Finishedgoodswarehouse',
          name: 'Finishedgoodswarehouse',
          component: Rawmaterialwarehouse
        },
        {
          path: '/Warehouse/Auxiliarymaterialwarehouse',
          name: 'Auxiliarymaterialwarehouse',
          component: Rawmaterialwarehouse
        },
      ]
    },
  ]
})
