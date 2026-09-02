
import men from "../assets/men.jpg"
import tomar from '../assets/tomar.jpeg'

export const products = [
  {
    id: 1,
    name: "Oversized Wool Blazer",
    category: "Women",
    price: 149,
    oldPrice: 199,
    rating: 4.8,
    reviews: 124,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Stone"],
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    description:
      "A refined oversized silhouette cut from a warm wool blend. Designed for polished layering through the season.",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Essential Denim jacket",
    category: "Men",
    price: 39,
    oldPrice: 49,
    rating: 4.6,
    reviews: 208,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Olive"],
    image:men,
      // "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    description:
      "A heavyweight cotton essential with a relaxed fit and clean neckline. Built for everyday wear.",
  },
  {
    id: 3,
    name: "Leather Mini Shoulder Bag",
    category: "Accessories",
    price: 119,
    oldPrice: 159,
    rating: 4.9,
    reviews: 87,
    sizes: ["One Size"],
    colors: ["Black", "Tan"],
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    description:
      "Compact yet spacious, this structured leather shoulder bag adds a sharp finish to any look.",
    badge: "New",
  },
  {
    id: 4,
    name: "Studio Runner Sneakers",
    category: "Shoes",
    price: 129,
    oldPrice: 169,
    rating: 4.7,
    reviews: 153,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Cream", "Black"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    description:
      "Minimal everyday sneakers with a cushioned sole and streamlined profile.",
    badge: "Trending",
  },
  {
    id: 5,
    name: "Satin Slip Dress",
    category: "Women",
    price: 109,
    oldPrice: 149,
    rating: 4.8,
    reviews: 94,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Black"],
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
    description:
      "Fluid satin drape, delicate straps and an effortless midi length for evenings and events.",
  },
  {
    id: 6,
    name: "Relaxed Linen Shirt",
    category: "Men",
    price: 79,
    oldPrice: 99,
    rating: 4.5,
    reviews: 76,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sand", "White", "Blue"],
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
    description:
      "Breathable linen with a relaxed silhouette that transitions easily from city days to weekends.",
  },
  {
    id: 7,
    name: "Sculpted Hoop Earrings",
    category: "Accessories",
    price: 45,
    oldPrice: 59,
    rating: 4.7,
    reviews: 61,
    sizes: ["One Size"],
    colors: ["Gold", "Silver"],
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
    description:
      "Bold sculptural hoops with a lightweight feel and polished finish.",
  },
  {
    id: 8,
    name: "Cloud Knit Cardigan",
    category: "Women",
    price: 89,
    oldPrice: 119,
    rating: 4.9,
    reviews: 112,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Oat", "Grey"],
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",
    description:
      "Soft textured knit with a relaxed shape for effortless layering.",
    badge: "New",
  },
  {
    id: 9,
    name: "Straight Leg Denim",
    category: "Men",
    price: 85,
    oldPrice: 110,
    rating: 4.6,
    reviews: 135,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Indigo", "Black"],
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    description:
      "Classic straight-leg denim with a comfortable mid-rise and durable finish.",
  },
  {
    id: 10,
    name: "Platform Leather Loafers",
    category: "Shoes",
    price: 139,
    oldPrice: 179,
    rating: 4.8,
    reviews: 59,
    sizes: ["6", "7", "8", "9", "10"],
    colors: ["Black", "Burgundy"],
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=85",
    description:
      "A contemporary platform sole elevates the classic loafer while keeping it versatile.",
  },
  {
    id: 11,
    name: "Tailored Wide-Leg Trousers",
    category: "Women",
    price: 99,
    oldPrice: 129,
    rating: 4.7,
    reviews: 73,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Grey"],
    image:
      "https://images.unsplash.com/photo-1506629905607-d9a5a8b3b1a2?auto=format&fit=crop&w=900&q=85",
    description:
      "High-waisted tailoring with a fluid wide leg and crisp pleat detail.",
  },
  {
    id: 12,
    name: "Minimal Chronograph Watch",
    category: "Accessories",
    price: 159,
    oldPrice: 199,
    rating: 4.8,
    reviews: 48,
    sizes: ["One Size"],
    colors: ["Steel", "Black"],
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
    description:
      "A clean chronograph face, brushed metal case and timeless proportions.",
  },
];

export const categories = [
  {
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Shoes",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1000&q=85",
  },
];
