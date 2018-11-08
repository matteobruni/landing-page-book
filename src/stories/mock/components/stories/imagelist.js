export default {
  name: 'Image List',
  summary: 'Easy way to show an image list on your website.',
  import: ``,
  withStyles: true,
  extractProps: ['image'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<ImageList 
    gray
    images={[
        {image: '/images/image-list/react.png'},
        {image: '/images/image-list/graphql.png'},
        {image: '/images/image-list/apollo.png'},
        {image: '/images/image-list/storybook.png'},
        {image: '/images/image-list/angularjs.png'},
        {image: '/images/image-list/bootstrap.png'},
        {image: '/images/image-list/browserstack.png'},
        {image: '/images/image-list/jest.png'}
    ]}
/>`,
      tabsActive: ['code']
    }
  ]
};
