const sadyaItemsComplete = [
  {
    name: "Ada Pradhaman",
    malayalam: "അട പ്രധമൻ (Ada Pradhamaṉ)",
    ingredients: ["Rice ada (flakes)", "Jaggery", "Coconut milk", "Cardamom"],
    significance: "Considered the 'King of Payasams,' this rich, sweet dessert is a prestigious finale to the Onam feast.",
    coordinates: { left: 110, top: 80, right: 185, bottom: 150 }
  },
  {
    name: "Paal Payasam",
    malayalam: "പാൽ പായസം (Pāl Pāyasam)",
    ingredients: ["Rice", "Milk", "Sugar", "Ghee"],
    significance: "A creamy and universally loved rice pudding, symbolizing sweetness and happiness.",
    coordinates: { left: 170, top: 155, right: 245, bottom: 220 }
  },
  {
    name: "Sambaram",
    malayalam: "സംഭാരം (Sambāram)",
    ingredients: ["Buttermilk", "Ginger", "Green Chili", "Curry Leaves"],
    significance: "Also known as spiced buttermilk, it's a refreshing and digestive drink served to cleanse the palate.",
    coordinates: { left: 260, top: 25, right: 360, bottom: 100 }
  },
  {
    name: "Paruppu Pradhaman",
    malayalam: "പരിപ്പ് പ്രധമൻ (Parippu Pradhamaṉ)",
    ingredients: ["Moong dal (lentils)", "Jaggery", "Coconut milk", "Ghee"],
    significance: "A traditional lentil-based payasam, offering an earthy and rich sweetness.",
    coordinates: { left: 350, top: 115, right: 425, bottom: 180 }
  },
  {
    name: "Kalan",
    malayalam: "കാളൻ (Kālan)",
    ingredients: ["Yam", "Raw banana", "Yogurt", "Black pepper"],
    significance: "A thick, yogurt-based curry with a distinct sour taste, considered very auspicious in Kerala feasts.",
    coordinates: { left: 255, top: 195, right: 315, bottom: 245 }
  },
  {
    name: "Erissery",
    malayalam: "എരിശ്ശേരി (Eriśśeri)",
    ingredients: ["Pumpkin", "Cowpeas", "Toasted coconut"],
    significance: "A mildly spiced dish made from pumpkin and lentils, representing the bounty of the harvest.",
    coordinates: { left: 320, top: 190, right: 405, bottom: 240 }
  },
  {
    name: "Avial",
    malayalam: "അവിയൽ (Aviyal)",
    ingredients: ["Mixed vegetables", "Coconut", "Yogurt", "Curry leaves"],
    significance: "A signature Sadya dish of mixed vegetables in a coconut gravy, symbolizing unity and harmony.",
    coordinates: { left: 410, top: 190, right: 465, bottom: 240 }
  },
  {
    name: "Beans Mezhukkupuratti",
    malayalam: "ബീൻസ് മെഴുക്കുപുരട്ടി",
    ingredients: ["Green Beans", "Coconut oil", "Onion", "Spices"],
    significance: "A simple and flavorful stir-fry where vegetables are coated (puratti) in oil (mezhukku).",
    coordinates: { left: 470, top: 195, right: 535, bottom: 240 }
  },
  {
    name: "Mambazha Pulissery",
    malayalam: "മാമ്പഴ പുളിശ്ശേരി",
    ingredients: ["Ripe Mango", "Yogurt", "Coconut"],
    significance: "A delightful sweet and sour curry made with ripe mangoes, celebrating seasonal flavors.",
    coordinates: { left: 540, top: 195, right: 610, bottom: 245 }
  },
  {
    name: "Salt",
    malayalam: "ഉപ്പ് (Uppu)",
    ingredients: ["Salt"],
    significance: "Represents the fundamental taste and is served first as a mark of respect to the basic element of flavor.",
    coordinates: { left: 110, top: 255, right: 155, bottom: 280 }
  },
  {
    name: "Mango Pickle",
    malayalam: "മാങ്ങാ അച്ചാർ (Māṅṅa Achār)",
    ingredients: ["Raw mango", "Chili powder", "Mustard oil"],
    significance: "A spicy and tangy pickle that excites the palate and aids digestion.",
    coordinates: { left: 110, top: 285, right: 165, bottom: 325 }
  },
  {
    name: "Inji Puli",
    malayalam: "ഇഞ്ചിപ്പുളി (Injippuli)",
    ingredients: ["Ginger", "Tamarind", "Jaggery", "Green Chilies"],
    significance: "A sweet, sour, and spicy paste-like pickle that is a quintessential part of any Sadya.",
    coordinates: { left: 170, top: 280, right: 220, bottom: 320 }
  },
  {
    name: "Sarkara Upperi",
    malayalam: "ശർക്കര ഉപ്പേരി (Śarkkara Upperi)",
    ingredients: ["Raw banana", "Jaggery", "Ginger powder", "Cardamom"],
    significance: "A sweet chip where raw banana pieces are coated in melted jaggery and spices.",
    coordinates: { left: 140, top: 190, right: 235, bottom: 245 }
  },
  {
    name: "Nendran Chips",
    malayalam: "നേന്ത്രക്കായ വറുത്തത്",
    ingredients: ["Raw Nendran banana", "Coconut oil", "Salt"],
    significance: "Iconic crispy chips from Kerala, fried in coconut oil, offering a savory crunch.",
    coordinates: { left: 190, top: 240, right: 275, bottom: 320 }
  },
  {
    name: "Kootu Curry",
    malayalam: "കൂട്ടുകറി (Kootu Kari)",
    ingredients: ["Black chickpeas", "Plantain", "Toasted coconut"],
    significance: "A thick, semi-dry curry that combines vegetables and legumes, representing strength.",
    coordinates: { left: 280, top: 245, right: 355, bottom: 300 }
  },
  {
    name: "Olan",
    malayalam: "ഓലൻ (Ōlan)",
    ingredients: ["Ash gourd", "Cowpeas", "Coconut milk"],
    significance: "A very light and subtle dish cooked in thin coconut milk, symbolizing purity and simplicity.",
    coordinates: { left: 360, top: 255, right: 405, bottom: 305 }
  },
  {
    name: "Cabbage Thoran",
    malayalam: "കാബേജ് തോരൻ",
    ingredients: ["Cabbage", "Grated coconut", "Green chilies", "Mustard seeds"],
    significance: "A simple, dry stir-fry with shredded cabbage and coconut, symbolizing daily nourishment.",
    coordinates: { left: 410, top: 255, right: 480, bottom: 305 }
  },
  {
    name: "Cucumber Kichadi",
    malayalam: "വെള്ളരിക്ക കിച്ചടി",
    ingredients: ["Cucumber", "Yogurt", "Mustard seeds", "Coconut"],
    significance: "A cooling yogurt-based side dish that provides a refreshing contrast to spicier items.",
    coordinates: { left: 485, top: 260, right: 545, bottom: 305 }
  },
  {
    name: "Pineapple Pachadi",
    malayalam: "പൈനാപ്പിൾ പച്ചടി",
    ingredients: ["Pineapple", "Yogurt", "Coconut", "Mustard seeds"],
    significance: "A sweet and tangy yogurt-based curry that adds a festive and vibrant flavor to the meal.",
    coordinates: { left: 550, top: 255, right: 615, bottom: 300 }
  },
  {
    name: "Parippu Curry",
    malayalam: "പരിപ്പ് കറി (Parippu Kari)",
    ingredients: ["Moong dal", "Coconut", "Ghee", "Spices"],
    significance: "A simple dal curry, traditionally the first dish to be mixed with rice and ghee, symbolizing comfort.",
    coordinates: { left: 515, top: 295, right: 575, bottom: 350 }
  },
  {
    name: "Rasam",
    malayalam: "രസം (Rasam)",
    ingredients: ["Tamarind", "Tomato", "Black pepper", "Garlic"],
    significance: "A tangy and spicy soup-like dish that aids digestion and clears the palate.",
    coordinates: { left: 575, top: 300, right: 630, bottom: 350 }
  },
  {
    name: "Moru Curry",
    malayalam: "മോര് കറി (Moru Kari)",
    ingredients: ["Buttermilk", "Coconut", "Spices"],
    significance: "A cooling, yogurt-based dish that balances the heat from other curries and aids digestion.",
    coordinates: { left: 515, top: 355, right: 575, bottom: 410 }
  },
  {
    name: "Sambar",
    malayalam: "സാംബാർ (Sambār)",
    ingredients: ["Toor dal", "Tamarind", "Mixed vegetables", "Spices"],
    significance: "A flavorful lentil-based stew with vegetables, a cornerstone of South Indian cuisine.",
    coordinates: { left: 575, top: 355, right: 630, bottom: 410 }
  },
  {
    name: "Choru",
    malayalam: "ചോറ്",
    ingredients: ["Parboiled rice"],
    significance: "The staple base of the Sadya, symbolizing prosperity and abundance. All other dishes revolve around it.",
    coordinates: { left: 275, top: 310, right: 510, bottom: 430 }
  },
  {
    name: "Papadam",
    malayalam: "പപ്പടം (Pappaṭam)",
    ingredients: ["Urad dal flour", "Salt"],
    significance: "A crispy, fried wafer that adds a delightful crunch and is often crushed over rice.",
    coordinates: { left: 135, top: 325, right: 285, bottom: 430 }
  },
  {
    name: "Banana",
    malayalam: "പഴം (Pazham)",
    ingredients: ["Ripe Banana"],
    significance: "Eaten as a sweet counterpart, often mashed with pappadam and payasam to create a unique dessert.",
    coordinates: { left: 65, top: 310, right: 130, bottom: 420 }
  }
];

export default sadyaItemsComplete;
