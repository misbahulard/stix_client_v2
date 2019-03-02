<template>
  <div class="main-sidebar">
    <aside id="sidebar-wrapper">
      <div class="sidebar-brand">
        <a href="/">ME-STIX</a>
      </div>
      <div class="sidebar-brand sidebar-brand-sm">
        <a href="/">St</a>
      </div>
      <ul class="sidebar-menu">
        <li class="menu-header">Dashboard</li>
        <li class="active">
          <router-link to="/">
            <font-awesome-icon icon="fire"/><span class="sidebar-text">Dashboard</span></router-link>
        </li>
        <li class="menu-header">Features</li>
        <li>
          <router-link to="/bundle">
            <font-awesome-icon icon="archive"/><span class="sidebar-text">STIX Bundle</span></router-link>
        </li>
        <li>
          <router-link to="/observed-data">
            <font-awesome-icon icon="search"/><span class="sidebar-text">Observed Data</span></router-link>
        </li>
        <li>
          <router-link to="/indicator">
            <font-awesome-icon icon="eye"/><span class="sidebar-text">Indicator</span></router-link>
        </li>
        <li>
          <router-link to="/identity">
            <font-awesome-icon icon="user"/><span class="sidebar-text">Identity</span></router-link>
        </li>
        <li>
          <router-link to="/threat-actor">
            <font-awesome-icon icon="theater-masks"/><span class="sidebar-text">Threat Actor</span></router-link>
        </li>
        <li>
          <router-link to="/attack-pattern">
            <font-awesome-icon icon="code-branch"/><span class="sidebar-text">Attack Pattern</span></router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>
<script>
  export default {
    name: 'Sidebar'
  }
</script>
<style scoped>
  .sidebar-text {
    padding-left: 16px;
  }
</style>