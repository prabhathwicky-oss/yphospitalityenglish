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

// --- GLOBAL STATE & MEDIA VARIABLES ---
let studentData = {
  name: "", email: "", phone: "", interviewAnswer: "", friendReflection: "Not submitted",
  facePhoto: "", teethPhoto: "", fingersPhoto: "", audioRecording: ""
};

let activeMediaStream = null;
let mediaRecorder = null;
let audioChunks = [];

// --- 1. INITIALIZATION & FORM SUBMISSION ---
document.getElementById('learner-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const answer = document.getElementById('student-answer').value;
  const wordCount = answer.trim().split(/\s+/).length;
  
  if (wordCount < 50) {
    const feedback = document.getElementById('answer-feedback');
    feedback.textContent = `Your reflection is ${wordCount} words. Please write at least 50 words to proceed.`;
    feedback.classList.remove('hidden');
    return;
  }

  // Save textual data to global state
  studentData.name = document.getElementById('student-name').value;
  studentData.email = document.getElementById('student-email').value;
  studentData.phone = document.getElementById('student-phone').value;
  studentData.interviewAnswer = answer;

  // Update UI Header
  document.getElementById('learner-form').parentElement.classList.add('hidden');
  document.getElementById('learner-summary').classList.remove('hidden');
  document.getElementById('summary-name').textContent = studentData.name;
  document.getElementById('summary-email').textContent = studentData.email;
  document.getElementById('summary-phone').textContent = studentData.phone;

  // Unlock navigation
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('cursor-not-allowed', 'opacity-60');
    btn.classList.add('hover:bg-indigo-900/40', 'hover:text-indigo-300');
  });

  // Inject the Final Submit Button into the navigation
  injectFinalSubmitButton();

  // Load first module
  switchModule('founder');
});


// --- 2. MODULE NAVIGATION ---
function switchModule(moduleId) {
  // Turn off camera/mic if user navigates away
  if (activeMediaStream) {
    activeMediaStream.getTracks().forEach(track => track.stop());
    activeMediaStream = null;
  }

  const container = document.getElementById('workspace-container');
  if (typeof ypCurriculum !== 'undefined' && ypCurriculum[moduleId]) {
    const data = ypCurriculum[moduleId];
    container.innerHTML = `
      <div class="w-full text-left">
        <h2 class="text-2xl font-black text-white mb-2">${data.title}</h2>
        <p class="text-sm text-slate-400 mb-6">${data.desc}</p>
        <div class="space-y-4">
          ${renderContent(moduleId, data)}
        </div>
        ${appendMediaInterfaces(moduleId)}
      </div>
    `;
  }
}

// --- 3. UI RENDERING ---
function renderContent(id, data) {
  if (id === 'founder') return data.facts.map(f => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${f.label}</span><p class="text-xs text-slate-300">${f.text}</p></div>`).join('');
  if (id === 'grooming' || id === 'tone') return data.pillars.map(p => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${p.area || p.element}</span><p class="text-xs text-slate-300">${p.rule || p.tip}</p></div>`).join('');
  if (id === 'emotions') return data.framework.map(w => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${w.w}</span><p class="text-xs text-slate-300">${w.purpose}</p></div>`).join('');
  if (id === 'verbs') return data.actions.map(a => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">${a}</div>`).join('');
  if (id === 'scenario') return `<div class="p-6 bg-indigo-900/30 rounded-xl border border-indigo-500/50 text-indigo-100 text-sm italic">"${data.scenarioText}"</div>`;
  
  return `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><p class="text-xs text-slate-500">Standard content loaded.</p></div>`;
}

function appendMediaInterfaces(id) {
  if (id === 'grooming') {
    return `
      <div class="mt-8 p-6 bg-slate-900 border border-slate-700 rounded-xl text-center">
         <h3 class="text-sm font-bold text-white mb-4">📸 Live Camera Verification</h3>
         <video id="webcam-video" autoplay playsinline class="w-full max-w-sm rounded-lg bg-black mx-auto mb-4 border border-slate-700"></video>
         <div class="flex flex-wrap justify-center gap-3">
             <button onclick="startCamera()" class="px-4 py-2 bg-indigo-600 text-xs rounded-lg text-white font-bold hover:bg-indigo-500 transition">1. Turn On Camera</button>
             <button onclick="snapPhoto('facePhoto', 'Face')" class="px-4 py-2 bg-emerald-600 text-xs rounded-lg text-white font-bold hover:bg-emerald-500 transition">Snap Face</button>
             <button onclick="snapPhoto('teethPhoto', 'Teeth')" class="px-4 py-2 bg-emerald-600 text-xs rounded-lg text-white font-bold hover:bg-emerald-500 transition">Snap Teeth</button>
             <button onclick="snapPhoto('fingersPhoto', 'Fingers')" class="px-4 py-2 bg-emerald-600 text-xs rounded-lg text-white font-bold hover:bg-emerald-500 transition">Snap Fingers</button>
         </div>
         <p id="camera-status" class="text-xs font-medium text-emerald-400 mt-4 h-4"></p>
      </div>
    `;
  }
  
  if (id === 'scenario') {
    return `
      <div class="mt-8 p-6 bg-slate-900 border border-slate-700 rounded-xl text-center">
         <h3 class="text-sm font-bold text-white mb-4">🎙️ Audio Response Recording</h3>
         <div class="flex justify-center gap-4 mb-4">
             <button id="btn-start-record" onclick="startRecording()" class="px-5 py-3 bg-rose-600 rounded-xl text-white font-bold text-sm hover:bg-rose-500 transition shadow-lg shadow-rose-900/20">🔴 Start Recording</button>
             <button id="btn-stop-record" onclick="stopRecording()" class="px-5 py-3 bg-slate-600 rounded-xl text-white font-bold text-sm hidden hover:bg-slate-500 transition">⏹️ Stop & Save</button>
         </div>
         <audio id="audio-playback" controls class="mx-auto hidden mt-4"></audio>
         <p id="audio-status" class="text-xs font-medium text-emerald-400 mt-4 h-4"></p>
      </div>
    `;
  }
  return "";
}


