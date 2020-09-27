import React from 'react';
import './Home.css';
import homeBanner from './Image/banner1.jpg';
import Product from './Product';
// Product Image
import watch1 from './Image/watch/watch1.jpg';
import watch2 from './Image/watch/watch2.jpg';
import book1 from './Image/Books/book1.png';
import book2 from './Image/Books/book2.png';
import book3 from './Image/Books/book3.png';
import book4 from './Image/Books/book4.png';
import bed1 from './Image/bed/bed1.jpg';
import bed2 from './Image/bed/bed2.jpg';
import bed3 from './Image/bed/bed3.jpg';
import bed4 from './Image/bed/bed4.jpg';
import lady1 from './Image/lady/lady1.jpg';
import lady3 from './Image/lady/lady3.jpg';
import lady4 from './Image/lady/lady4.jpg';
import lady5 from './Image/lady/lady5.jpg';
import lady6 from './Image/lady/lady6.jpg';
import lady7 from './Image/lady/lady7.jpg';
import Banner from './Banner';
import table1 from './Image/table/table1.jpg';
import table2 from './Image/table/table2.jpg';
import table3 from './Image/table/table3.jpg';
import shoes1 from './Image/shoes/shoes1.jpg';
import shoes2 from './Image/shoes/shoes2.jpg';
import shoes3 from './Image/shoes/shoes3.jpg';
import cloth1 from './Image/cloth/cloth1.jpg';
import cloth2 from './Image/cloth/cloth2.jpg';
import cloth3 from './Image/cloth/cloth3.jpg';
import cloth4 from './Image/cloth/cloth4.jpg';
import book5 from './Image/Books/book5.png';
import book6 from './Image/Books/book6.png';



function Home() {
    return (
        <div className="home">
            <img src={homeBanner} alt="Home" className="home_banner" />

            {/* Product id,title,price,rating,image */}
            <div className="home_row1">
                <Product
                    id="12321341"
                    title="Beautifull Black and White watch in a very low price"
                    price={11.96}
                    rating={5}
                    image1={watch1}
                />
                <Product
                    id="12321342"
                    title="This is the best bussiness book by which you can learn all about sale"
                    price={4}
                    rating={5}
                    image1={book1}
                />
            </div>
            {/* 3div */}
            <div className="home_row2">
                <Product
                    id="12321343"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={3.12}
                    rating={4}
                    image1={book2}
                />
                <Product
                    id="12321344"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={5.96}
                    rating={5}
                    image1={book3}
                />
                <Product
                    id="12321345"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={6.76}
                    rating={4}
                    image1={book4}
                />
            </div>
            {/* 1div */}
            <div className="home_row3">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={bed1}
                />
            </div>
            <div className="home_row4">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={bed2}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={lady1}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={lady3}
                />
            </div>
            <div className="home_row5">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={bed3}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={bed4}
                />
            </div>
            <div className="home_row6">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={lady4}
                />
            </div>
            
            <div className="home_row6">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={lady5}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={lady6}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={lady7}
                />
            </div>
            <Banner/>
            <div className="home_row7">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={table1}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={table2}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={table3}
                />
            </div>
            <div className="home_row8">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={shoes1}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={shoes2}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={shoes3}
                />
            </div>
            
            <div className="home_row9">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={cloth1}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={cloth2}
                />
              <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={cloth3}
                />
            </div>
            
            <div className="home_row8">
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={cloth4}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={watch2}
                />
            </div>
            <div className="home_row8">
            <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={book5}
                />
                <Product
                    id="12321346"
                    title="The Lean Startup: How constant Innovation Creates  radically successful paperback"
                    price={12.56}
                    rating={5}
                    image1={book6}
                />
            </div>
        </div>
        
    )
}

export default Home;
