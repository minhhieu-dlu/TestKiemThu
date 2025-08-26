const products = [
  {
    "id": "p1",
    "name": "Aero Headphones",
    "description": "Wireless over\u2011ear headphones with noise cancelling.",
    "price": 315.69,
    "category": "Audio",
    "rating": 5,
    "image": "https://picsum.photos/seed/p1/600/400"
  },
  {
    "id": "p2",
    "name": "Smartwatch Pro",
    "description": "Fitness tracking, GPS, and 5\u2011day battery life.",
    "price": 290.36,
    "category": "Wearables",
    "rating": 3,
    "image": "https://picsum.photos/seed/p2/600/400"
  },
  {
    "id": "p3",
    "name": "4K Action Camera",
    "description": "Compact camera with 4K60, waterproof case included.",
    "price": 637.75,
    "category": "Cameras",
    "rating": 3,
    "image": "https://picsum.photos/seed/p3/600/400"
  },
  {
    "id": "p4",
    "name": "Mechanical Keyboard",
    "description": "Hot\u2011swappable keys, RGB backlight, aluminum body.",
    "price": 442.02,
    "category": "Computers",
    "rating": 5,
    "image": "https://picsum.photos/seed/p4/600/400"
  },
  {
    "id": "p5",
    "name": "Studio Microphone",
    "description": "USB condenser mic for streaming & podcasts.",
    "price": 866.22,
    "category": "Audio",
    "rating": 4,
    "image": "https://picsum.photos/seed/p5/600/400"
  },
  {
    "id": "p6",
    "name": "Drone Air Mini",
    "description": "Foldable drone with 2\u2011axis gimbal, 2.7K video.",
    "price": 450.21,
    "category": "Drones",
    "rating": 5,
    "image": "https://picsum.photos/seed/p6/600/400"
  },
  {
    "id": "p7",
    "name": "Gaming Mouse Elite",
    "description": "High\u2011precision sensor, 8 programmable buttons.",
    "price": 237.06,
    "category": "Gaming",
    "rating": 3,
    "image": "https://picsum.photos/seed/p7/600/400"
  },
  {
    "id": "p8",
    "name": "Portable SSD 1TB",
    "description": "NVMe speed in a pocket\u2011size enclosure.",
    "price": 256.5,
    "category": "Accessories",
    "rating": 3,
    "image": "https://picsum.photos/seed/p8/600/400"
  },
  {
    "id": "p9",
    "name": "Noise Buds",
    "description": "True wireless earbuds with ANC & transparency.",
    "price": 394.86,
    "category": "Audio",
    "rating": 3,
    "image": "https://picsum.photos/seed/p9/600/400"
  },
  {
    "id": "p10",
    "name": "4K Monitor 27\"",
    "description": "IPS panel, 144Hz, HDR400, thin bezels.",
    "price": 730.35,
    "category": "Computers",
    "rating": 3,
    "image": "https://picsum.photos/seed/p10/600/400"
  },
  {
    "id": "p11",
    "name": "Smart Light Kit",
    "description": "Color\u2011changing LED with app & voice control.",
    "price": 342.96,
    "category": "Smart Home",
    "rating": 5,
    "image": "https://picsum.photos/seed/p11/600/400"
  },
  {
    "id": "p12",
    "name": "Action Gimbal",
    "description": "3\u2011axis stabilization for cameras & phones.",
    "price": 117.39,
    "category": "Accessories",
    "rating": 5,
    "image": "https://picsum.photos/seed/p12/600/400"
  },
  {
    "id": "p13",
    "name": "Phone X Max",
    "description": "6.7\" OLED, triple camera, 128GB.",
    "price": 790.16,
    "category": "Phones",
    "rating": 3,
    "image": "https://picsum.photos/seed/p13/600/400"
  },
  {
    "id": "p14",
    "name": "Phone X Mini",
    "description": "5.8\" OLED, dual camera, 128GB.",
    "price": 419.91,
    "category": "Phones",
    "rating": 3,
    "image": "https://picsum.photos/seed/p14/600/400"
  },
  {
    "id": "p15",
    "name": "VR Headset Go",
    "description": "Standalone VR with sharp display.",
    "price": 247.76,
    "category": "Gaming",
    "rating": 5,
    "image": "https://picsum.photos/seed/p15/600/400"
  },
  {
    "id": "p16",
    "name": "Bluetooth Speaker",
    "description": "Waterproof, 20h battery, deep bass.",
    "price": 125.25,
    "category": "Audio",
    "rating": 4,
    "image": "https://picsum.photos/seed/p16/600/400"
  },
  {
    "id": "p17",
    "name": "Webcam 2K",
    "description": "Auto\u2011focus with dual mics.",
    "price": 169.53,
    "category": "Computers",
    "rating": 3,
    "image": "https://picsum.photos/seed/p17/600/400"
  },
  {
    "id": "p18",
    "name": "Smart Thermostat",
    "description": "Schedules & energy saving.",
    "price": 629.17,
    "category": "Smart Home",
    "rating": 3,
    "image": "https://picsum.photos/seed/p18/600/400"
  },
  {
    "id": "p19",
    "name": "eBook Reader",
    "description": "6.8\" e\u2011ink, warm light.",
    "price": 144.82,
    "category": "Accessories",
    "rating": 3,
    "image": "https://picsum.photos/seed/p19/600/400"
  },
  {
    "id": "p20",
    "name": "Drone Explorer",
    "description": "Long\u2011range, obstacle sensing.",
    "price": 157.04,
    "category": "Drones",
    "rating": 5,
    "image": "https://picsum.photos/seed/p20/600/400"
  },
  {
    "id": "p21",
    "name": "Mirrorless Camera",
    "description": "APS\u2011C 24MP, 4K video.",
    "price": 875.15,
    "category": "Cameras",
    "rating": 3,
    "image": "https://picsum.photos/seed/p21/600/400"
  },
  {
    "id": "p22",
    "name": "Laptop Air 14",
    "description": "Lightweight, 16GB RAM, 512GB SSD.",
    "price": 491.93,
    "category": "Computers",
    "rating": 3,
    "image": "https://picsum.photos/seed/p22/600/400"
  },
  {
    "id": "p23",
    "name": "Gamepad Pro",
    "description": "Hall\u2011effect sticks, low\u2011latency.",
    "price": 126.99,
    "category": "Gaming",
    "rating": 5,
    "image": "https://picsum.photos/seed/p23/600/400"
  },
  {
    "id": "p24",
    "name": "Charging Station",
    "description": "65W GaN multi\u2011port charger.",
    "price": 361.45,
    "category": "Accessories",
    "rating": 5,
    "image": "https://picsum.photos/seed/p24/600/400"
  }
]

export default products
