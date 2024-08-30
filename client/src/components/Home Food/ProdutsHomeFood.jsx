import React from "react";
import ProductCard from "./ProductCard";

// Dummy data for products
const dryFruits = [
  {
    name: "Sugar Cane Vinegar",
    category: "Sirka",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpKpWcpxp5eJBNISi6Y0QsIYVBVo874ikrDfSg3Xh6qTdnG6MDmtUSicPh9gLI84ZgQYG5UN9NrkP_nH-IU1wiaa0jSvYzAsDpue_5GfU&usqp=CAE",
  },
  {
    name: "All Types Vinegar",
    category: "Sirka",
    image:
      "https://assets.bonappetit.com/photos/5cc1f251f8ab2775109895c7/master/pass/Basically-Vinegar-Group-Update.jpg",
  },
  
  {
    name: "All Types Achhar",
    category: "Achhar",
    image:
      "https://foodalltime.com/wp-content/uploads/2022/01/10-Best-Achar-and-Pickle-Recipes-of-India-2.png",
  },

  {
    name: "Minralas Water",
    category: "Minrals",
    image:
      "https://www.netsolwater.com/netsol-water/assets/img/product-images/Is-mineral-water-different-from-packaged-drinking-water.jpg",
  },
  {
    name: "Ice Cube ",
    category: "Minrals",
    image:
      "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/05/ice-cube-activities.jpg",
  },



  {
    name: "Elaichi (Cardamom)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Cardamom.jpg",
  },
  {
    name: "Black Cumin (Kalonji)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Black-Cumin.jpg",
  },
  {
    name: "Asafetida (Hing)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Asafetida.jpg",
  },
  {
    name: "Nutmug (Jaiphal)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Nutmug.jpg",
  },
  {
    name: "Black Pepper (Kaali Mirch)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Black-Pepper.jpg",
  },
  {
    name: "Dried Mango Powder (Amchoor)",
    category: "Spice",
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/04/Dried-Mango-Powder.png",
  },
  {
    name: "Red Chilli (Laal Mirch)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Red-Chilli.jpeg",
  },
  {
    name: "Ginger (Adrak)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Ginger.jpg",
  },
  {
    name: "Turmeric (Haldi)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Turmeric.jpg",
  },
  {
    name: "Garlic (Lehsun)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Garlic.png",
  },
  {
    name: "Bay Leaf (Tej Patta)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Bay-Leaf.jpg",
  },
  {
    name: "Basil Seeds (Sabja)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Basil-Seeds.png",
  },
  {
    name: "Coriander Seeds (Sabut Dhaniya)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Coriander-Seeds.jpg",
  },
  {
    name: "Holy Basil (Tulsi)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Holy-Basil.jpg",
  },
  {
    name: "Carom Seeds (Ajwain)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Carom-Seeds.jpg",
  },
  {
    name: "Mace (Javitri)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Mace.jpg",
  },
  {
    name: "Cumin (Jeera)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Cumin.jpg",
  },
  {
    name: "Brown Mustard (Rai)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Brown-Mustard.jpg",
  },
  {
    name: "Cloves (Laung)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Cloves.jpg",
  },
  {
    name: "Mustard Seeds (Sarson Dana)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Mustard-Seeds.png",
  },
  {
    name: "Garam Masala",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Garam-Masala-1.jpeg",
  },
  {
    name: "Fennel Seeds (Saunf)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Fennel-Seeds.jpg",
  },
  {
    name: "Fenugreek Leaves (Kasturi Methi)",
    category: "Spice",
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/04/Fenugreek-leaves.jpg",
  },
  {
    name: "Star Anise (Chakri Phool)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Star-Anise.jpg",
  },
  {
    name: "Cinnamon (Daalchini)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Cinnamon.jpg",
  },
  {
    name: "Poppy Seeds (Khus Khus)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Poppy-Seeds.png",
  },
  {
    name: "Saffron (Kesar)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Saffron.jpg",
  },
  {
    name: "Curry Leaves (Kari Patta)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Curry-Leaves.jpg",
  },
  {
    name: "Black Cardamom (Badi Elaichi)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Black-Cardamom.jpg",
  },
  {
    name: "Coriander Powder (Dhaniya Powder)",
    category: "Spice",
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/04/Coriander-Powder.png",
  },
  {
    name: "Fenugreek Seeds (Methi Dana)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Fenugreek-Seeds.jpg",
  },
  {
    name: "Cassia Bark (Jangalee Dalchini Chaal)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Cassia-Bark.jpeg",
  },
  {
    name: "Tamarind (Imli)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Tamarind.jpg",
  },
  {
    name: "Sesame Seeds (Til)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Sesame-Seeds.jpg",
  },
  {
    name: "Pomegranate Seeds (Anaar Dana)",
    category: "Spice",
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/04/Pomegranate-Seeds.jpg",
  },
  {
    name: "Mint (Pudhina)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Mint.jpg",
  },
  {
    name: "Ginger Powder (Adrak Powder)",
    category: "Spice",
    image: "https://gdrgroup.in/wp-content/uploads/2023/04/Ginger-Powder.jpg",
  },
  {
    name: "Gooseberry Grass Powder (Amla Powder)",
    category: "Spice",
    image:
      "https://gdrgroup.in/wp-content/uploads/2023/04/Gooseberry-Grass-Powder.png",
  },
  {
    name: "Green Gram (Mng Dal)",
    category: "Pulses",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472481/INEXT/kzuhyjo9bnjtnldju6fd.jpg",
  },
  {
    name: "Split Green Gram (Mung Dal)",
    category: "Pulses",
    image:
      "https://t4.ftcdn.net/jpg/01/83/47/67/360_F_183476704_WElLlOssc5NeZFYRNlI7BtebbjSMJFrf.jpg",
  },
  {
    name: "Yellow Lentils (Toor Dal)",
    category: "Pulses",
    image:
      "https://cdn.ecommercedns.uk/files/8/252318/9/27680479/yellow-lentils.jpg",
  },
  {
    name: "Garbanzo Beans (Kabuli Chana)",
    category: "Pulses",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472808/INEXT/yi8jyhqi2nf0eepv4qic.jpg",
  },
  {
    name: "Black Chickpeas",
    category: "Pulses",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472890/INEXT/ow54ty9t22fcvvvjvkf6.jpg",
  },
  {
    name: "Basnati Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579620/INEXT/rlgavk9bh7uksfdchlgf.webp",
  },
  {
    name: "Sona Masoori Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579720/INEXT/mavgxgw4ij1icwuj90zw.jpg",
  },
  {
    name: "Brown Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579826/INEXT/fvgiua4tf0v9ithwjpf3.webp",
  },
  {
    name: "Samba Rice",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579873/INEXT/k4i7ztavywxma0sgcs5k.png",
  },
  {
    name: "Kalanamak Rice ",
    category: "Rice",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1722078896/INEXT/ti265rly7dfp84hzwxcx.jpg",
  },








];

function ProdutsHomeFood() {
  return (
    <div className="w-11/12 mx-auto mt-[60px]">
      <div>
        {/* Heading */}
        <div className="flex flex-col w-full items-center">
          <h3 className="text-4xl font-fjalla text-[#33536B]">
            Spices & Food Items
          </h3>
          <div className="flex items-center w-[75px]">
            <div className="h-0.5 bg-[#e2571a]"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div className="h-1 w-1 bg-[#e2571a] rounded-full mx-1"></div>
            <div
              className="h-[4px] rounded-full w-[10px] flex-grow"
              style={{ backgroundColor: "#e2571a" }}
            ></div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 place-content-center w-full place-items-center mt-12">
          {dryFruits.map((product, index) => (
            <ProductCard
              index={index}
              key={index}
              imageUrl={product.image}
              title={product.name}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdutsHomeFood;
