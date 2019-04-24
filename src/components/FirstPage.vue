<template>
  <div class="layout">
    <Layout style="height: 100%">
      <Header style="background:#ffffff;" >
        <Menu mode="horizontal" theme="light" active-name="1">
          <img class="layout-logo" src="../assets/logo.png"/>
          <div class="layout-nav" style="width: 60%">
            <MenuItem name="5">
              <Input v-model="searchword" placeholder="搜索你的todo" style="width: 300px" /><I style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">&nbsp;&nbsp;</I>
              <Button type="primary" shape="circle" icon="ios-search"></Button>
            </MenuItem>

              <I style="-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</I>

            <MenuItem name="1">
              <Icon type="md-contact" />
              账户
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              更多
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-planet" />
              信息流
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Breadcrumb :style="{margin: '20px 0',textAlign:'left',paddingLeft:'59px'}">
        <BreadcrumbItem>Home&nbsp;&nbsp;\&nbsp; &nbsp;</BreadcrumbItem>
        <BreadcrumbItem>Components&nbsp;&nbsp;\&nbsp; &nbsp;</BreadcrumbItem>
        <BreadcrumbItem>: )&nbsp;&nbsp;&nbsp; &nbsp;</BreadcrumbItem>
      </Breadcrumb>
      <Layout :style="{padding: '0 50px'}">
        <Content :style="{padding: '24px 0', minHeight: '280px', background: '#fff'}">
          <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu :theme="theme3" active-name="1">
                <MenuGroup title="内容管理">
                  <MenuItem name="1">
                    <Icon type="md-document" />
                    文章管理
                  </MenuItem>
                  <MenuItem name="2">
                    <Icon type="md-chatbubbles" />
                    评论管理
                  </MenuItem>
                </MenuGroup>
                <MenuGroup title="统计分析">
                  <MenuItem name="3">
                    <Icon type="md-heart" />
                    用户留存
                  </MenuItem>
                  <MenuItem name="4">
                    <Icon type="md-leaf" />
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
  name: 'FirstPage',
  data () {
    return {
      searchword: ''
    }
  },
  methods: {

  }
}
</script>
<style scoped>
  .layout{
    height: 100%;
    border: 1px solid #d7dde4;
    background:url("../assets/mountain.jpg");
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    float: left;
    position: relative;
    top: 10px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
