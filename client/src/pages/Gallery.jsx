import React, { useEffect, useState } from "react";
import SubNavbar from "../components/common/SubNavbar";
import NavbarMain from "../components/common/NavbarMain";
import Footer from "../components/common/Footer";
import h1 from "../assests/home/h1.jpg";
import h2 from "../assests/home/h2.jpg";
import h3 from "../assests/home/h3.jpg";
import h4 from "../assests/home/h4.jpg";
// import c1 from "../assests/constructor/briks.jpeg";
// import c2 from "../assests/constructor/cement.jpeg";
import c3 from "../assests/constructor/craser.jpg";
import c4 from "../assests/constructor/c8.jpg";
import ag from "../assests/gallery/ag.jpg";
import fh from "../assests/gallery/fh.jpg";
import fd from "../assests/gallery/fd.jpg";
import college from "../assests/gallery/collage.jpeg";
import re from "../assests/gallery/re.jpeg";
import cl from "../assests/gallery/cl.jpg";
import dahi from "../assests/milk/dahi.webp";
import dudh from "../assests/milk/dudh.jpeg";
import ghee from "../assests/milk/ghee.jpg";
import lassi from "../assests/milk/lassi.webp";
import matha from "../assests/milk/maththa.webp";
import paneer from "../assests/milk/paneer.jpeg";
import shak from "../assests/milk/shak.jpeg";
import MainCommon from "../components/common/MainCommon";
import { Helmet } from "react-helmet";

