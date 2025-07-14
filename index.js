console.log("This is from index.js");

const productCards = document.querySelectorAll(".product-card");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");
const productContainer = document.getElementById("productContainer");
const productDetails = document.getElementById("productDetails");
const detailsTitle = document.getElementById("detailsTitle");
const imageGallery = document.getElementById("imageGallery");
const productDescription = document.getElementById("productDescription");
const closeDetailsBtn = document.getElementById("closeDetails");

const productData = {
  Lehenga: {
    title: "Lehenga",
    description:
      "Beautiful, lehengas that make you feel special on every occasion.",
    images: [
  "images/Non-bride/lahenga1.jpeg",
  "images/Non-bride/lahenga2.jpeg",
  "images/Non-bride/lahenga3.jpeg",
  "images/Non-bride/lahenga4.jpeg",
  "images/Non-bride/lahenga5.jpeg",
  "images/Non-bride/lahenga6.jpeg",
  "images/Non-bride/lahenga7.jpeg",
  "images/Non-bride/lahenga8.webp",
    ],
  },
  vanarasi_saree: {
    title: "Vanarasi Saree",
    description:
      "Graceful Banarasi sarees woven with love, tradition, and a touch of elegance.",
    images: [
       "images/Vanarasi-saree/vanarasi1.jpeg",
       "images/Vanarasi-saree/vanarasi2.jpeg",
       "images/Vanarasi-saree/vanarasi3.jpeg",
       "images/Vanarasi-saree/vanarasi4.jpeg",
       "images/Vanarasi-saree/vanarasi5.jpeg",
       "images/Vanarasi-saree/vanarasi6.jpeg",
       "images/Vanarasi-saree/vanarasi7.jpeg",
       "images/Vanarasi-saree/vanarasi8.webp",
    ],
  },
  Bridal_outfit: {
    title: "Bridal Outfit",
    description:
      "Exquisite Indian bridal outfits crafted to celebrate your story, beauty, and the magic of your big day.",
    images: [
       "images/Bridal/bridal1.jpeg",
       "images/Bridal/bridal2.jpeg",
       "images/Bridal/bridal3.jpeg",
       "images/Bridal/bridal4.jpeg",
       "images/Bridal/bridal5.jpeg",
       "images/Bridal/bridal6.jpeg",
       "images/Bridal/bridal7.jpeg",
      "images/Bridal/bridal8.webp",
    ],
  },
  designer_saree: {
    title: "Designer Saree",
    description:
      "Stylish designer sarees that make you look and feel beautiful, effortlessly.",
    images: [
     "images/Designersaree/designersaree1.jpeg",
     "images/Designersaree/designersaree2.jpeg",
     "images/Designersaree/designersaree3.jpeg",
     "images/Designersaree/designersaree4.jpeg",
     "images/Designersaree/designersaree5.jpeg",
     "images/Designersaree/designersaree6.jpeg",
     "images/Designersaree/designersaree7.jpeg",
      "images/Designersaree/designersaree8.webp",
    ],
  },
  single_kurti: {
    title: "Single Kurti",
    description:
      "A comfy, stylish kurti in soft cotton—perfect for everyday wear with a touch of flair.",
    images: [
     "images/Single-kurti/kurti1.jpeg",
     "images/Single-kurti/kurti2.jpeg",
     "images/Single-kurti/kurti3.jpeg",
     "images/Single-kurti/kurti4.jpeg",
     "images/Single-kurti/kurti5.jpeg",
     "images/Single-kurti/kurti6.jpeg",
     "images/Single-kurti/kurti7.jpeg", 
     "images/Single-kurti/singlekurti8.jpg",  
    ],
  },
  man_kurta: {
    title: "Men Kurta",
    description:
      "A classic men’s kurta made for comfort and style—ideal for any occasion, big or small.",
    images: [
       "images/Man-Kurta/menkurta1.jpeg",
       "images/Man-Kurta/menkurta2.jpeg",
       "images/Man-Kurta/menkurta3.jpeg",
       "images/Man-Kurta/menkurta4.jpeg",
       "images/Man-Kurta/menkurta5.jpeg",
       "images/Man-Kurta/menkurta6.jpeg",
       "images/Man-Kurta/menkurta7.jpeg",
       "images/Man-Kurta/menkurta8.jpeg",
    ],
  },
  three_piece: {
    title: "Three Piece",
    description:
      "A kurta salwar that’s easy, elegant, and perfect for every day.",
    images: [
       "images/3piecesuit/kurtisalwar1.jpeg",
       "images/3piecesuit/kurtisalwar2.jpeg",
       "images/3piecesuit/kurtisalwar3.jpeg",
       "images/3piecesuit/kurtisalwar4.jpeg",
       "images/3piecesuit/kurtisalwar5.jpeg",
       "images/3piecesuit/kurtisalwar6.jpeg",
       "images/3piecesuit/kurtisalwar7.jpeg",
       "images/3piecesuit/kurtisalwar8.webp",
    ],
  },
   silk_saree: {
    title: "Silk Saree",
    description:
      "Draped in silk, glowing with confidence and effortless elegance.",
    images: [
       "images/Silk-saree/silksaree1.jpeg",
       "images/Silk-saree/silksaree2.jpeg",
       "images/Silk-saree/silksaree3.jpeg",
       "images/Silk-saree/silksaree4.jpeg",
       "images/Silk-saree/silksaree5.jpeg",
       "images/Silk-saree/silksaree6.jpeg",
       "images/Silk-saree/silksaree7.jpeg",
       "images/Silk-saree/silksaree8.webp",
    ],
  },
   accessories: {
    title: "Accessories",
    description:
      "Add a touch of tradition and style with handcrafted Indian accessories that uplift any outfit.",
    images: [
       "images/indian-Accessories/accessories1.jpg",
       "images/indian-Accessories/accessories2.jpeg",
       "images/indian-Accessories/accessories3.jpeg",
       "images/indian-Accessories/accessories4.jpeg",
       "images/indian-Accessories/accessories5.jpeg",
       "images/indian-Accessories/accessories6.jpeg",
       "images/indian-Accessories/accessories7.jpeg",
       "images/indian-Accessories/accessories8.jpeg",
    ],
  },
};

