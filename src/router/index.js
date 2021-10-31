import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
const Charts = () => import('@/views/Graph/Charts.vue')
const Mall = () => import('@/views/Mall/Home.vue')
// import Charts from '../views/graph/Charts';
// const Charts = () => import('../views/graph/Charts.vue')
const routes = [
	{ path: '/', redirect:'/charts' },
	{
		path: '/charts',
		component: Charts
	},
	{
		path: '/mall',
		component: Mall
	}
]

const router = createRouter({
	// 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
	history: createWebHashHistory(),
	routes, // `routes: routes` 的缩写
})

export default router