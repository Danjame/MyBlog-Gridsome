// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: process.env.GRIDSOME_API_URL,
        // apiURL: 'http://localhost:1337',
        apiURL: 'http://ssagarwood.asia:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'follow', 'follower', 'project', 'tag'],
        // singleTypes: ['impressum'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates:{
    StrapiPost:[
      {
        path: '/article/:id',
        component: './src/templates/Article.vue'
      }
    ]
  }
}
