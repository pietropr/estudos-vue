import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/master/Home'
import ListCompanies from '@/pages/companies/List'
import Single from '../pages/companies/Single'
import NovaEmpresa from '@/components/companies/Novo/Novo'
import EditComponent from '../components/companies/Edit/EditComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/companies',
      name: 'ListCompanies',
      component: ListCompanies
    },
    {

      path: '/companies/novo',
      name: 'novaEmpresa',
      component: NovaEmpresa,
    },
    {

      path: '/companies/:companyId',
      name: 'singleCompany',
      component: Single,
    },
    {

      path: '/companies/editar/:companyId',
      name: 'editCompany',
      component: EditComponent,
    },
  ]
})
