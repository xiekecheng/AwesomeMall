# Vue 3 + Vite
本项目采用Vue3+Vite开发

```
npm init vite@latest
```

```
// 引入 vue-router@4
npm install vue-router@4
```

```
// 引入 elementPlus
npm install element-plus --save
```

```
// 引入vuex
npm install vuex@next --save
```

```
// 引入Echarts
npm install echarts --save
```

引入sass

```
# .scss and .sass
npm install -D sass
```

引入normalize.css初始化浏览器样式

```
npm install normalize.css
```

AwesomeMall                           
├─ dist                               
│  ├─ assets                          
│  │  ├─ element-icons.9c88a535.woff  
│  │  ├─ element-icons.de5eb258.ttf   
│  │  ├─ index.7465808c.js            
│  │  ├─ index.7f5f02ff.css           
│  │  └─ vendor.46dfc262.js           
│  ├─ favicon.ico                     
│  └─ index.html                      
├─ public                             
│  └─ favicon.ico                     
├─ src                                
│  ├─ assets                          
│  │  └─ logo.png                     
│  ├─ router                          // 配置路由
│  │  └─ index.js                     
│  ├─ store                           // 配置状态管理
│  │  ├─ modules                      
│  │  └─ index.js                     
│  ├─ utils                           
│  │  └─ storage.js                   //公共工具类
│  ├─ views                           // 页面
│  │  ├─ graph                        
│  │  │  └─ Charts.vue                
│  │  ├─ layout                       
│  │  │  ├─ components                
│  │  │  │  ├─ Header.vue             
│  │  │  │  ├─ Main.vue               
│  │  │  │  └─ Sider.vue              
│  │  │  └─ index.vue                 
│  │  ├─ mall                         
│  │  │  └─ Home.vue                  
│  │  └─ user                         
│  ├─ App.vue                         
│  └─ main.js                         
├─ README.md                          
├─ index.html                         
├─ package-lock.json                  
├─ package.json                       
└─ vite.config.js                     
