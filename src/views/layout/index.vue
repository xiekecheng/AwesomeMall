<template>
	<div style="height:100%">
		<el-container>
			<el-aside width="200px"><Sider/></el-aside>
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
		Sider
	}
}
</script>

<style scoped>
.el-header {
	background-color: #b3c0d1;
	color: var(--el-text-color-primary);
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #d3dce6;
	/* color: var(--el-text-color-primary); */
	text-align: center;
	/* line-height: 200px; */
	height: 100%;
}

.el-main {
	background-color: #e9eef3;
	color: var(--el-text-color-primary);
	/* text-align: center; */
	/* line-height: 160px; */
}

body > .el-container {
	margin-bottom: 40px;
}

/* .el-container .el-aside {
	line-height: 260px;
} */

/* .el-container:nth-child(7) .el-aside {
	line-height: 320px;
} */
.el-container{
	height: 100%;
}
</style>
<style lang="scss" scoped></style>
