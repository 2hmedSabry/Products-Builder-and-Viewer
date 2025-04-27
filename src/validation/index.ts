// productObj === errorsOBJ(TITLE ,DESCRIPTION ,PRICE ,CATEGORY ,IMAGEURL ,RATING ,COUNTINSTOCK)


export const productValidation = (product : {title : string , description : string , imageURL : string , price : string}) =>{
    // ** Returns an object 
    const errors : { title : string , description : string, 
        imageURL : string ,price : string } 
     ={
        title : "NOT VALID PRODUCT TITLE",
        description : "NOT VALID PRODUCT DESCRIPTION",
        imageURL : "NOT VALID PRODUCT IMAGE URL",
        price : "NOT VALID PRODUCT PRICE",
    }

const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

if(!product.title.trim() || product.title.length < 10 || product.title.length > 80){
    errors.title = "Product title must be between 10 and 80 characters"; 
}
if(product.description.trim() || product.description.length < 10 || product.description.length > 80){
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