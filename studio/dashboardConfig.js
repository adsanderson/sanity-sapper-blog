export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601eea79095b32338f9e3561',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-ryy61ksc',
                  apiId: '6f1df29f-555b-407a-a99a-4f516f8698b5'
                },
                {
                  buildHookId: '601eea7a5f91d467237bcc72',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-q1rv1kv4',
                  apiId: '6a3ea6e3-bb96-4bfb-a6c9-243125a5b558'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adsanderson/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-q1rv1kv4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
