 1. create project folder
 2. npm init -y
 3. npm i vue		https://vuejs.org/v2/guide/installation.html
 4. npm i webpack webpack-cli --save-dev https://webpack.js.org/guides/getting-started/
 5. npm i -D vue-loader vue-template-compiler     https://vue-loader.vuejs.org/guide/
 6. npm i -D css-loader https://www.npmjs.com/package/css-loader
 7. npm i -D sass-loader node-sass https://vue-loader.vuejs.org/guide/pre-processors.html#sass
 8. npm i -D babel-loader @babel/core @babel/preset-env webpack https://www.npmjs.com/package/babel-loader
 9. npm i -D less less-loader
10. npm i -D style-transform-loader 
11. npm i --save vue-apollo graphql apollo-boost
12. npm i aws-appsync
13. npm i dotenv-webpack
14. npm i apollo-boost

stack

 - vuejs / apollo for JS
 - webpack for compiling
    . babel-loader 
	. vue-loader  webpack module for compiling single component files
	. less-loader webpack module for preprocessed styles
	. style-transform-loader webpack module for importing less variables files on every component
 - bootstrap-vue/bootstrap4 for styles 
 - AWS dynamodb for data storage
    . noSQL schemaless databaseo
 - AWS appsync for graphql endpoint
 
 
 todo:
 
  cache settings in local js then save / load from AWS as necessary
  implement youtrack features
  implement git features
  customisation features
  theming
  night mode


 .graph-ql inspector action https://graphql-inspector.com/docs/products/action

    https://jbaysolutions.github.io/vue-grid-layout/

      fetch("https://reqres.in/api/users?page=2", {
        "method": "GET",
        "headers": {}
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.error("Server returned " + response.status + " : " + response.statusText);
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });