export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6253cd7d57aa62160cd1ec94',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9tfqpzzz',
                  apiId: '9eb3b904-c7a1-45ed-ab39-b96e6253c3f4'
                },
                {
                  buildHookId: '6253cd7ed793541984b7a91b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-62u9yw2w',
                  apiId: 'a9af0b30-506c-48ef-a251-8fd8b3c5987c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ashokkumarta/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-62u9yw2w.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
