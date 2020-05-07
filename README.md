# portfolio

## How to add a new project

1. Upload project images to [images folder](https://github.com/bammhetrakul/website/tree/master/projects/images).
2. Define project content in [projects-data.js](https://github.com/bammhetrakul/website/blob/master/js/projects-data.js).
Each project should have this format:
```js
{
  ref: 'example-project-title',        // set a short name, don't use spaces
  title: 'Example project title',      // this will be the visible title
  introImage: 'web.jpeg',              // this is the homepage image
  images: ['web.jpeg', 'mobile.jpeg'], // these are the images for the project view
},
```
3. Go to [projects](https://github.com/bammhetrakul/website/tree/master/projects) folder, duplicate `template.html` and rename it to the to the `ref` defined previously. 
