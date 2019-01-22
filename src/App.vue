<template>
  <div id="app">
    <div class="navbar navbar-default ">

      <div class="container">
        <div class="navbar-header">
          <div class="navbar-brand">lalala</div>
        </div>
        <input id="toggle-checkbox" class="hidden" type="checkbox">
        <label for="toggle-checkbox" id="toggle-label" class="visible-xs-inline-block">菜单</label>
        <div class="hidden-xs">
          <ul class="nav navbar-nav">

            <li class="active"><router-link to="/HelloWorld">欢迎</router-link></li>
            <li><router-link to="/comment">评论</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><router-link to="/login">登录</router-link></li>
            <li><router-link to="/register">注册</router-link></li>
          </ul>
        </div>


      </div>
    </div>


    <div class="container">
      <div class="row">
        <div class="col-sm-2 hidden-xs">
         <div class="list-group sider-bar">
           <a class="list-group-item" href="http://localhost:8080/#/login" >综合</a>
           <a class="list-group-item" href="http://localhost:8080/#/register" >体育</a>
           <a class="list-group-item" href="#" >军事</a>
           <a class="list-group-item" href="#" >娱乐</a>
           <a class="list-group-item" href="#" >item</a>

         </div>


        </div>
        <div class="col-sm-7">
          <transition mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
        <div class="col-sm-3">
          sdasssssss sdasssssss sdasssssss sdassssssssdasssssss sdassssssssdasssssss sdassssssssdasssssss
          sdassssssssdasssssss sdassssssssdasssssss sdassssssssdasssssss sdassssssssdasssssss sdasssssss
        </div>
      </div>


    </div>

  </div>
</template>

<script>
  $(document).ready(function () {
    $('ul.nav > li').click(function (e) {
      e.preventDefault();
      $('ul.nav > li').removeClass('active');
      $(this).addClass('active');

    });


  });
  $(document).ready(function () {

    $('div.list-group > a').click(function (e) {
      // e.preventDefault();
      $('div.list-group > a').removeClass('active');
      $(this).addClass('active');

    });

  });
  export default {
    name: 'App'
  }
</script>

<style>
  #toggle-checkbox:checked~div{
    display: block !important;
  }
  .sider-bar .list-group-item{
    border: 0;
    border-radius:5px;
    margin-bottom: 5px;
  }
  .sider-bar .list-group-item {
    border: 0;
    border-radius:5px;
    margin-bottom: 5px;

  }
  .sider-bar .list-group-item.active{

    background-color: red;
  }

  .sider-bar .list-group-item:hover{
     background-color: red;
     color: #ffffff;
   }
  #toggle-label{
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    top: 15px;
    right: 20px;
    color: #666;
    display: none;
  }
  #toggle-label:hover{
    color: #333;
  }

/*.router-link-active{
  color:red;
  font-size: 20px;
  font-style: italic;
  text-decoration: underline;
  background: green;
  !* 红配绿 *!
}*/
/* 动画 */
.v-enter,
.v-leave-to{
  opacity: 0;
  transform: translateX(50px);
}
.v-enter-active,
.v-leave-active{
  transition: all .3s ease;
}
</style>
