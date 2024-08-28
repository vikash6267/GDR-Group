import React, { useEffect } from "react";
import Navbar from "../components/common/NavbarMain";
import SubNavbar from "../components/common/SubNavbar";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";
import MainCommon from "../components/common/MainCommon";

const blogData = [
  {
    _id: "668250836b68bf83a7230759",
    title: "Grains of the World: A Global Pantry at Your Doorstep",
    desc: "Grains are not just a staple of our diet; they are a reflection of our global diversity. From the lush fields of South America to the highlands of Africa and the Mediterranean basin, grains have sustained civilizations for millennia. Quinoa, hailed as a superfood, originates from the Andean region of South America. Packed with protein, fiber, and essential nutrients, quinoa has garnered worldwide attention for its health benefits. Its versatility in cooking makes it a favorite among chefs and home cooks alike. Amaranth traces its origins back to ancient civilizations in Mesoamerica and the Andes. This pseudo-grain is not only gluten-free but also packed with essential nutrients, including iron, magnesium, and calcium. Teff, a staple in Ethiopian cuisine, is the world’s smallest grain but packs a nutritional punch. It is rich in iron, calcium, and resistant starch, making it a valuable addition to a balanced diet. Farro, an ancient wheat variety, has been cultivated in the Mediterranean region for thousands of years. Its nutty flavor and chewy texture make it a favorite in Italian cuisine. Grains of the world offer a passport to culinary adventure, inviting us to explore new flavors, textures, and traditions. From quinoa and amaranth to teff and farro, the global pantry is brimming with possibilities. So next time you’re in the kitchen, let your taste buds travel the world and savor the diversity that grains have to offer.",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1719816330/INEXT/lkbipkdiyl1gtri4papk.jpg",
    createdAt: "2024-07-01T06:45:23.924Z",
  },
  {
    _id: "66a4d8bbd5954d17852bac59",
    title:
      "Premium Foxnuts (Makhana) - The Superfood Snack for a Global Market",
    desc: "Product Name: Premium Foxnuts (Makhana)  Product Description:  Discover the ultimate superfood snack that’s taking the global market by storm – Premium Foxnuts (Makhana). Sourced from the lush, fertile lands of [Your Country], our foxnuts are a perfect blend of health, taste, and quality, making them an ideal choice for discerning consumers worldwide.  Why Choose Our Premium Foxnuts?  Nutritional Powerhouse Foxnuts are renowned for their exceptional nutritional profile. They are low in calories, high in protein, and packed with essential nutrients such as magnesium, potassium, and phosphorus. Whether you’re looking for a healthy snack or a dietary supplement, our foxnuts are the perfect choice to meet your nutritional needs.  Exceptional Quality Our foxnuts are cultivated using sustainable and organic farming practices. Each batch is carefully handpicked and processed under stringent quality control measures to ensure the highest standards of purity and taste. Free from artificial additives and preservatives, our foxnuts offer a natural, wholesome snacking experience.  Versatile and Delicious Versatility is at the heart of our foxnuts. Enjoy them as a crunchy, guilt-free snack, or use them to enhance your culinary creations. From traditional recipes to modern gourmet dishes, foxnuts add a delightful crunch and a subtle, nutty flavor that complements a variety of cuisines.  Health Benefits Weight Management: Low in calories and rich in protein, foxnuts are an excellent snack for weight watchers. Antioxidant-Rich: Packed with antioxidants, they help combat oxidative stress and promote overall health. Diabetes-Friendly: With a low glycemic index, foxnuts are suitable for individuals managing diabetes. Heart Health: High in magnesium and potassium, they support heart health and help maintain healthy blood pressure levels. Packaging Options We offer a range of packaging options to suit your needs, from retail packs to bulk shipments. Our state-of-the-art packaging preserves the freshness and crunchiness of the foxnuts, ensuring they reach you in perfect condition.  Certifications:  Organic Certification: Certified organic by [Relevant Certification Body]. Quality Assurance: Adheres to international quality standards such as ISO 22000 and HACCP. Sustainable Farming: Committed to eco-friendly and sustainable agricultural practices. Why Partner with Us?  Reliable Supply Chain: Consistent supply and timely deliveries to meet your market demands. Competitive Pricing: Attractive pricing without compromising on quality. Customer Support: Dedicated customer support team to assist you with all your needs. Join the Global Superfood Revolution Elevate your product offerings with our Premium Foxnuts. Embrace the superfood trend and cater to the growing demand for healthy, nutritious snacks. Partner with us today and bring the best of [Your Country]’s agriculture to your customers.  Contact Information:  Website: [Your Website] Email: [Your Email] Phone: [Your Contact Number] Experience the goodness of Premium Foxnuts (Makhana) – the healthy snack choice for a global market.  Key Points to Highlight Nutritional Benefits:  Emphasize the high protein, low-calorie content, and rich nutrient profile. Quality Assurance:  Mention sustainable farming practices, organic certification, and stringent quality control measures. Versatility:  Highlight the various ways foxnuts can be enjoyed and used in different culinary applications. Health Benefits:  Detail specific health advantages, such as weight management, antioxidant properties, suitability for diabetes, and heart health support. Packaging Options:  Offer details on different packaging sizes and options to cater to various markets. Certifications and Standards:  Include relevant certifications and adherence to international quality standards. Partnership Advantages:  Focus on reliable supply chain, competitive pricing, and excellent customer support. By incorporating these elements, the product description will effectively communicate the value and appeal of your Premium Foxnuts to a global audience.",
    image:
      "https://res.cloudinary.com/dsvotvxhq/image/upload/v1722079419/INEXT/gtvlbiucf4hfhxfd2dy1.jpg",
    createdAt: "2024-07-27T11:23:39.663Z",
  },
];

function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <SubNavbar />
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">List of Articles</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogData.map((article, index) => (
            <div
              key={index}
              to={`/blog/${article._id}`} // Adjust path based on your route structure
              className="max-w-lg rounded overflow-hidden shadow-lg bg-white mb-4"
            >
              <img className="w-full" src={article.image} alt={article.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">
                  {article.desc.slice(0, 100)}...
                </p>
              </div>
              <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {formatDate(article.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MainCommon />
      <Footer />
    </div>
  );
}

export default Blog;
