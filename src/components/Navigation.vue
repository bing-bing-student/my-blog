<template>
  <header class="navbar-wrapper">
    <div class="navbar navbar-fixed-top">
      <div class="container cl">

        <router-link class="navbar-logo hidden-xs" to="/">
          <img class="logo" src="../assets/img/Logo.jpg" alt="个人博客" />
        </router-link>

        <el-dropdown class="logo navbar-logo-m visible-xs">
          <span class="el-dropdown-link">&ensp;&ensp;
            <i class="iconfont icon-zhiyezigeqingdan"></i>
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><router-link to="/" data-hover="首页">首页</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/blogArchive" data-hover="归档">归档</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/gpt" data-hover="AI问答">AI问答</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/about" data-hover="关于我">关于我</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <nav class="nav navbar-nav nav-collapse" role="navigation">
          <ul class="cl">
            <li><router-link to="/" data-hover="首页">首页</router-link></li>
            <li><router-link to="/blogArchive" data-hover="归档">归档</router-link></li>
            <li><router-link to="/gpt" data-hover="AI问答">AI问答</router-link></li>
            <li><router-link to="/about" data-hover="关于我">关于我</router-link></li>
          </ul>
        </nav>

      </div>
    </div>
  </header>
</template>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}

.block-col-2 .el-dropdown-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #000;
}

.container:after {
  /*优化container高度*/
  content: "";
  display: block;
  clear: both;
}

/*导航条*/
.navbar.navbar-fixed-top {
  border-bottom: 1px #000 solid;
}

.navbar .container .navbar-userbar {
  top: 8px;
}

.nav .cl li.active {
  color: #000;
}

.nav>ul>li>a {
  padding: 0 32px;
  /*导航宽度*/
  outline: none;
  color: #838383;
  text-decoration: none;
  letter-spacing: 5px;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  font-size: 1.25em;
}

.nav>ul>li>a::before {
  color: #000;
  content: attr(data-hover);
  position: absolute;
  opacity: 0;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  -webkit-transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
  -moz-transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
  transform: scale(1.1) translateX(10px) translateY(-10px) rotate(4deg);
  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
  -moz-transition: -moz-transform 0.3s, opacity 0.3s;
  transition: transform 0.3s, opacity 0.3s;
  pointer-events: none;
}

.nav>ul>li>a:hover::before,
.nav>ul>li>a:focus::before {
  -webkit-transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
  -moz-transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
  transform: scale(1) translateX(0px) translateY(0px) rotate(0deg);
  opacity: 1;
}
</style>