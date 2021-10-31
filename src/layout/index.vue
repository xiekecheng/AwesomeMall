<template>
	<div style="height:100%">
		<el-container>
			<el-aside width="none"><Sider/></el-aside>
			<el-container>
				<el-header><Header/></el-header>
				<el-main><router-view></router-view></el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import Sider from './components/Sider.vue';
import Main from './components/Main.vue';
import Header from './components/Header.vue';
export default {
	setup() {
		return {}
	},
	components:{
		Sider,Header
	}
}
</script>

<style scoped>
.el-header {
	background-color: #b3c0d1;
	color: var(--el-text-color-primary);
	text-align: center;
}

.el-aside {
	background-color: #d3dce6;
	text-align: center;
	height: 100%;
}

.el-main {
	background-color: #e9eef3;
	color: var(--el-text-color-primary);
}

body > .el-container {
	margin-bottom: 40px;
}
.el-container{
	height: 100%;
}
</style>
<style lang="scss" scoped></style>
