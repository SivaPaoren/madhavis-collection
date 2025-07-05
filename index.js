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
  kurti: {
    title: "Traditional Thai Dress",
    description:
      "Exquisite handcrafted traditional Thai dress made from premium silk with intricate golden embroidery...",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-cdc7b1b8c498?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
    ],
  },
  lahenga: {
    title: "Handmade Accessories",
    description:
      "Beautiful collection of handmade accessories including jewelry, bags, and decorative items...",
    images: [
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop",
    ],
  },
  saree: {
    title: "Modern Fusion Outfit",
    description:
      "Contemporary fusion wear that blends traditional Indian elements with modern styling...",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-cdc7b1b8c498?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
    ],
  },
  kurti2: {
    title: "Elegant Kurta Collection",
    description:
      "Premium kurta collection featuring elegant designs and superior craftsmanship...",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-cdc7b1b8c498?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300&h=200&fit=crop",
    ],
  },
  lahenga2: {
    title: "Bridal Accessories",
    description:
      "Stunning bridal accessories collection including jewelry sets, hair accessories, and decorative items...",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=300&h=200&fit=crop",
    ],
  },
  saree2: {
    title: "Designer Saree Collection",
    description:
      "Exclusive designer saree collection featuring premium fabrics, intricate embroidery...",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733981-cdc7b1b8c498?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300&h=200&fit=crop",
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
