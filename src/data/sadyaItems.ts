const sadyaItemsComplete = [
  {
    name: "Ada Pradhaman",
    malayalam: "അട പ്രധമൻ (Ada Pradhamaṉ)",
    ingredients: ["Rice ada (flakes)", "Jaggery", "Coconut milk", "Cardamom"],
    image: "/assets/ada_pradhaman.png",
    significance: "Considered the 'King of Payasams,' this rich, sweet dessert is a prestigious finale to the Onam feast.",
    coordinates: { left: 90, top: 40, right: 130, bottom: 70 }
  },
  {
    name: "Paal Payasam",
    malayalam: "പാൽ പായസം (Paal Payasam)",
    ingredients: ["Rice", "Milk", "Sugar", "Ghee"],
    image: "/assets/paal_payasam.png",
    significance: "A creamy and universally loved rice pudding, symbolizing sweetness and happiness.",
    coordinates: { left: 140, top: 70, right: 200, bottom: 120 }
  },
  {
    name: "Sambaram",
    malayalam: "സംഭാരം (Sambaaram)",
    ingredients: ["Buttermilk", "Ginger", "Green Chili", "Curry Leaves"],
    image: "/assets/sambaram.png",
    significance: "Also known as spiced buttermilk, it's a refreshing and digestive drink served to cleanse the palate.",
    coordinates: { left: 150, top: 15, right: 200, bottom: 55 }
  },
  {
    name: "Paruppu Pradhaman",
    malayalam: "പരിപ്പ് പ്രധമൻ (Parippu Pradhamaṉ)",
    ingredients: ["Moong dal (lentils)", "Jaggery", "Coconut milk", "Ghee"],
    image: "/assets/parippu_payasam.png",
    significance: "A traditional lentil-based payasam, offering an earthy and rich sweetness.",
    coordinates: { left: 210, top: 50, right: 260, bottom: 80 }
  },
  {
    name: "Kalan",
    malayalam: "കാളൻ (Kaalan)",
    ingredients: ["Yam", "Raw banana", "Yogurt", "Black pepper"],
    image: "/assets/kalan.png",
    significance: "A thick, yogurt-based curry with a distinct sour taste, considered very auspicious in Kerala feasts.",
    coordinates: { left: 200, top: 150, right: 260, bottom: 200 }
  },
  {
    name: "Erissery",
    malayalam: "എരിശ്ശേരി (Erisseri)",
    ingredients: ["Pumpkin", "Cowpeas", "Toasted coconut"],
    image: "/assets/erissery.png",
    significance: "A mildly spiced dish made from pumpkin and lentils, representing the bounty of the harvest.",
    coordinates: { left: 270, top: 130, right: 340, bottom: 180 }
  },
  {
    name: "Avial",
    malayalam: "അവിയൽ (Aviyal)",
    ingredients: ["Mixed vegetables", "Coconut", "Yogurt", "Curry leaves"],
    image: "/assets/avial.png",
    significance: "A signature Sadya dish of mixed vegetables in a coconut gravy, symbolizing unity and harmony.",
    coordinates: { left: 360, top: 110, right: 410, bottom: 160 }
  },
  {
    name: "Beans Mezhukkupuratti",
    malayalam: "ബീൻസ് മെഴുക്കുപുരട്ടി",
    ingredients: ["Green Beans", "Coconut oil", "Onion", "Spices"],
    image: "/assets/beans.png",
    significance: "A simple and flavorful stir-fry where vegetables are coated (puratti) in oil (mezhukku).",
    coordinates: { left: 430, top: 110, right: 470, bottom: 160 }
  },
  {
    name: "Mambazha Pulissery",
    malayalam: "മാമ്പഴ പുളിശ്ശേരി",
    ingredients: ["Ripe Mango", "Yogurt", "Coconut"],
    image: "/assets/mambazha_pulissery.png",
    significance: "A delightful sweet and sour curry made with ripe mangoes, celebrating seasonal flavors.",
    coordinates: { left: 500, top: 100, right: 540, bottom: 140 }
  },
  {
    name: "Salt",
    malayalam: "ഉപ്പ് (Uppu)",
    ingredients: ["Salt"],
    image: "/assets/salt.png",
    significance: "Represents the fundamental taste and is served first as a mark of respect to the basic element of flavor.",
    coordinates: { left: 50, top: 200, right: 70, bottom: 230 }
  },
  {
    name: "Mango Pickle",
    malayalam: "മാങ്ങാ അച്ചാർ (Manga Achar)",
    ingredients: ["Raw mango", "Chili powder", "Mustard oil"],
    image: "/assets/mango_pickle.png",
    significance: "A spicy and tangy pickle that excites the palate and aids digestion.",
    coordinates: { left: 40, top: 245, right: 80, bottom: 280 }
  },
  {
    name: "Inji Puli",
    malayalam: "ഇഞ്ചിപ്പുളി (Injippuli)",
    ingredients: ["Ginger", "Tamarind", "Jaggery", "Green Chilies"],
    image: "/assets/injippuli.png",
    significance: "A sweet, sour, and spicy paste-like pickle that is a quintessential part of any Sadya.",
    coordinates: { left: 80, top: 230, right: 110, bottom: 260 }
  },
  {
    name: "Sarkara Upperi",
    malayalam: "ശർക്കര ഉപ്പേരി (Sarkkara Upperi)",
    ingredients: ["Raw banana", "Jaggery", "Ginger powder", "Cardamom"],
    image: "/assets/sarkara.png",
    significance: "A sweet chip where raw banana pieces are coated in melted jaggery and spices.",
    coordinates: { left: 110, top: 170, right: 150, bottom: 210 }
  },
  {
    name: "Nendran Chips",
    malayalam: "കായ വറുത്തത്(Kaya varuthath)",
    ingredients: ["Raw Nendran banana", "Coconut oil", "Salt"],
    image: "/assets/chips.png",
    significance: "Iconic crispy chips from Kerala, fried in coconut oil, offering a savory crunch.",
    coordinates: { left: 130, top: 215, right: 190, bottom: 270 }
  },
  {
    name: "Kootu Curry",
    malayalam: "കൂട്ടുകറി (Kootu Kari)",
    ingredients: ["Black chickpeas", "Plantain", "Toasted coconut"],
    image: "/assets/koottu_curry.png",
    significance: "A thick, semi-dry curry that combines vegetables and legumes, representing strength.",
    coordinates: { left: 220, top: 210, right: 290, bottom: 260 }
  },
  {
    name: "Olan",
    malayalam: "ഓലൻ (Olan)",
    ingredients: ["Ash gourd", "Cowpeas", "Coconut milk"],
    image: "/assets/olan.png",
    significance: "A very light and subtle dish cooked in thin coconut milk, symbolizing purity and simplicity.",
    coordinates: { left: 320, top: 190, right: 360, bottom: 240 }
  },
  {
    name: "Cabbage Thoran",
    malayalam: "കാബേജ് തോരൻ(Cabbage Thoran)",
    ingredients: ["Cabbage", "Grated coconut", "Green chilies", "Mustard seeds"],
    image: "/assets/cabbage.png",
    significance: "A simple, dry stir-fry with shredded cabbage and coconut, symbolizing daily nourishment.",
    coordinates: { left: 390, top: 180, right: 450, bottom: 230 }
  },
  {
    name: "Cucumber Kichadi",
    malayalam: "വെള്ളരിക്ക കിച്ചടി(Cucumber Kichadi)",
    ingredients: ["Cucumber", "Yogurt", "Mustard seeds", "Coconut"],
    image: "/assets/cucumber.png",
    significance: "A cooling yogurt-based side dish that provides a refreshing contrast to spicier items.",
    coordinates: { left: 460, top: 180, right: 510, bottom: 220 }
  },
  {
    name: "Pineapple Pachadi",
    malayalam: "പൈനാപ്പിൾ പച്ചടി(Pineapple Pachadi)",
    ingredients: ["Pineapple", "Yogurt", "Coconut", "Mustard seeds"],
    image: "/assets/pineapple.png",
    significance: "A sweet and tangy yogurt-based curry that adds a festive and vibrant flavor to the meal.",
    coordinates: { left: 525, top: 170, right: 570, bottom: 220 }
  },
  {
    name: "Parippu Curry",
    malayalam: "പരിപ്പ് കറി (Parippu Kari)",
    ingredients: ["Moong dal", "Coconut", "Ghee", "Spices"],
    image: "/assets/parippu.png",
    significance: "A simple dal curry, traditionally the first dish to be mixed with rice and ghee, symbolizing comfort.",
    coordinates: { left: 470, top: 250, right: 520, bottom: 300 }
  },
  {
    name: "Rasam",
    malayalam: "രസം (Rasam)",
    ingredients: ["Tamarind", "Tomato", "Black pepper", "Garlic"],
    image: "/assets/rasam.png",
    significance: "A tangy and spicy soup-like dish that aids digestion and clears the palate.",
    coordinates: { left: 535, top: 250, right: 590, bottom: 300 }
  },
  {
    name: "Moru Curry",
    malayalam: "മോര് കറി (Moru Kari)",
    ingredients: ["Buttermilk", "Coconut", "Spices"],
    image: "/assets/moru.png",
    significance: "A cooling, yogurt-based dish that balances the heat from other curries and aids digestion.",
    coordinates: { left: 470, top: 310, right: 525, bottom: 360 }
  },
  {
    name: "Sambar",
    malayalam: "സാംബാർ (Sambār)",
    ingredients: ["Toor dal", "Tamarind", "Mixed vegetables", "Spices"],
    image: "/assets/sambar.png",
    significance: "A flavorful lentil-based stew with vegetables, a cornerstone of South Indian cuisine.",
    coordinates: { left: 545, top: 305, right: 600, bottom: 355 }
  },
  {
    name: "Choru",
    malayalam: "ചോറ്(Choru)",
    ingredients: ["Parboiled rice"],
    image: "/assets/choru.png",
    significance: "The staple base of the Sadya, symbolizing prosperity and abundance. All other dishes revolve around it.",
    coordinates: { left: 275, top: 280, right: 440, bottom: 395 }
  },
  {
    name: "Papadam",
    malayalam: "പപ്പടം (Pappadam)",
    ingredients: ["Urad dal flour", "Salt"],
    image: "/assets/pappadam.png",
    significance: "A crispy, fried wafer that adds a delightful crunch and is often crushed over rice.",
    coordinates: { left: 125, top: 290, right: 245, bottom: 400 }
  },
  {
    name: "Banana",
    malayalam: "പഴം (Pazham)",
    ingredients: ["Ripe Banana"],
    image: "/assets/banana.png",
    significance: "Eaten as a sweet counterpart, often mashed with pappadam and payasam to create a unique dessert.",
    coordinates: { left: 65, top: 300, right: 120, bottom: 410 }
  }
];

export default sadyaItemsComplete;