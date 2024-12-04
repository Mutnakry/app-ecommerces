import React from 'react'
import Product from "../product/Page";
import SpaceProduct from "../product/spaceproduct/Page";
import AllProduct from "../product/allproduct/Page";
// import Category from "../category/home/page"
import Category from "../category/home/page"


function Home() {

    return (
        <div>
            <Category />
            <Product />
            <SpaceProduct />
            <AllProduct />
        </div>
    )
}

export default Home


