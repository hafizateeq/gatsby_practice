import React from "react"
import { Router } from "@reach/router"
import Layout from "../component/Layout"
import Product1 from '../component/product1'
import Product2 from '../component/product2'
import Main from "../component/main"

const Product = () => {
  
  return (
    <Layout>
      <Router basepath="/product">
        <Product1 path="/page1" />
        <Product2 path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default Product;