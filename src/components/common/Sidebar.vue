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
        <router-link tag="li" to="/" active-class="active" exact>
          <a>
            <font-awesome-icon icon="fire" /><span class="sidebar-text">Dashboard</span>
          </a>
        </router-link>
        <li class="menu-header">Features</li>
        <router-link tag="li" to="/bundle" active-class="active" exact>
          <a>
            <font-awesome-icon icon="archive" /><span class="sidebar-text">STIX Bundle</span>
          </a>
        </router-link>
        <router-link tag="li" to="/observed-data" active-class="active" exact>
          <a>
            <font-awesome-icon icon="search" /><span class="sidebar-text">Observed Data</span>
          </a>
        </router-link>
        <router-link tag="li" to="/indicator" active-class="active" exact>
          <a>
            <font-awesome-icon icon="eye" /><span class="sidebar-text">Indicator</span>
          </a>
        </router-link>
        <router-link tag="li" to="/identity" active-class="active" exact>
          <a>
            <font-awesome-icon icon="user" /><span class="sidebar-text">Identity</span>
          </a>
        </router-link>
        <router-link tag="li" to="/threat-actor" active-class="active" exact>
          <a>
            <font-awesome-icon icon="theater-masks" /><span class="sidebar-text">Threat Actor</span>
          </a>
        </router-link>
        <router-link tag="li" to="/attack-pattern" active-class="active" exact>
          <a>
            <font-awesome-icon icon="code-branch" /><span class="sidebar-text">Attack Pattern</span>
          </a>
        </router-link>
        <router-link tag="li" to="/bundle-ddos" active-class="active" exact>
          <a>
            <font-awesome-icon icon="archive" /><span class="sidebar-text">STIX Bundle DDOS</span>
          </a>
        </router-link>
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