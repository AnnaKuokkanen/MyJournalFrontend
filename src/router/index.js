import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import EntryDetailView from '@/components/EntryDetailView'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/journal',
      name: 'HomePage',
      component: HomePage
    }, 
    {
      path: '/journal/:id', 
      name: 'JournalEntryDetails', 
      component: EntryDetailView
    }, 
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound
     },
  ]
})
