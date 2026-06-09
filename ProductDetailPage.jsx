import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";

import { FaShoppingCart } from "react-icons/fa";



function ProductDetailPage({handleAddToCartProductdetailPage, setOpenCartBar}) { 
  const { id } = useParams();

  const [changeImage, setChangeImage] = useState(null); 

  

  const ProductImages = {
    1: [
      { id: 1, img: "/ooh.PNG", title:"QR Quran with Roman Urdu Arabic & English Transliteration – Mufti Taqi Usmani", price:999, offer:"₹1399", discount:"26%OFF", rating:"4.6"},
      { id: 2, img: "/2.jpg" },
      { id: 3, img: "/3.jpg" },
      { id: 4, img: "/4.jpg" },
      { id: 5, img: "/Last5.jpg" },
    ],
    2: [ 
      { id: 1, img: "/2.jpg", title:"QR Quran with Roman Urdu Arabic & English Transliteration – Mufti Taqi Usmani",  price:999 , offer:"₹1399", discount:"26%OFF", rating:"4.5"},
      { id: 2, img: "/1.jpg" },
      { id: 3, img: "/3.jpg" }, 
      { id: 4, img: "/4.jpg" },
      { id: 5, img: "/Last5.jpg" },
    ],
    3: [
      { id: 1, img: "/that one.jpg", title:"QR Quran with Roman Urdu Arabic & English Transliteration – Mufti Taqi Usmani",  price:999, offer:"₹1399", discount:"26%OFF", rating:"4"  },
      { id: 2, img: "/2.jpg" },
      { id: 3, img: "/3.jpg" },
      { id: 4, img: "/4.jpg" },
      { id: 5, img: "/Last5.jpg" },
    ],
    4: [
      { id: 1, img: "/that one.jpg", title:"QR Quran with Roman Urdu Arabic & English Transliteration – Mufti Taqi Usmani", price:999 , offer:"₹1399", discount:"26%OFF", rating:"4.2"  },
      { id: 2, img: "/2.jpg" },
      { id: 3, img: "/3.jpg" },
      { id: 4, img: "/4.jpg" },
      { id: 5, img: "/Last5.jpg" },
    ],
  };

  const images = ProductImages[Number(id)] || [];

  useEffect(() => {
  setChangeImage(images[0].img);
}, [id]);


// const product = images[0];

const product = {
   ...images[0],
   id: Number(id)
}


// function QuantityBox() {
  const [qty, setQty] = useState(1);

  const handleMinus = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handlePlus = () => {
    setQty((prev) => prev + 1);
  };
// }

  return (
    <div className="MainProductPage">
      {/* <h1>Product ID : {id}</h1> */}
  <div className="TopSection">

       <div className="RightSide">
      <div className="ImagesBox">
        {/* <img src={images[0]?.img} alt=""/> */}
        <img src={changeImage} alt="#"/> 
 
        <div className="OtherImages">
          {images.map((item) => (
            <img key={item.id} src={item.img} alt="" onClick={()=> setChangeImage(item.img)}
             
              />
          ))}
        </div>
      </div> 
      </div>
 
   
     <div className="LeftSide">
     <h2>{product?.title}</h2>

     <div className="RatingBox"> 
        <h3>4.6<FaStar className="h3icon"/></h3> 
       {[...Array(5)].map((_, starIndex) => { 

                            if (product?.rating >= starIndex + 1) {
                                return <FaStar key={starIndex} className="FaStar"/>;
                            }

                            else if (product?.rating >= starIndex + 0.5) {
                                return <FaStarHalfAlt key={starIndex} className="FaStarHalfAlt"/>;
                            }

                            else {
                                return <FaRegStar key={starIndex}  className="FaRegStar"/>; 
                            }

                        })}
            </div>
      <div className="Pricebox">
        <p>{product?.offer}</p>
        <h4>{product?.price}</h4>
        <span>{product?.discount}</span>  
      </div>


      <div className="Quantity"> 
        <h3>QTY:</h3> 
        <div className="AddItems">

  <div className="MinusBtn" onClick={handleMinus}>
    <FiMinus size={20}  />
  </div>

  <span className="Qty">{qty}</span>

  <div className="PlusBtn" onClick={handlePlus}>
    <GoPlus size={20}  />
  </div>
        </div>
      </div>


   <div className="FeturesDetail"> 
      <ul>
        <li>Arabic (Indo-Pak script) with transliteration</li>
        <li>Premium quality 2-color pages with golden edging</li>
        <li>Roman Urdu translation by Mufti Taqi Usmani</li>
        <li>QR code on every page (iOS & Android compatible)</li>
        <li>Hardcover with gold & UV embossing, matte finish.</li>
        <li>Luxurious black & gold Ka’bah-themed cover</li>
      </ul>
   </div>

   <div className="ButtonsArea">

    <div className="ProductToCart">
      <FaShoppingCart className="ProductCart" />
      <button  onClick={()=> {
                  handleAddToCartProductdetailPage({
                    ...product,
                    qty : qty 
                  });
                  setOpenCartBar(true);
      }}
       >Add To Cart</button>
    </div>

                    
    <div className="BuyNow">
    <button>Buy Now</button> 
    </div>
   </div>


   <div className="DeliveryTime">

    <div className="Delivery">
      <h3>Delivery:</h3>
      <p>Free Delivery</p> 
    </div>

    <div className="Days">
      <h3>Estimated:</h3>
      <p>2-3 days</p> 
    </div>


   </div>

   </div>

  </div>




   <div className="OurProductDetails">
    <h2>PRODUCT DETAILS</h2> 


    <h5>QR Quran with Roman Urdu, Arabic & English Transliteration – Mufti Taqi Usmani (Audio QR Code Edition)</h5>
    <p>Experience the Holy Qur’an in a whole new way with the QR Quran by Mufti Taqi Usmani.
       This special edition makes recitation, samajh (understanding), aur sun’na (listening) easy for everyone — students, families, and seekers of knowledge.
       Each page carries a QR code you can scan to instantly listen to the tilawat and tarjuma 
       — anytime, anywhere.</p>

       <h6>About This Edition</h6> 
    
    <p className="SpecialPara">The QR Quran (Roman Urdu Edition) beautifully joins Islamic wisdom with modern technology.
      Designed especially for those who find Arabic or Urdu script difficult to read, this Quran lets you recite and understand using Roman Urdu — 
      simple, clear, and accessible for all.</p>

      <ul className="FirstUl" title="Perfect for:">
        <li>Non-Arabic readers learning to recite with proper tajweed</li>
        <li>Students and families wanting easy understanding in Roman Urdu</li>
        <li>Anyone who wishes to listen and reflect on Qur’anic verses directly from their phone</li>
      </ul>

      <div className="KeyFetauresofQuran">
        <h4>Key Features of the QR Quran</h4>
        
        <h3>📖 Roman Urdu Translation by Mufti Taqi Usmani</h3>
        <p>Likha gaya hai Roman Urdu mein taake har koi asaani se samajh sake. No need to read Urdu script — just follow in Roman letters and grasp every ayah’s meaning.</p>

        <h3>🔤 Arabic with English Transliteration</h3>
        <p>Arabic text ke saath English transliteration di gayi hai, helping non-Arabic readers recite correctly with tajweed. Perfect for beginners and advanced readers alike.</p>

        <h3>📱 QR Code on Every Page</h3>
        <p>Har page par diya gaya QR code (Android & iOS compatible).
           Scan and listen to tilawat aur tarjuma directly — a beautiful blend of learning and reflection.</p>

          <h3>✨ Premium Quality Design</h3>
          <p>Printed on two-color golden-edged pages with a luxurious black & gold Ka’bah-themed hardcover.
             UV embossed with a matte finish — ideal for gifting and lifelong reading.</p>

          <div className="Why">
            <ul title="Why Choose the QR Quran (Roman Urdu Edition)?">
              <li>Trusted translation by Mufti Taqi Usmani</li>
              <li>Read, understand, and listen — all in one Quran</li>
              <li>Best for non-Arabic readers and new learners</li>
              <li>A timeless connection of ilm (knowledge) and technology</li>
              <li>Perfect for Ramadan, daily tilawat, or as a spiritual gift</li>
            </ul>
          </div>


          <div className="ProductDetails">
            <ul title="Product Details">
              <li>Languages: Arabic, Roman Urdu, English Transliteration</li>
              <li>Translator: Mufti Taqi Usmani</li>
              <li>Format: Hardcover</li>
              <li>Audio Access: QR Code on every page (Android/iOS)</li>
              <li>Design: Black & Gold Ka’bah Theme with UV Embossing</li>
            </ul>
          </div>


      </div>

    
   </div>



    </div>
  );
}


export default ProductDetailPage;