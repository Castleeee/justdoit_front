<template>
  <div class="layout">
    <Layout style="height: 100%">
      <Header style="background:#ffffff;">
        <Menu mode="horizontal" theme="light" active-name="1" @on-select="goPush">
          <img class="layout-logo" src="../../assets/all/paper-plane.svg" alt=" ：）"/>
          <div class="layout-nav" style="width: 60%">
            <MenuItem name="null">
              <Input v-model="searchword" placeholder="搜索你的todo" style="width: 300px"/><I
              style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">&nbsp;&nbsp;</I>
              <Button type="primary" shape="circle" icon="ios-search"></Button>
            </MenuItem>

            <I style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</I>

            <MenuItem name="usercenter">
              <Icon type="md-contact"/>
              账户
            </MenuItem>
            <Submenu name="more">
              <template slot="title">
                <Icon type="ios-keypad" size="large"></Icon>
                更多
              </template>
              <MenuGroup title="使用">
                <MenuItem name="more1">新增和启动</MenuItem>
                <MenuItem name="more2">活跃分析</MenuItem>
                <MenuItem name="more3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="more4">用户留存</MenuItem>
                <MenuItem name="more5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
            <MenuItem name="infoStream">
              <Icon type="md-planet"/>
              信息流
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Breadcrumb :style="{margin: '20px 0',textAlign:'left',paddingLeft:'59px'}">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Components</BreadcrumbItem>
        <BreadcrumbItem>: )</BreadcrumbItem>
      </Breadcrumb>
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1">
                <MenuGroup title="内容管理">
                  <MenuItem name="1">
                    <Icon type="md-document"/>
                    文章管理
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="md-chatbubbles"/>
                    评论管理
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="统计分析">
                  <MenuItem name="3">
                    <Icon type="md-heart"/>
                    用户留存
                  </MenuItem>
                  <MenuItem name="4">
                    <Icon type="md-leaf"/>
                    流失用户
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="">
                </MenuGroup>
                <MenuGroup title=" ">
                </MenuGroup>
                <MenuGroup title=" ">
                </MenuGroup>
                <MenuGroup title=" ">
                </MenuGroup>
                <MenuGroup title=" ">
                </MenuGroup>
                <MenuGroup title=" ">
                </MenuGroup>
                <MenuGroup title=" ">
                </MenuGroup>
              </Menu>
            </Sider>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
              <!--<todolist></todolist>-->
              <!--<infoCard></infoCard>-->
            </Content>
          </Layout>
        </Content>
      </Layout>

    </Layout>
  </div>

</template>
<script>
export default {
  name: 'todoMain',
  data () {
    return {
      searchword: '',
      account: false
    }
  },
  methods: {
    goPush (name) {
      // console.log(name)
      if (['usercenter', 'login', 'more1', 'more2', 'more3', 'more4', 'more5', 'infoStream'].indexOf(name) !== -1) {
        this.$router.push({ path: '/' + name })
      } else {
        console.log(name)
      }
    }
  }
}
</script>
<style scoped>
  .layout {
    height: 100%;
    border: 1px solid #d7dde4;
    background: url("../../assets/user/mountain.jpg");
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

</style>