// --- 4. HARDWARE LOGIC (CAMERA & MIC) ---
async function startCamera() {
  try {
    activeMediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    document.getElementById('webcam-video').srcObject = activeMediaStream;
    document.getElementById('camera-status').textContent = "Camera active. Ready to snap.";
  } catch (err) {
    alert("Camera error: Please allow camera permissions in your browser.");
  }
}

function snapPhoto(dataKey, label) {
  const video = document.getElementById('webcam-video');
  if (!video.srcObject) return alert("Please turn on the camera first!");

  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth; 
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  
  // Save as base64 to global object
  studentData[dataKey] = canvas.toDataURL('image/png');
  document.getElementById('camera-status').textContent = `✅ ${label} captured successfully!`;
}

async function startRecording() {
  try {
    activeMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(activeMediaStream);
    audioChunks = [];

    mediaRecorder.ondataavailable = e => { if(e.data.size > 0) audioChunks.push(e.data); };
    
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      document.getElementById('audio-playback').src = URL.createObjectURL(audioBlob);
      document.getElementById('audio-playback').classList.remove('hidden');
      
      // Convert to Base64 for Google Script
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        studentData.audioRecording = reader.result;
        document.getElementById('audio-status').textContent = "✅ Audio saved and ready for submission!";
      };
    };

    mediaRecorder.start();
    document.getElementById('btn-start-record').classList.add('hidden');
    document.getElementById('btn-stop-record').classList.remove('hidden');
    document.getElementById('audio-status').textContent = "Recording in progress...";
    document.getElementById('audio-status').classList.replace('text-emerald-400', 'text-rose-400');

  } catch (err) {
    alert("Microphone error: Please allow audio permissions in your browser.");
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    activeMediaStream.getTracks().forEach(track => track.stop());
    document.getElementById('btn-stop-record').classList.add('hidden');
    document.getElementById('btn-start-record').classList.remove('hidden');
    document.getElementById('btn-start-record').textContent = "🔄 Rerecord";
    document.getElementById('audio-status').classList.replace('text-rose-400', 'text-emerald-400');
  }
}


// --- 5. FINAL SUBMISSION TO BACKEND ---
function injectFinalSubmitButton() {
  const nav = document.querySelector('nav');
  const btn = document.createElement('button');
  btn.id = "btn-final-submit";
  btn.className = "w-full text-center p-4 mt-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition shadow-lg shadow-emerald-600/20";
  btn.innerHTML = "📤 Submit Final Assignment";
  btn.onclick = submitAllDataToGoogle;
  nav.appendChild(btn);
}

function submitAllDataToGoogle() {
  const btn = document.getElementById('btn-final-submit');
  btn.innerHTML = "⏳ Uploading... Please Wait";
  btn.disabled = true;
  btn.classList.replace('bg-emerald-600', 'bg-slate-600');

  fetch(googleSheetWebAppUrl, {
    method: 'POST',
    body: JSON.stringify(studentData),
    headers: { 'Content-Type': 'text/plain;charset=utf-8' } // 'text/plain' prevents CORS preflight blocks
  })
  .then(response => response.json())
  .then(data => {
    if(data.status === "success") {
      alert("Success! Your files and text have been sent to the instructor.");
      btn.innerHTML = "✅ Assignment Submitted!";
      btn.classList.replace('bg-slate-600', 'bg-indigo-600');
    } else {
      alert("Error saving data: " + data.message);
      btn.innerHTML = "❌ Try Again";
      btn.disabled = false;
    }
  })
  .catch(err => {
    alert("Network error: " + err.message);
    btn.innerHTML = "❌ Try Again";
    btn.disabled = false;
    btn.classList.replace('bg-slate-600', 'bg-rose-600');
  });
}
