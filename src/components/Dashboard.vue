<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
    <app-dismiss></app-dismiss>
  </div>
</template>
<script>
  import {
    guard
  } from '@/router.guard.js'
  import Header from '@/components/common/Header'
  import Sidebar from '@/components/common/Sidebar'
  import Content from '@/components/common/Content'
  import Footer from '@/components/common/Footer'
  import Dismiss from '@/components/common/Dismiss'
  export default {
    name: 'Home',
    components: {
      'app-header': Header,
      'app-sidebar': Sidebar,
      'app-content': Content,
      'app-footer': Footer,
      'app-dismiss': Dismiss
    },
    beforeRouteEnter: guard
  }
</script>