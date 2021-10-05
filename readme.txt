1. create project folder
2. npm init -y
3. npm install vue		https://vuejs.org/v2/guide/installation.html
4. npm install webpack webpack-cli --save-dev https://webpack.js.org/guides/getting-started/
4. npm install -D vue-loader vue-template-compiler     https://vue-loader.vuejs.org/guide/
6. npm install -D css-loader https://www.npmjs.com/package/css-loader
5. npm install -D sass-loader node-sass https://vue-loader.vuejs.org/guide/pre-processors.html#sass
6. npm install -D babel-loader @babel/core @babel/preset-env webpack https://www.npmjs.com/package/babel-loader
7. npm install -D less less-loader
8. npm install -D style-transform-loader 
9. npm install --save vue-apollo graphql apollo-boost

stack

 - vuejs / apollo for JS
 - webpack for compiling
    . babel-loader 
	. vue-loader  webpack module for compiling single component files
	. less-loader webpack module for preprocessed styles
	. style-transform-loader webpack module for importing less variables files on every component
 - bootstrap5 for styles 
 - AWS dynamodb for data storage
    . noSQL schemaless database
 - AWS appsync for graphql endpoint