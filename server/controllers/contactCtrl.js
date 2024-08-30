const contactModel = require("../models/contactModel")
const mailSender = require("../utils/mailSenderr")
const { contactUsEmail } = require("../template/contactFormRes")
const { enquiryEmail } = require("../template/enquiry")
const { getQuoteEmail } = require("../template/getQoutes")

const createContactCtrl = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body

        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "vikasmaheshwari6267@gmail.com",
            "New contact form details",
            contactUsEmail(name, email, phone, subject, message)
        )

        const contact = await contactModel.create({ name, email, phone, subject, message });
        return res.status(201).json({
            success: true,
            message: "Contact form submited successfully!"
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create contact api!"
        })
    }
}


const createEnquiryCtrl = async (req, res) => {
    try {
        // console.log("hello")
        console.log(req.body)
        const { name, companyName, product, quantity, email, contactNumber, country, state, address ,city,phoneCode} = req.body;
        if (!name || !companyName || !product || !quantity || !email || !contactNumber || !country || !state || !city || !address ||!phoneCode) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!"
            })
        }

        const emailRes = await mailSender(
            "vikasmaheshwari6267@gmail.com",
            "New Enquiry",
            enquiryEmail(name, companyName, product, quantity, email, contactNumber, country, state,city, address,phoneCode)
        )
        console.log(emailRes)
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Error in create enquiry api!"
        })
    }
}









const getQuotes = async (req, res) => {
    console.log(req.body)
    try {
      const { name, email, mobile, service,  location, message } = req.body;
     
      const emailRes = await mailSender(
        "vikasmaheshwari6267@gmail.com",
        "Your Data send successfully",
        getQuoteEmail(name, email, mobile, service,  location, message)
      );
  
      console.log("Email Res ", emailRes);
      return res.json({
        success: true,
        message: "Email send successfully",
      });
    } catch (error) {
      console.log("Error", error);
      console.log("Error message :", error.message);
      return res.json({
        success: false,
        message: "Something went wrong...",
      });
    }
  };
module.exports = { createContactCtrl, createEnquiryCtrl,getQuotes }