const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        images: [
            "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_0cd6ae5a-8ea9-4e46-8b5e-fffb7da5e6f5.d4808578fda9397ec198b2d5dec46404.jpeg",
            "https://m.media-amazon.com/images/I/7144wjU570L._AC_SL1500_.jpg",
        ],
        description: "High-quality wireless headphones with noise cancellation and long battery life.",
        category: "Electronics",
        price: 99.99,
        cutOffPrice: 149.99,
    },
    {
        id: 2,
        title: "Smartwatch",
        images: [
            "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
            "https://rukminim1.flixcart.com/image/300/300/kzpw2vk0/smartwatch/b/1/p/43-18-android-ios-x5n1pbsb65360-pa-maxima-no-original-imagbnxvhygz6hzp.jpeg",
        ],
        description: "Feature-packed smartwatch with fitness tracking and customizable watch faces.",
        category: "Electronics",
        price: 199.99,
        cutOffPrice: null,
    },
    {
        id: 3,
        title: "Wireless Charger",
        images: [
            "https://swot.ng/wp-content/uploads/2023/12/A2503014.jpg",
            "https://www.cnet.com/a/img/resize/8dfd582b861be518dcb968d1f1b6de01ef114961/hub/2023/02/28/9da2e9c7-d07d-45cb-89d1-18c7013249e5/anker-315-wireless-charger.png?auto=webp&fit=crop&height=900&width=1200"
        ],
        description: "Fast wireless charger compatible with multiple devices.",
        category: "Electronics",
        price: 49.99,
        cutOffPrice: 59.99,
    },
    {
        id: 4,
        title: "Running Shoes",
        images: [
            "https://jormatrail.com/802334-home_default/running-shoes-asics-gel-pluse-14.jpg",
            "https://cdn.thewirecutter.com/wp-content/media/2023/09/running-shoes-2048px-5946.jpg?auto=webp&quality=75&width=1024"
        ],
        description: "Lightweight running shoes designed for comfort and performance.",
        category: "Footwear",
        price: 79.99,
        cutOffPrice: 99.99,
    },
    {
        id: 5,
        title: "Yoga Mat",
        images: [
            "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFLczF1bmM5R0wuX0FDX1NMMTUwMF8uanBn.jpg",
            "https://m.media-amazon.com/images/I/61q3t8SaXlL._AC_UF894,1000_QL80_.jpg",
        ],
        description: "Eco-friendly yoga mat with extra cushioning for a comfortable workout.",
        category: "Footwear",
        price: 29.99,
        cutOffPrice: null,
    },
    {
        id: 6,
        title: "Hiking Boots",
        images: [
            "https://m.media-amazon.com/images/I/71AL0qiLmKL._AC_SL1500_.jpg",
        ],
        description: "Sturdy hiking boots with waterproof material and excellent traction.",
        category: "Footwear",
        price: 109.99,
        cutOffPrice: 129.99,
    },
    {
        id: 7,
        title: "Gaming Chair",
        images: [
            "https://m.media-amazon.com/images/I/71y9SgG-XaS.jpg",
            "https://cellbell.in/cdn/shop/files/CellBellGmaingChairs_5.png?v=1715174967&width=1946",
        ],
        description: "Comfortable gaming chair with lumbar support and adjustable height.",
        category: "Furniture",
        price: 199.99,
        cutOffPrice: 249.99,
    },
    {
        id: 8,
        title: "Laptop Stand",
        images: [
            "https://www.alogic.co.nz/cdn/shop/products/media-40523_1_e51e75b9-68b3-496d-9afb-f6cd6eb31a36.jpg?v=1692588257&width=2048",
            "https://www.takeaseat.sg/wp-content/uploads/2022/02/H1-Portable-Laptop-Stand-15.jpg"
        ],
        description: "Adjustable laptop stand with ergonomic design for comfortable use.",
        category: "Furniture",
        price: 29.99,
        cutOffPrice: 39.99,
    },
    {
        id: 9,
        title: "Office Desk",
        images: [
            "https://www.decorhubng.com/wp-content/uploads/2019/05/Office-3.jpg",
            "https://cdn3.evostore.io/productimages/dams/l/mp16wrp3go.jpg",
        ],
        description: "Spacious office desk with a modern design and sturdy build.",
        category: "Furniture",
        price: 299.99,
        cutOffPrice: 349.99,
    },
    {
        id: 10,
        title: "Coffee Maker",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsqAvBHhCLbSdIOYysN11yyjERM6_vvN9Kw&s",
            "https://m.media-amazon.com/images/I/417p59K0+4S.jpg",
        ],
        description: "Automatic coffee maker with programmable settings and a built-in grinder.",
        category: "Kitchen Appliances",
        price: 129.99,
        cutOffPrice: null,
    },
    {
        id: 11,
        title: "Blender",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgxfbI7OC-vISlN6hPPeqfU_cEHK_4WCOnkQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmyPTVvvV_GbDCQQtRdRN89KdZ5-Qtg_03occtmKcM3tLQgr-JH0lA6mSekXe3lcs-y94&usqp=CAU",
        ],
        description: "High-speed blender perfect for smoothies, soups, and sauces.",
        category: "Kitchen Appliances",
        price: 79.99,
        cutOffPrice: 99.99,
    },
    {
        id: 12,
        title: "Toaster",
        images: [
            "https://m.media-amazon.com/images/I/617t9A+M42L._AC_UF894,1000_QL80_.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuLYXmmU_dAgQAckgRQVEuHdL3TADmro1-mBxTtenMxr3v-mMEfNhSCx_P6cPY4sWf9I&usqp=CAU",
        ],
        description: "Two-slice toaster with browning control and a removable crumb tray.",
        category: "Kitchen Appliances",
        price: 39.99,
        cutOffPrice: 49.99,
    },
];

export default products;
