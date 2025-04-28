/**
 * Validates a product object containing title, description, image URL, and price.
 * Returns an object with validation error messages for each field.
 *
 * @param {Object} product - The product object to validate.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The image URL of the product.
 * @param {string} product.price - The price of the product.
 * 
 * @returns {Object} errors - An object containing error messages for each invalid field.
 * @returns {string} errors.title - Error message for invalid product title.
 * @returns {string} errors.description - Error message for invalid product description.
 * @returns {string} errors.imageURL - Error message for invalid product image URL.
 * @returns {string} errors.price - Error message for invalid product price.
 */


// productObj === errorsOBJ(TITLE ,DESCRIPTION ,PRICE ,CATEGORY ,IMAGEURL ,RATING ,COUNTINSTOCK)

export const productValidation = (product : {title : string , description : string , imageURL : string , price : string}) =>{
    // ** Returns an object 
    const errors : { title : string , description : string, 
        imageURL : string ,price : string } 
     = {
        title : "NOT VALID PRODUCT TITLE",
        description : "NOT VALID PRODUCT DESCRIPTION",
        imageURL : "NOT VALID PRODUCT IMAGE URL",
        price : "NOT VALID PRODUCT PRICE",
    }

const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
    errors.title = "Product title must be between 10 and 80 characters"; 
}
if(!product.description.trim() || product.description.length < 10 || product.description.length > 900){
    errors.description = "Product description must be between 10 and 900 characters"; 
}
if(!product.imageURL.trim() || !validUrl){
    errors.imageURL = "Product image URL is not valid";
}
if (!product.price.trim() || isNaN(Number(product.price))){
    errors.price = "Product price is not valid";
}

    return errors;
}