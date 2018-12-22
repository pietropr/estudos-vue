import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/master/Home'
import ListCompanies from '@/pages/companies/List'
import Single from '../pages/companies/Single'
import NovaEmpresa from '@/components/companies/Novo/Novo'
import EditComponent from '../components/companies/Edit/EditComponent'
import ListJobsComponent from '../components/jobs/List'
import CreateJob from '../components/jobs/Create'
import Login from '../components/Login'

Vue.use(Router)

const routes = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
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

    {

      path: '/jobs',
      name: 'listJob',
      component: ListJobsComponent,
    },

    {

      path: '/jobs/novo',
      name: 'createJob',
      component: CreateJob,
    },
    {

      path: '/jobs/:jobId',
      name: 'singleJob',
      component: ListJobsComponent,
    },
    {

      path: '/jobs/editar/:jobId',
      name: 'editJob',
      component: ListJobsComponent,
    },
  ],
})

  routes.beforeResolve((to, from, next) => {
    if(to.path) {
      NProgress.start()
    }
    next()
  })
    routes.afterEach(() => {
    NProgress.done()
  })

export default routes;

