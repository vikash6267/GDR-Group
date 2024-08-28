import React, { useState } from "react";

const HomeQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    websiteUrl: "",
    location: "",
    monthlyBudget: "",
    websiteStyle: "",
    domainPurchase: "",
    numberOfPages: "",
    budget: "",
    message: "",
    // Digital Marketing specific fields
    campaignObjective: "",
    targetAudience: "",
    platforms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isWebDevelopment = formData.service === "web-development";
  const isDigitalMarketing = formData.service === "digital-marketing";

  return (
    <div>
      <div className="bg-black mb-1">
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 p-5 lg:py-16">
          <div className="text-center my-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3668.196516107796!2d77.27105677531803!3d23.16302667907558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDA5JzQ2LjkiTiA3N8KwMTYnMjUuMSJF!5e0!3m2!1sen!2sin!4v1724832538455!5m2!1sen!2sin"
              className="w-full lg:h-[100vh] h-[50vh]"
              title="Provision Plus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form className=" d-shadow grid grid-cols-1 md:grid-cols-2 gap-6 bg-white px-5 py-5">
            <div className="md:col-span-2 text-center">
              <h2 className="text-red-600 text-xl font-bold">
                Request a Call Back!
              </h2>
              <h1 className="text-3xl font-bold">General Enquiry</h1>
              <p className="text-gray-500">Not sure about your requirements?</p>
            </div>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="mobile"
                placeholder="WhatsApp Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <input
                type="text"
                name="location"
                placeholder="City"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              />
            </div>
            <div>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded"
              >
                <option value="">Select Service</option>
                <option value="new-rk-construction">New RK Construction</option>
                <option value="rks-homes">RKS Homes</option>
                <option value="srs-foods">SRS Foods</option>
                <option value="ri-si-home-food">Ri Si Home Food</option>
                <option value="72-gdr-steel">72 GDR Steel</option>
                <option value="rrs-liquid-products">
                  R. R. S. Liquid Products
                </option>
              </select>
            </div>
            {isWebDevelopment && (
              <>
                <div>
                  <input
                    type="text"
                    name="websiteUrl"
                    placeholder="Website URL"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="monthlyBudget"
                    placeholder="Monthly Budget"
                    value={formData.monthlyBudget}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
                <div>
                  <select
                    name="websiteStyle"
                    value={formData.websiteStyle}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  >
                    <option value="">- Select Type Of Web -</option>
                    <option value="modern">Modern</option>
                    <option value="classic">Classic</option>
                  </select>
                </div>
                <div>
                  <select
                    name="domainPurchase"
                    value={formData.domainPurchase}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  >
                    <option value="">Domain & Hosting Purchase</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <select
                    name="numberOfPages"
                    value={formData.numberOfPages}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  >
                    <option value="">- Select Number of Pages -</option>
                    <option value="5">1-5</option>
                    <option value="10">6-10</option>
                    <option value="15">11-15</option>
                  </select>
                </div>
              </>
            )}
            {isDigitalMarketing && (
              <>
                <div>
                  <input
                    type="text"
                    name="campaignObjective"
                    placeholder="Campaign Objective"
                    value={formData.campaignObjective}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="targetAudience"
                    placeholder="Target Audience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
                <div>
                  <select
                    name="platforms"
                    value={formData.platforms}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  >
                    <option value="">Select Platforms</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="google">Google Ads</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="budget"
                    placeholder="Campaign Budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border rounded"
                  />
                </div>
              </>
            )}
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Please type at least 20 characters about your Inquiry"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-3 border rounded h-24"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>I'm not a robot</span>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-red-500 text-white px-4 py-2 rounded font-bold"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-5 p-5">
        <div className="bg-yellow-500 text-center p-5 rounded">
          <h2 className="text-2xl font-bold">1,000+</h2>
          <p>Projects</p>
        </div>
        <div className="bg-green-500 text-center p-5 rounded">
          <h2 className="text-2xl font-bold">99%</h2>
          <p>Job Success Score</p>
        </div>
        <div className="bg-red-500 text-center p-5 rounded">
          <h2 className="text-2xl font-bold">4.9/5.0</h2>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default HomeQuote;
