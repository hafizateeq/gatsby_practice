exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // Only update the `/app` page.
  if (page.path.match(/^\/product/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/product/*"

    // Update the page.
    createPage(page)
  }
}

// exports.createPages = async function ({ actions}) {

//   actions.createPage({
//       path: "fruits",
//       component: require.resolve(`./src/templates/fruits.tsx`),
//       context: { 
//           name: "Mango",
//           desc: "this is fruits description"
//        },
//   });
//   console.log("End of Gatsby Node File");
// }
var path = require('path');
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allContentfulElectronics {
      nodes {
        slug
        title
        desc {
          raw
        }
      }
    }
  }
  `)

  result.data.allContentfulElectronics.nodes.forEach((obj) => {
    createPage({
      path: `/product/${obj.slug}`,
      component: path.resolve('./src/templates/productElectronics.tsx'),
      context: {
        itemDetails: obj
      
      }
    })
  })
}
