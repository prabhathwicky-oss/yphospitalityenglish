const ypCurriculum = {
  founder: {
    title: "Introducing Your Trainer: Mr. Prabhath",
    desc: "Practice speaking about your trainer. You must follow this exact 6-step sequence out loud:",
    facts: [
      { label: "1. Name", text: "My trainer's name is Mr. Prabhath Wickramasinghe." },
      { label: "2. Age", text: "He is an energetic executive with over a decade of senior hospitality leadership experience." },
      { label: "3. Location", text: "He is based in Colombo, managing regional educational operations." },
      { label: "4. Education", text: "He holds an MBA from Staffordshire University and completed executive training at Harvard Business School." },
      { label: "5. Hobby", text: "In his free time, he is a passionate chess player and a creative writer." },
      { label: "6. Target", text: "His ultimate target is to empower YP Education students to become international luxury hotel leaders." }
    ]
  },
  grooming: {
    title: "Grooming Visual Verification Station",
    desc: "Luxury standard begins before you step out. Complete your checklist and snap real-time photos of your Face, Teeth, and Fingers to ensure verification.",
    pillars: [
      { id: "face", area: "1. Well-Groomed Face & Smile", rule: "Hair neatly combed, clear off the face and collar. Smile brightly to convey warmth to arriving guests." },
      { id: "teeth", area: "2. Dental Cleanliness & Teeth Check", rule: "Ensure perfect oral hygiene. Teeth must look spotlessly clean and fresh before interactions." },
      { id: "fingers", area: "3. Hands & Fingers Presentation", rule: "Nails cut short, metals clean, free from chips or bright, unprofessional polishes." }
    ]
  },
  tone: {
    title: "Vocal Mechanics & Tone Calibration",
    desc: "How we sound determines how valued the guest feels. Listen to standard guidelines and implement these voice mechanics:",
    pillars: [
      { element: "The Vocal Smile", tip: "Always smile immediately before speaking or picking up the telephone receiver. It dynamically lifts tone warmth." },
      { element: "Pacing Regulation", tip: "Maintain a steady rhythm of roughly 130 words per minute. Fast speech implies confusion; slow speech conveys fatigue." },
      { element: "Acoustic Volume control", tip: "Keep vocal production to moderate conversational ranges. Never call out across rooms; approach closely to talk." }
    ]
  },
  greetings: {
    title: "Greetings, Farewells & Phone Blueprint",
    desc: "Step-by-step script templates for guest engagement floor patterns and supervisor escalations.",
    sections: [
      {
        label: "Floor Reception Patterns",
        steps: [
          "<strong>Arrival Script:</strong> 'Good morning/afternoon/evening, welcome to The YP Hotel. My name is [Name], how may I assist you today?'",
          "<strong>Departure Script:</strong> 'Thank you for staying with us, Mr./Ms. [Name]. We look forward to welcoming you back soon. Have a wonderful journey.'"
        ]
      },
      {
        label: "Telephone Answering Standards",
        steps: [
          "<strong>The 3-Ring Protocol:</strong> Answer lines before the third chime tone. Form a calm expression before answering.",
          "<strong>The Script:</strong> 'Thank you for calling The YP Hotel, [Department], this is [Name] speaking. How may I direct your call today?'"
        ]
      },
      {
        label: "Escalation to a Supervisor",
        steps: [
          "<strong>Step 1 (Seek Permission):</strong> 'Mr. Jones, to ensure you receive the most accurate assistance, may I place you on a brief hold while I coordinate with my Supervisor?'",
          "<strong>Step 2 (The Internal Handover):</strong> State the guest's name and exact issue to your supervisor *prior* to patching the connection through.",
          "<strong>Step 3 (Reconnecting Line):</strong> 'Thank you for holding, Mr. Jones. I have my Supervisor, [Name], on the line with me now. They are ready to assist you.'"
        ]
      }
    ]
  },
  general: {
    title: "General Hospitality Fundamentals",
    desc: "Core classroom questions for greetings, farewell timing, essential numbers, and alphabet practice.",
    sections: [
      {
        label: "Greeting Questions",
        steps: [
          "What is the guest's name?",
          "How may I assist you today?",
          "Have you visited us before?",
          "Would you like a room with a city view or a quiet corner?"
        ]
      },
      {
        label: "When to Say Farewell",
        steps: [
          "Offer farewell after the guest has completed their request or checkout.",
          "Say goodbye once the guest confirms they have everything they need.",
          "A warm farewell helps leave a lasting positive impression."
        ]
      },
      {
        label: "Hospitality Numbers",
        steps: [
          "One, two, three, four, five, six, seven, eight, nine, ten.",
          "Use numbers clearly when giving room numbers, billing totals, and timing details."
        ]
      },
      {
        label: "Alphabet Practice",
        steps: [
          "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z.",
          "Spell guest names, booking codes, and special requests carefully and clearly."
        ]
      }
    ]
  },
  scenario: {
    title: "Recorded Hospitality Scenario",
    desc: "Read the scenario prompt, record your response clearly, and complete the challenge before moving on.",
    scenarioText: "A guest checks in late and asks for a quiet room near the elevator, a breakfast order, and an explanation of the hotel breakfast service. Respond warmly, confirm their needs, and offer extra assistance."
  },
  vocabulary: {
    title: "Whiteboard Department Matrix",
    desc: "Tap any vocabulary term from your classroom board to hear the correct native pronunciation instantly.",
    departments: {
      "Front Office (Whiteboard)": [
        "Computer", "Room key", "Scanner", "Credit card machine", "Calculator", "File Rack", "Medical Box", "Fax", "Brochures", "Candy / Sweets", "Tissue Box", "CCTV", "Pen", "Cold towel", "Welcome Juice", "Documentation", "Map", "Sanitizer", "Pencil", "Book", "Counter", "Paper", "Phone", "Safe Box", "Chair", "Pictures", "Name Card / Business Card", "Furniture", "Aircon / Remote", "Dust bin", "Tablet", "WiFi", "Charger", "File", "Extension cord", "Cooler / Bottle", "Correction Pen", "NRC / Passport", "Mouse / Keyboard", "Car Pass", "Eraser", "Luggage", "Room / Information", "Keycard machine", "Money", "Plastic bag", "Deco", "Wall plug", "Pen holder", "Button", "Emergency light", "Sellable items", "Lost and Found", "Buffet ticket", "Ruler", "Note Pad", "Trolley", "Scissor", "Stapler", "Air Freshener", "Carpets", "Payment device", "Seal", "Tape", "Fire Extinguisher", "Clock", "Thanaka stone", "Puncher", "Laundry bag / items"
      ],
      "Restaurant & Bar (Whiteboard)": [
        "High ball", "Soup Spoon", "Rice bowl", "Chopstick", "Knife", "Spoon", "Flower vase", "Napkin", "Chair cover", "Wine stand", "Plate", "Dual tray", "Side station", "Tong", "Saucer", "Ladle", "Service plate", "Martini glass", "Margarita glass", "Rock glass", "Brandy Balloon", "Highball", "Sherry copita", "Cruet set", "Food cover / Dome plate", "Crumb Scraper", "Place Mat", "Scoop", "Chafing dish", "Bar blade", "Pilsner glass", "Cave Machine / Scan", "Sound box / Mic", "Stopper", "Reserved Sign", "Number Stand", "Counter table", "Chair", "Tray", "Fork", "Trolley", "Knife", "Table cloth", "Table runner", "Tray stand", "Wine decanter", "Strainer", "Plate / Bar spoon", "Wine chiller", "Fridge", "Spatula", "POS", "Dinner plate", "BB plate", "Dessert plate", "Baby chain", "Menu", "Tom Collins glass", "Podium", "Shot glass", "Coffee cup", "Coffee Saucer", "Tea spoon", "Hurricane glass", "Water goblet", "Champagne flute", "Butter knife", "Fish knife", "Steak knife", "Soup saucer", "Soup bowl", "Apron", "Tissue", "Water Jar", "Note Pad", "Tablet", "Stationary", "Voucher", "Wall plug", "Lamp / decor", "Gloves", "Irish coffee cup", "Beer Mug", "Bottle opener", "Toothpick holder", "Ice Bucket", "Salad knife", "Pasta Plate", "Condiment & oil set", "Fruit Plate", "Milk Jar", "Sugar Spoon", "Shaker", "Dust bin", "Electric kettle", "Dish wash machine", "Red wine glass / white", "Cocktail deco", "Egg rack / egg stand", "Juice dispenser", "Dummy waiter", "Lobster pick", "Cheese grinder", "Sachets", "Slip clothes", "Wet tissue", "Welcome towel", "Fire extinguisher", "Order slip", "Picture / decor", "Screen", "Bar Stool", "Draft beer machine", "Pourer", "Bar Spoon", "Coffee Machine", "Lemon Squeezer / Washrooms", "Measuring Cup", "Stage", "Peddler duster", "Waiters clothes", "Gloves", "WiFi", "Ash tray", "Napkin", "Clock", "Air fresher", "Blender", "Ice Machine", "Table balancer", "Jigger", "Shisha / Hookah", "Cutting board", "Coaster / Drip mat", "Plate warmer", "Computer", "Bill holder", "Lighter", "Money", "Sanitizer", "Wrapping paper / Foil", "Take away box / bag", "Butter dish / Side plate", "Lazy Susan", "Chopstick holder", "Straw", "Mudler", "Zester"
      ]
    }
  },
  emotions: {
    title: "Emotions & The 5 W's Strategy",
    desc: "When handling highly emotional guests, run through the 5 W's strategy calmly to break down the problem details.",
    framework: [
      { w: "Who", purpose: "Pinpoint the exact guest identity. ('Who handled your check-in, madam?')" },
      { w: "What", purpose: "Isolate the precise physical missing element. ('What exact item is required?')" },
      { w: "Where", purpose: "Isolate the property site location. ('Where did you notice the water leakage?')" },
      { w: "When", purpose: "Establish an accurate time log sequence. ('When was this request submitted?')" },
      { w: "Why", purpose: "Identify structural system failures to prevent them from happening again." }
    ]
  },
  verbs: {
    title: "Operational Verbs & Counting Lab",
    desc: "Say these active hospitality action phrases out loud. Click the test buttons to run your voice through the browser microphone validation engine.",
    actions: ["Escort the guest", "Arrange luggage storage", "Confirm room readiness", "Welcome arriving guests", "Manage reservation details", "Report guest preferences"]
  },
  playlist: {
    title: "Hospitality Rhythm Music Lounge",
    desc: "Building confidence, pronunciation clarity, and flow using our specific classroom songs.",
    songs: [
      { title: "I Have a Dream", artist: "ABBA", coreTheme: "Confidence, inner focus, and operational alignment." },
      { title: "Imagine", artist: "John Lennon", coreTheme: "Universal communication, deep empathy, and shared spaces." }
    ]
  }
};

const googleSheetWebAppUrl = "https://script.google.com/macros/s/AKfycbzZ6LB8l-XiH9E8bmJoLaubN7NX_-rLf3Dutp3km_yscpyQS1JMDSGf6p41KpyAdDF-/exec";
