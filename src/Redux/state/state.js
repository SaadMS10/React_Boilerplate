const INITIAL_STATE= [
    {
      id: 1,
      price: 500,
  
      name: "Nike Air Force 1 '07",
      img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.jpg",
      alt:
        "The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    quantity:0,
    added: false,
      },
    {
      id: 2,
      price: 500,
      name: "Nike Air Max 1 ",
  
      img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/75b7368c-8873-4662-9f89-157bd2cfb97f/air-max-1-mens-shoe-JHnTbx.jpg",
  
      alt:
        "The Nike Air Max 1 reboots the legendary design that has reigned supreme since 1987. Crossing street fashion with sport, it takes the same lightweight cushioning and classic silhouette of the OG and boldly reworks it with salvaged materials, fresh colors and exposed stitching.",
        quantity:0,
        added: false,
      },
  
    {
      id: 3,
      price: 500,
      name: "Air Jordan 1 Zoom Cmft",
      img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/20189555-1a73-47b6-b2b7-e740c21f5aec/air-jordan-1-zoom-cmft-shoe-VS0bVF.jpg",
  
      alt:
        "Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit.",
        quantity:0,
        added: false,
      },
    {
      id: 4,
      price: 500,
      name: "Nike SuperRep Cycle ",
      img:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a164a629-1353-4f02-85e5-62fed505f738/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
      alt:
        "The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forward. Cleats are not included.",
        quantity:0,
        added: false,
      },
    {
      id: 5,
      price: 500,
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      alt:
        "The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forward. Cleats are not included.",
        quantity:0,
        added: false,
      },
  
    {
      id: 6,
      price: 500,
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      alt:
        "The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forward. Cleats are not included.",
        quantity:0,
        added: false,
      },
    {
      id: 7,
      price: 500,
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      alt:
        "The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forward. Cleats are not included.",
        quantity:0,
        added: false,
      },
    {
      id: 8,
      price: 500,
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      alt:
        "The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forward. Cleats are not included.",
    
    quantity:0,
    added: false,
      },
  ]
// const INITIAL_STATE={
   
//   "Nike Air Force 1 '07": {
//     "id": 1,
//     "price": 500,
//       "name": "Nike Air Force 1 '07",
//       "img":
//         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.jpg",
//       "img1":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/15bcd4d6-2636-4e9d-8b90-47d556a2cc0a/air-force-1-07-mens-shoe-5QFp5Z.jpg",
//       "alt":"The radiance lives on in the Nike Air Force 1 ’07, the b-ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine."
//     },
//     "Nike Air Max 1": {
//       "id": 2,
//       "price": 500,
//       "name": "Nike Air Max 1 ",
      
//       "img":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/75b7368c-8873-4662-9f89-157bd2cfb97f/air-max-1-mens-shoe-JHnTbx.jpg",
//       "img1":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ca61ecaf-62f5-4dc4-aba7-e304cf66189f/air-max-1-mens-shoe-JHnTbx.jpg",
//       "alt": "The Nike Air Max 1 reboots the legendary design that has reigned supreme since 1987. Crossing street fashion with sport, it takes the same lightweight cushioning and classic silhouette of the OG and boldly reworks it with salvaged materials, fresh colors and exposed stitching."
//     },
   
//     "Air Jordan 1 Zoom Cmft": {
//       "id": 3,
//       "price": 500,
//       "name": "Air Jordan 1 Zoom Cmft",
//       "img":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/20189555-1a73-47b6-b2b7-e740c21f5aec/air-jordan-1-zoom-cmft-shoe-VS0bVF.jpg",
//       "img1":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/81ecf141-aef0-4967-9463-57bff471541c/air-jordan-1-zoom-cmft-shoe-VS0bVF.jpg",
//       "alt":"Making iconic style even more comfortable. The Air Jordan 1 Zoom Cmft remakes the 1st Air Jordan with lightweight, low-profile cushioning and elements that improve wearability. Leathers and textiles in the upper have a broken-in feel. A lined, padded collar cups the heel for a secure fit."
//     },
//     "Nike SuperRep Cycle": {
//       "id": 4,
//       "price": 500,
//       "name": "Nike SuperRep Cycle ",
//       "img":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/a164a629-1353-4f02-85e5-62fed505f738/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
//       "img1":"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c220c6f5-8fa7-4ff9-84c1-c9bb019e5d71/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg",
//       "alt":"The Nike SuperRep Cycle brings a breathable design to the high-heat, fast pace of indoor cycling. Adjustable straps secure your foot during intense movement as you push forward. Cleats are not included."
//     },

//     "air-jordan-3-valor-blue": {
//       "id": "5",
//       "price": 500,
//       "name": "VALOUR BLUE",
//       "img":
//         "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//     },
 
//   "jordan-mars-270-london": {
//     "id": "6",
//     "price": 500,
//     "name": "JORDAN MARS 270 LONDON",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "air-jordan-1-zoom-racer-blue": {
//     "id": 7,
//     "price": 500,
//     "name": "RACER BLUE",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },

//   "air-jordan-1-zoom-racer-blue3": {
//     "id": 8,
//     "price": 500,
//     "name": "RACER BLUE",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   }
// }
  
  export  {INITIAL_STATE};
  