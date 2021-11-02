<template>
	<div>
		<!-- 选择文件 -->
		<el-upload
			class="upload-demo"
			:on-progress="handleUpload"
			drag
			action
			:auto-upload="false"
			:on-change="handleChange"
		>
			<el-icon class="el-icon--upload">
				<upload-filled />
			</el-icon>
			<div class="el-upload__text">
				Drop file here or
				<em>click to upload</em>
			</div>
			<!-- <template #tip>
				<div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
			</template> -->
		</el-upload>
		<el-button type="primary" @click="exportExcel">导出Excel</el-button>

		<!-- 导入的表格 -->
		<el-table :data="tableList" style="width: 100%">
			<el-table-column prop="Id" label="Id" width="180" />
			<el-table-column prop="Author" label="Author" width="180" />
			<el-table-column prop="Title" label="Title" />
			<el-table-column prop="Readings" label="Readings" />
			<el-table-column prop="Date" label="Date" />
		</el-table>
	</div>
</template>

<script>
import { UploadFilled } from '@element-plus/icons'
import fileReader from '@/utils/fileReader';
import xlsx from 'xlsx';
export default {
	setup () {
		return {}
	},
	// data () {
	// 	return {
	// 		tableList: []
	// 	}
	// },
	components: {
		UploadFilled
	},
	methods: {
		async handleChange (file) {
			console.log('file,fileList',file,);
			// console.log(file.target);
			// fileReader(file.raw).then(res=>{
			// 	const file = xlsx.utils.sheet_to_json(res)
			// 	console.log('file',file);
			// })

			// const data = fileReader(file.raw)
			// const workbook = xlsx.read(data,{type:'binary'})
			// const json = xlsx.utils.sheet_to_json(workbook)

			const data = await file.raw.arrayBuffer();
			const workbook = xlsx.read(data);
			const worksheet = workbook.Sheets[workbook.SheetNames[0]]
			const json = xlsx.utils.sheet_to_json(worksheet)
			console.log('json',json);
			this.tableList = json
			// let arr = []
			// for(let item in json){
			// 	// console.log('item,json[item]',item,json[item]);
			// 	// this.tableList.push(json[item])
			// 	arr.push(json[item])
			// }
			// console.log('arr',arr);
			// const arr2 = [{
			// 	name:'jack'
			// },
			// {
			// 	name:'jack'
			// },
			// {
			// 	name:'jack'
			// },]
			// console.log('arr2',arr2);
			// console.log('this.tableList',this.tableList);
			// this.tableData = json


		},
		exportExcel(){
			
		}
		// handleUpload(event, file, fileList){
		// 	console.log('event, file, fileList',event, file, fileList);
		// }
	},
	data () {
		return {
			tableData: [
				{
					date: '2016-05-03',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
				{
					date: '2016-05-02',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
				{
					date: '2016-05-04',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
				{
					date: '2016-05-01',
					name: 'Tom',
					address: 'No. 189, Grove St, Los Angeles',
				},
			],
			tableList:[]
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
