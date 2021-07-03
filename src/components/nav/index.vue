<template>
  <el-card id="nav" body-style="padding:0px">
    <el-row id="nav-show">
      <el-col :span="18" id="nav-show-name">
        <div><a id="block-name">天天博客</a></div></el-col
      >
      <el-col :span="6" id="menus">
        <el-row :gutter="5">
          <el-col :span="6">
            <div id="search-button">
                <i class="el-icon-search"></i>
                <span>搜索</span>
            </div></el-col
          >
          <el-col :span="6"><div class="grid-content bg-purple">2</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">3</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">4</div></el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
};
</script>

<style scoped>
#nav {
  width: 100%;
  height: 60px;
  background-color: #ffffffcc;

}

#nav-show {
  height: 60px;
  padding: 0px 36px;
  display: flex;
  align-items: center;
}
#nav-show-name {
  text-align: left;
}
#block-name {
  font-weight: 700;
  cursor: pointer;
}

</style>