const data = [
  {
    id: 1,
    name: "Aggriclture Lang",
    image: h1,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 2,
    name: "Aggriclture Lang",
    image: h4,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 3,
    name: "Aggriclture Lang",
    image: ag,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 4,
    name: "Farm House",
    image: fh,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 5,
    name: "Fully Developed Farm House",
    image: fd,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 6,
    name: "Farm House",
    image: h2,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 0,
    name: "Farm House",
    image: h3,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 7,
    name: "College",
    image: college,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 8,
    name: "Resort",
    image: re,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },
  {
    id: 9,
    name: "commercial land",
    image: cl,
    type: "RKS Infrabuild & Homes Pvt. LTD.",
  },

  {
    id: 10,
    name: "Road",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Road_in_Norway.jpg/640px-Road_in_Norway.jpg",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 11,
    name: "Hightways.",
    image:
      "https://images.cnbctv18.com/wp-content/uploads/2023/11/cube-highways-trust.png",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 12,
    name: "Bridge",
    image:
      "https://sika.scene7.com/is/image/sika/glo-second-penang-bridge-02:16-9?wid=1920&hei=1080&fit=crop%2C1",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 13,
    name: "Dam",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2018/10/dam.jpg",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 14,
    name: "Nahar ",
    image: "https://img.jagranjosh.com/imported/images/E/Articles/Canal.jpg",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 15,
    name: "Goverment Buildings ",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/10/12093520/Types-of-building-materials.jpg",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 16,
    name: "House ",
    image:
      "https://website-data-pluckwalk.s3.ap-south-1.amazonaws.com/blogs-images/38h6fE1nuT49Zt2Za3kKhw.webp",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 17,
    name: "Farm House ",
    image:
      "https://2.imimg.com/data2/NX/IF/MY-654968/farm-house-construction.jpg",
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 18,
    name: "Collage ",
    image: college,
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 19,
    name: "Land Development",
    image: c4,
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 20,
    name: " Development",
    image: c3,
    type: "Praharsh Constructor Pvt. LTD.",
  },
  {
    id: 21,
    name: "Cow Cattle Food",
    image:
      "https://azeuspelletmill.com/wp-content/uploads/2019/03/Cow-Feed-Pellets.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 22,
    name: "Buffalo Cattle Food",
    image: "https://5.imimg.com/data5/HL/UA/MY-33307328/dsc_0203-500x500.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 23,
    name: "Dog Cattle Food",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_27/2918166/190701-dog-food-eating-bowl-ac-527p.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 24,
    name: "Hourse Cattle Food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qyqrDYSOwq6930EZJkyr8O9BhrU0twnGsQ&shttps://hindhusthaan.in/wp-content/uploads/2019/03/maxresdefault-1024x576.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 25,
    name: "Cat Cattle Food",
    image:
      "https://image.chewy.com/catalog/cms/images/2024-CF_387-ContentBlock2A_2-NaturalFood-v2-original._SY382__V1712676262_.jpeg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 25,
    name: "Goat Cattle Food",
    image:
      "https://www.treehugger.com/thmb/Va_CF5poRP9hE7EsMGsZ4FQrzXA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/feed-and-tend-goats-3016793-05-a5a77fc6799d4bbdad2e87d8d6387dda.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 26,
    name: "Fish Cattle Food",
    image:
      "https://www.hosokawa-alpine.com/fileadmin/_processed_/0/5/csm_Fischfutter_30f3db244d.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 27,
    name: "Milk",
    image: dudh,
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 28,
    name: "Ghee",
    image: ghee,
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 28,
    name: "Mattha",
    image: matha,
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 29,
    name: "Paneer",
    image: paneer,
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 30,
    name: "Shake",
    image: shak,
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 31,
    name: "Dahi",
    image: dahi,
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 32,
    name: "Creame",
    image:
      "https://allaboutbaking.in/wp-content/uploads/2021/07/81rhUGe0saL._SL1500_.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },
  {
    id: 50,
    name: "Sweet Shop",
    image:
      "https://content.jdmagicbox.com/comp/def_content/sweet_shops/default-sweet-shops-4.jpg",
    type: "SRS Cattle Feed & Milk Product",
  },

  // DryFruits
  {
    id: 33,
    name: "Makhana",
    image:
      "https://t3.ftcdn.net/jpg/04/48/23/16/360_F_448231665_VjDHDTJpPRx4xKivsmSJN88QqxXVh5D8.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 34,
    name: "Cashew",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719310369/INEXT/qqpalnu6cmnxkz89iz2n.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 35,
    name: "Almond",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719310441/INEXT/a0zuke3evn0fw4kvw7yz.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 36,
    name: "Smart Bazaar",
    image:
      "https://www.infinitimall.com/wp-content/uploads/2023/04/Smart-Bazaar-Malad-Infiniti-Mal-1.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 37,
    name: "Smart Bazaar",
    image:
      "https://i.ytimg.com/vi/IsxiHLGrKzI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAasjoHI4patOyWprH2ndRENP-9aQ",
    type: "Ruchir Home Food Gallery",
  },

  // Millet
  // {
  //   id: 36,
  //   name: "Pearl Millet",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719471977/INEXT/n8fytp8pu2azjujawj05.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 37,
  //   name: "Sorghum",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472203/INEXT/zwcdngotgxpj08igfpim.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 38,
  //   name: "Finger Millet",
  //   image: "https://5.imimg.com/data5/SELLER/Default/2022/8/QG/PN/VM/156307736/3-500x500.jpeg",
  //   type: "Ruchir Home Food Gallery",
  // },

  // Pulses
  // {
  //   id: 39,
  //   name: "Green Gram (Mng Dal)",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719472481/INEXT/kzuhyjo9bnjtnldju6fd.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 40,
  //   name: "Split Green Gram (Mung Dal)",
  //   image: "https://t4.ftcdn.net/jpg/01/83/47/67/360_F_183476704_WElLlOssc5NeZFYRNlI7BtebbjSMJFrf.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 41,
  //   name: "Yellow Lentils (Toor Dal)",
  //   image: "https://cdn.ecommercedns.uk/files/8/252318/9/27680479/yellow-lentils.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },

  // Spices
  {
    id: 42,
    name: "Black Paper",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719475282/INEXT/ap6w3nzo4x9sss7sibyo.webp",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 43,
    name: "Cinnamon",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719475578/INEXT/dbi0su0ofwwims7j3rg0.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 44,
    name: "Red Chilli",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719475760/INEXT/pp92egns6eokuc6rqk9i.jpg",
    type: "Ruchir Home Food Gallery",
  },

  // Vegetable
  // {
  //   id: 45,
  //   name: "Ginger",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719476349/INEXT/o95pdidtmxj2vsf7blcd.webp",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 46,
  //   name: "Garlic",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719476439/INEXT/lw5zodvwlfbwnorfnqkh.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 47,
  //   name: "Green Chilli",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504391/INEXT/phacoej2wcdpoqv6x1vf.webp",
  //   type: "Ruchir Home Food Gallery",
  // },

  // Powders
  {
    id: 48,
    name: "Red Chilli Powders",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504546/INEXT/nhesd1yzyakg8802cvkk.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 49,
    name: "Ginger Powders",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504584/INEXT/fek8fextyerkvzvdwgks.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 50,
    name: "Onion Powders",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719504792/INEXT/tdv8esny978wrutlicdx.webp",
    type: "Ruchir Home Food Gallery",
  },

  // Rice
  // {
  //   id: 51,
  //   name: "Basnati Rice",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579620/INEXT/rlgavk9bh7uksfdchlgf.webp",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 52,
  //   name: "Sona Masoori Rice",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579720/INEXT/mavgxgw4ij1icwuj90zw.jpg",
  //   type: "Ruchir Home Food Gallery",
  // },
  // {
  //   id: 53,
  //   name: "Brown Rice",
  //   image: "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579826/INEXT/fvgiua4tf0v9ithwjpf3.webp",
  //   type: "Ruchir Home Food Gallery",
  // },

  // Fruits
  {
    id: 54,
    name: "Mango",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579962/INEXT/cfov9rnywyccvqjkspcv.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 55,
    name: "Watermelon",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719579992/INEXT/pe5rt1vorfmsqqouduth.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 56,
    name: "Licchi",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719580052/INEXT/arj9jitgsui4vbfjqeaj.webp",
    type: "Ruchir Home Food Gallery",
  },

  {
    id: 57,
    name: "Khada Anaj",
    image:
      "https://simplyfresh.info/wp-content/uploads/2015/09/simply-wholegrainstips.jpg",
    type: "Ruchir Home Food Gallery",
  },

  {
    id: 58,
    name: "Aam Achaf",
    image:
      "https://maayeka.com/wp-content/uploads/2017/05/aam-ka-sookha-achar-dry-mango-pickle-maayeka.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 59,
    name: "All Types Achar",
    image:
      "https://www.farmdidi.com/cdn/shop/articles/Blog-post-revised_1445x.webp?v=1670659916",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 60,
    name: "All Types Fruites Juice",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/11/360122485/VE/ZU/WB/153255301/istockphoto-158268808-612x612-jpg-500x500.jpg",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 60,
    name: "Mineral water",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUs3NmXZYW_w86JwABXYBmRcMU_Y6HII-zaBX_VYCjBTK7lpOpjGwmOkh_j8yQORzadWQ&usqp=CAU",
    type: "Ruchir Home Food Gallery",
  },
  {
    id: 60,
    name: "Ice CUbes",
    image:
      "https://www.eurokidsindia.com/blog/wp-content/uploads/2024/05/ice-cube-activities.jpg",
    type: "Ruchir Home Food Gallery",
  },
];

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Group images by type
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  return (
    <div>
      <Helmet>
        <title>GDR Group - Gallery</title>
        <meta
          name="description"
          content="GDR Group 72: A dynamic conglomerate specializing in Agriculture, Dairy, Farm Land, and Commercial Property with a mission to drive growth in rural communities through innovation and sustainability"
        />
      </Helmet>
      <SubNavbar />
      <NavbarMain />
      <div className="flex mt-5 flex-col w-full items-center">
        <h3 className="text-4xl font-fjalla text-[#33536B]">Our Gallery</h3>
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

      {Object.keys(groupedData).map((type) => (
        <div key={type} className="my-10">
          <h4 className="text-2xl font-bold text-center mb-4">{type}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4">
            {groupedData[type].map((item) => (
              <Tile key={item.id} data={item} />
            ))}
          </div>
        </div>
      ))}

      <MainCommon />
      <Footer />
    </div>
  );
};

const Tile = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const tileStyle = isOpen
    ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10"
    : "relative w-full h-48 sm:h-64 lg:h-80";

  const imgStyle = isOpen
    ? "lg:w-[60vw] lg:h-[80vh] w-[80vw] h-[50vh] object-cover transition-all duration-300 ease-in-out"
    : "w-full h-full object-cover transition-all duration-300 ease-in-out";

  return (
    <div
      className={`tile ${tileStyle} cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <img
        src={data.image}
        alt={data.name}
        className={imgStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {isHovered && !isOpen && (
        <div className="absolute bottom-2 left-2 bg-yellow-600  text-white text-sm px-2 py-1 rounded">
          {data.name}
        </div>
      )}
    </div>
  );
};

export default Gallery;
