export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '602b391dc7acf6f5e421f772',
                  title: 'Sanity Studio',
                  name: 'waves-nextjs-sanity-prototype-studio',
                  apiId: '6d492142-2f9d-4d98-8ab6-62839c032b1f'
                },
                {
                  buildHookId: '602b391dc1f36ae8e38f434b',
                  title: 'Landing pages Website',
                  name: 'waves-nextjs-sanity-prototype',
                  apiId: '37d9e0dc-912c-4c81-9c83-e8389ca92cf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonathanprozzi/waves-nextjs-sanity-prototype',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://waves-nextjs-sanity-prototype.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
