import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header';
import FoodCategoryList from '../components/FoodCategoryList/FoodCategoryList';

const Layout = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div>
        <Header onSearch={(value) => setSearchTerm(value)} />
        <FoodCategoryList searchTerm={searchTerm} />
      <Footer />
    </div>
  )
}

export default Layout