// ✅ Collapse handler
if (closeDetailsBtn && productCards.length > 0 && productDetails) {
  closeDetailsBtn.addEventListener("click", () => {
    productDetails.classList.remove("expanded");
    productCards.forEach((card) => {
      card.classList.remove("active");
    });
  });
}

// ✅ Product card click logic
if (productCards.length > 0 && productDetails && detailsTitle && imageGallery && productDescription) {
  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const productId = this.dataset.product;
      const product = productData[productId];

      productCards.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");

      detailsTitle.textContent = product.title;
      productDescription.textContent = product.description;

      imageGallery.innerHTML = "";
      product.images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.className = "detail-image";
        img.alt = product.title;
        imageGallery.appendChild(img);
      });

      productDetails.classList.add("expanded");
    });
  });
}

// ✅ Scroll and drag logic
if (productContainer) {
  scrollLeftBtn?.addEventListener("click", () => {
    productContainer.scrollBy({ left: -320, behavior: "smooth" });
  });

  scrollRightBtn?.addEventListener("click", () => {
    productContainer.scrollBy({ left: 320, behavior: "smooth" });
  });

  let autoScrollInterval = setInterval(() => {
    productContainer.scrollBy({ left: 320, behavior: "smooth" });
  }, 5000);

  productContainer.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
  productContainer.addEventListener("mouseleave", () => {
    autoScrollInterval = setInterval(() => {
      productContainer.scrollBy({ left: 320, behavior: "smooth" });
    }, 5000);
  });

  // Drag scroll
  let isDragging = false;
  let startX;
  let scrollLeft;

  productContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - productContainer.offsetLeft;
    scrollLeft = productContainer.scrollLeft;
    productContainer.style.cursor = "grabbing";
  });

  productContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    productContainer.style.cursor = "grab";
  });

  productContainer.addEventListener("mouseup", () => {
    isDragging = false;
    productContainer.style.cursor = "grab";
  });

  productContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - productContainer.offsetLeft;
    const walk = x - startX;
    productContainer.scrollLeft = scrollLeft - walk;
  });
}
