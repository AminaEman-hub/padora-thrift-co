function showDetails(productName) {

    alert(
        productName +
        "\n\nPre-Loved Footwear" +
        "\nCarefully selected and checked for quality." +
        "\n\nMore product details and ordering options will be available soon."
    );

}


function contactUs() {

    const phoneNumber = "923002256465";

    const message =
        "Hi Padora Thrift Co.!%0A%0A" +
        "I would like to know more about your pre-loved footwear collection.%0A%0A" +
        "Please share the available products and details.";

    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        message;

    window.open(
        whatsappURL,
        "_blank"
    );

}