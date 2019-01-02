import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/master/Home'
import ListCompanies from '@/pages/companies/List'
import Single from '../pages/companies/Single'
import NovaEmpresa from '@/components/companies/Novo/Novo'
import EditComponent from '../components/companies/Edit/EditComponent'
import ListJobsComponent from '../components/jobs/List'
import CreateJob from '../components/jobs/Create'
import SingleJob from '../components/jobs/SingleJob'
import EditJob from '../components/jobs/Edit'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
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
      component: SingleJob,
    },
    {

      path: '/jobs/editar/:jobId',
      name: 'editJob',
      component: EditJob,
    },
  ],
})

