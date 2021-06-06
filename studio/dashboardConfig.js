export default {
  widgets: [
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
                  buildHookId: '60bcab6c4d9b8cab6b64d64d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9upg1ny3',
                  apiId: '44b192d3-8713-45fb-992a-ee633b7fa4d7'
                },
                {
                  buildHookId: '60bcab6cde84e8f1ec5e232b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bsdonevt',
                  apiId: 'b02d5dd0-2ed3-461e-b1b2-812e541a0a16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KobeTwo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bsdonevt.netlify.app', category: 'apps'}
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
