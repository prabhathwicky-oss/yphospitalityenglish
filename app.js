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

let activeStream = null;
let studentProfile = {
  name: '',
  email: '',
  phone: '',
  answer: '',
  facePhoto: '',
  teethPhoto: '',
  fingersPhoto: '',
  audioRecording: '',
  friendReflection: '',
  friendReflectionSaved: false
};
let playlistActiveSubtab = 'friend';
let scenarioPassed = false;
let currentModule = 'founder';
let scenarioRecorder = null;
let scenarioChunks = [];
let scenarioTranscript = '';
let scenarioStartTime = null;

// ========================================== //
// UPDATED DATA TRANSMITTER LINK              //
// ========================================== //
function sendDataToBackend() {
  const googleSheetWebAppUrl = "https://script.google.com/macros/s/AKfycbx6pGQLmOoDMNjtdiAttl8r-xIg7SOykXKIjzzny7E5zsWMyujGMOwRmE1UXqNAneFl/exec";

  // Build string properties directly for standard URL encoding
  const queryParts = [];
  queryParts.push("name=" + encodeURIComponent(studentProfile.name || "Anonymous"));
  queryParts.push("email=" + encodeURIComponent(studentProfile.email || "N/A"));
  queryParts.push("phone=" + encodeURIComponent(studentProfile.phone || "N/A"));
  queryParts.push("interviewAnswer=" + encodeURIComponent(studentProfile.answer || ""));
  queryParts.push("facePhoto=" + encodeURIComponent(studentProfile.facePhoto || ""));
  queryParts.push("teethPhoto=" + encodeURIComponent(studentProfile.teethPhoto || ""));
  queryParts.push("fingersPhoto=" + encodeURIComponent(studentProfile.fingersPhoto || ""));
  queryParts.push("audioRecording=" + encodeURIComponent(studentProfile.audioRecording || ""));
  queryParts.push("friendReflection=" + encodeURIComponent(studentProfile.friendReflection || ""));

  fetch(googleSheetWebAppUrl, {
    method: 'POST',
    mode: 'no-cors', 
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: queryParts.join('&')
  })
  .then(() => console.log("Synchronized successfully."))
  .catch(err => console.error("Sync failure:", err));
}

function setModuleButtonsState(enabled) {
  Object.keys(ypCurriculum).forEach(key => {
    const btn = document.getElementById(`btn-${key}`);
    if (!btn) return;
    if (enabled) {
      btn.removeAttribute('disabled');
      btn.className = "w-full text-left p-3 rounded-xl hover:bg-slate-700/50 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-3 transition";
    } else {
      btn.setAttribute('disabled', 'true');
      btn.className = "w-full text-left p-3 rounded-xl bg-slate-900 text-slate-500 font-medium text-xs flex items-center gap-3 transition cursor-not-allowed opacity-60";
    }
  });
}

function saveStudentInfo(event) {
  event.preventDefault();
  const nameInput = document.getElementById('student-name');
  const emailInput = document.getElementById('student-email');
  const phoneInput = document.getElementById('student-phone');
  const answerInput = document.getElementById('student-answer');
  const answerFeedback = document.getElementById('answer-feedback');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const answer = answerInput.value.trim();
  const wordCount = answer ? answer.split(/\s+/).filter(Boolean).length : 0;

  if (!name || !email || !phone || !answer) {
    answerFeedback.textContent = 'Please fill in all fields.';
    answerFeedback.classList.remove('hidden');
    return;
  }
  if (wordCount < 50) {
    answerFeedback.textContent = 'Your answer must be at least 50 words.';
    answerFeedback.classList.remove('hidden');
    return;
  }

  answerFeedback.classList.add('hidden');
  studentProfile.name = name;
  studentProfile.email = email;
  studentProfile.phone = phone;
  studentProfile.answer = answer;

  document.getElementById('summary-name').textContent = studentProfile.name;
  document.getElementById('summary-email').textContent = studentProfile.email;
  document.getElementById('summary-phone').textContent = studentProfile.phone;
  document.getElementById('learner-summary').classList.remove('hidden');
  
  setModuleButtonsState(true);
  sendDataToBackend(); 
  switchModule('founder');
}

function startScenarioRecording() {
  const status = document.getElementById('scenario-status');
  const recordBtn = document.getElementById('scenario-record-toggle');
  const stopBtn = document.getElementById('scenario-stop-btn');
  const audioPreview = document.getElementById('scenario-audio-preview');

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    status.textContent = 'Your browser does not support audio recording.';
    return;
  }

  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      scenarioChunks = [];
      scenarioTranscript = '';
      scenarioStartTime = Date.now();
      scenarioRecorder = new MediaRecorder(stream);
      scenarioRecorder.ondataavailable = event => scenarioChunks.push(event.data);
      
      scenarioRecorder.onstop = () => {
        const duration = (Date.now() - scenarioStartTime) / 1000;
        const blob = new Blob(scenarioChunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        if (audioPreview) {
          audioPreview.src = url;
          audioPreview.classList.remove('hidden');
        }

        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function() {
          studentProfile.audioRecording = reader.result;
          sendDataToBackend(); 
        };

        const requiredWords = ['welcome', 'room', 'breakfast', 'assist', 'quiet'];
        const transcriptText = scenarioTranscript.toLowerCase();
        const matched = requiredWords.filter(word => transcriptText.includes(word)).length;
        const goodRecording = duration >= 8 && (matched >= 2 || transcriptText.length > 0);
        const resultEl = document.getElementById('scenario-result');

        if (goodRecording) {
          scenarioPassed = true;
          if (resultEl) {
            resultEl.innerHTML = '<span class="text-emerald-400 font-bold">✅ Recording accepted.</span>';
          }
        } else {
          scenarioPassed = false;
          if (resultEl) {
            resultEl.innerHTML = '<span class="text-rose-400 font-bold">❌ Recording short.</span> Try again and say at least 50 words.';
          }
        }
        if (stopBtn) stopBtn.setAttribute('disabled', 'true');
        if (recordBtn) recordBtn.removeAttribute('disabled');
        stream.getTracks().forEach(track => track.stop());
      };

      scenarioRecorder.start();
      if (recordBtn) recordBtn.setAttribute('disabled', 'true');
      if (stopBtn) stopBtn.removeAttribute('disabled');
      if (status) status.textContent = 'Recording...';

      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.onresult = event => {
          scenarioTranscript += event.results[0][0].transcript + ' ';
        };
        recognition.start();
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function stopScenarioRecording() {
  if (scenarioRecorder && scenarioRecorder.state === 'recording') {
    scenarioRecorder.stop();
  }
}

function switchPlaylistTab(tab, data) {
  playlistActiveSubtab = tab;
  const contentEl = document.getElementById('playlist-subtab-content');
  const songsBtn = document.getElementById('playlist-tab-songs');
  const friendBtn = document.getElementById('playlist-tab-friend');

  if (songsBtn && friendBtn) {
    songsBtn.className = tab === 'songs' ? 'px-4 py-2 rounded-full bg-indigo-500 text-white text-[11px] font-bold shadow' : 'px-4 py-2 rounded-full bg-slate-900 text-slate-300 text-[11px] hover:bg-slate-700';
    friendBtn.className = tab === 'friend' ? 'px-4 py-2 rounded-full bg-indigo-500 text-white text-[11px] font-bold shadow' : 'px-4 py-2 rounded-full bg-slate-900 text-slate-300 text-[11px] hover:bg-slate-700';
  }

  if (!contentEl) return;

  if (tab === 'songs') {
    const tracksHTML = data.songs.map(song => `
      <div class="p-4 bg-slate-900/40 border border-slate-700 rounded-xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <h3 class="text-sm font-bold text-white">🎵 ${song.title}</h3>
          <p class="text-[11px] text-slate-400 mt-0.5">Focus Track — by ${song.artist}</p>
        </div>
        <div class="text-xs bg-indigo-500/10 text-indigo-400 font-medium px-3 py-1.5 rounded-lg border border-indigo-500/20 max-w-xs">
          <strong>Core Competency:</strong> ${song.coreTheme}
        </div>
      </div>
    `).join('');
    contentEl.innerHTML = `<div class="space-y-3">${tracksHTML}</div>`;
  } else {
    contentEl.innerHTML = `
      <div class="space-y-4">
        <p class="text-xs text-slate-400 leading-relaxed">Write a reflection about a friend in the class. Use at least 50 words to describe how they contribute to the hospitality team.</p>
        <textarea id="friend-reflection" class="w-full min-h-[200px] bg-slate-950 border border-slate-700 text-slate-100 rounded-2xl p-4 text-sm focus:outline-indigo-500" placeholder="Write about your class friend here..."></textarea>
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <button onclick="saveFriendReflection(event)" class="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-sm font-bold transition">Submit reflection</button>
          <span id="friend-word-count" class="text-[11px] text-slate-400">0 words</span>
        </div>
        <div id="friend-feedback" class="text-xs text-rose-400 hidden"></div>
      </div>
    `;
    const reflectionArea = document.getElementById('friend-reflection');
    const countLabel = document.getElementById('friend-word-count');
    if (reflectionArea && countLabel) {
      reflectionArea.value = studentProfile.friendReflection;
      const initialCount = studentProfile.friendReflection ? studentProfile.friendReflection.split(/\s+/).filter(Boolean).length : 0;
      countLabel.textContent = `${initialCount} words`;
      
      reflectionArea.addEventListener('input', () => {
        const count = reflectionArea.value.trim().split(/\s+/).filter(Boolean).length;
        countLabel.textContent = `${count} words`;
      });
    }
  }
}

function saveFriendReflection(event) {
  event.preventDefault();
  const feedback = document.getElementById('friend-feedback');
  const reflection = document.getElementById('friend-reflection');
  if (!reflection || !feedback) return;

  const text = reflection.value.trim();
  const count = text ? text.split(/\s+/).filter(Boolean).length : 0;

  if (count < 50) {
    feedback.textContent = 'Please write at least 50 words to submit your reflection.';
    feedback.classList.remove('hidden');
    return;
  }

  studentProfile.friendReflection = text;
  studentProfile.friendReflectionSaved = true;
  feedback.textContent = '✅ Reflection saved.';
  feedback.className = 'text-xs text-emerald-400';
  feedback.classList.remove('hidden');
  sendDataToBackend(); 
}

function switchModule(moduleKey) {
  if (currentModule === 'scenario' && moduleKey !== 'scenario' && !scenarioPassed) {
    return;
  }
  if (currentModule === 'playlist' && moduleKey !== 'playlist' && !studentProfile.friendReflectionSaved) {
    return;
  }

  stopWebcam();

  Object.keys(ypCurriculum).forEach(key => {
    const btn = document.getElementById(`btn-${key}`);
    if (btn) btn.className = "w-full text-left p-3 rounded-xl hover:bg-slate-700/50 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-3 transition";
  });

  const activeBtn = document.getElementById(`btn-${moduleKey}`);
  if (activeBtn) activeBtn.className = "w-full text-left p-3 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-3 transition border border-indigo-500/40 shadow-lg";

  const container = document.getElementById("workspace-container");
  const data = ypCurriculum[moduleKey];

  if (moduleKey === "founder") {
    let listHTML = data.facts.map((fact) => `
      <div class="p-4 bg-slate-900/40 rounded-xl border border-slate-700/60 space-y-1 hover:border-indigo-500/40 transition">
        <span class="text-[10px] uppercase font-bold tracking-wider text-indigo-400">${fact.label}</span>
        <p class="text-sm text-slate-200 font-medium leading-relaxed">${fact.text}</p>
        <button onclick="speakWord('${fact.text.replace(/'/g, "\\'")}')" class="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 mt-2">🔊 Practice Pronunciation</button>
      </div>
    `).join('');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">👤 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${listHTML}</div>
    `;
  } else if (moduleKey === "grooming") {
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">👔 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden relative aspect-video flex items-center justify-center">
            <video id="webcam-preview" autoplay playsinline class="w-full h-full object-cover hidden"></video>
            <div id="cam-placeholder" class="text-slate-500 text-center p-4">
              <span class="text-3xl block mb-2">📷</span>
              <p class="text-xs font-semibold">Camera Feed Offline</p>
            </div>
          </div>
          <div class="flex gap-2 justify-center">
            <button id="snap-btn" disabled onclick="capturePhoto()" class="px-5 py-2 bg-indigo-600 opacity-50 cursor-not-allowed text-white text-xs font-bold rounded-xl transition shadow-md">📸 Capture Inspection Photo</button>
          </div>
        </div>
        <div class="space-y-3" id="inspection-nodes">
          ${data.pillars.map(item => {
            const hasImg = studentProfile[item.id + 'Photo'];
            const imgTag = hasImg ? `<img src="${hasImg}" class="w-full h-full object-cover rounded-lg"/>` : '🖼️';
            const dotClass = hasImg ? "w-2 h-2 rounded-full bg-emerald-400" : "w-2 h-2 rounded-full bg-slate-600";
            return `
            <div id="card-${item.id}" onclick="startGroomingCamera('${item.id}')" class="p-4 bg-slate-900/40 border border-slate-700/60 rounded-xl cursor-pointer hover:border-indigo-500/40 transition flex gap-4 items-start">
              <div class="w-16 h-16 rounded-lg bg-slate-950 border border-slate-800 shrink-0 overflow-hidden flex items-center justify-center text-slate-600 text-xl" id="slot-${item.id}">${imgTag}</div>
              <div>
                <h3 class="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2">
                  <span class="${dotClass}" id="dot-${item.id}"></span> ${item.area}
                </h3>
                <p class="text-[11px] text-slate-400 font-medium leading-relaxed mt-0.5">${item.rule}</p>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
      <canvas id="hidden-canvas" class="hidden"></canvas>
    `;
  } else if (moduleKey === "tone") {
    let cardsHTML = data.pillars.map(item => `
      <div class="p-4 bg-slate-900/40 border border-slate-700/80 rounded-xl flex justify-between items-start gap-4">
        <div>
          <h3 class="text-xs font-bold uppercase tracking-wider text-amber-400">⚡ ${item.element}</h3>
          <p class="text-xs text-slate-300 leading-relaxed font-medium mt-1">${item.tip}</p>
        </div>
        <button onclick="speakWord('${item.tip.replace(/'/g, "\\'")}')" class="text-[10px] bg-slate-800 border border-slate-700 px-2.5 py-1.5 rounded-lg text-slate-300 hover:bg-indigo-600 hover:text-white transition shrink-0">🔊 Play</button>
      </div>
    `).join('');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">🗣️ ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="grid grid-cols-1 gap-3">${cardsHTML}</div>
    `;
  } else if (moduleKey === "greetings") {
    let sectionsHTML = data.sections.map(sec => `
      <div class="p-5 bg-slate-900/40 border border-slate-700/70 rounded-2xl space-y-3">
        <h3 class="text-xs font-bold uppercase tracking-widest text-indigo-400 border-b border-slate-700/50 pb-2">🔑 ${sec.label}</h3>
        <div class="space-y-3">
          ${sec.steps.map(step => `
            <div class="flex items-start gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
              <p class="text-xs text-slate-300 font-medium leading-relaxed">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">📞 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="space-y-4">${sectionsHTML}</div>
    `;
  } else if (moduleKey === "general") {
    let sectionsHTML = data.sections.map(sec => `
      <div class="p-5 bg-slate-900/40 border border-slate-700/70 rounded-2xl space-y-3">
        <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-400 border-b border-slate-700/50 pb-2">📘 ${sec.label}</h3>
        <div class="space-y-3">
          ${sec.steps.map(step => `
            <div class="flex items-start gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
              <p class="text-xs text-slate-300 font-medium leading-relaxed">${step}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">🧾 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="space-y-4">${sectionsHTML}</div>
    `;
  } else if (moduleKey === "scenario") {
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">🎙 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="p-5 bg-slate-900/40 border border-slate-700/70 rounded-2xl space-y-4">
        <div class="text-xs text-slate-300 leading-relaxed">${data.scenarioText}</div>
        <div class="flex flex-wrap gap-3">
          <button id="scenario-record-toggle" onclick="startScenarioRecording()" class="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-sm font-bold transition">Start Recording</button>
          <button id="scenario-stop-btn" onclick="stopScenarioRecording()" disabled class="px-5 py-3 bg-slate-700 text-slate-300 rounded-2xl text-sm font-bold transition">Stop Recording</button>
        </div>
        <div id="scenario-status" class="text-xs text-slate-400">Press Start to record.</div>
        <audio id="scenario-audio-preview" controls class="w-full ${studentProfile.audioRecording ? '' : 'hidden'} mt-3 bg-slate-950 rounded-2xl" src="${studentProfile.audioRecording || ''}"></audio>
        <div id="scenario-result" class="text-xs text-slate-400">${scenarioPassed ? '✅ Recording accepted.' : ''}</div>
      </div>
    `;
  } else if (moduleKey === "vocabulary") {
    let tabsHTML = Object.keys(data.departments).map(dept => `
      <div class="space-y-3">
        <h3 class="text-xs font-bold text-indigo-400 uppercase tracking-wider">${dept}</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
          ${data.departments[dept].map(word => `
            <button onclick="speakWord('${word.replace(/'/g, "\\'")}')" class="p-2 bg-slate-900/60 hover:bg-indigo-600 border border-slate-700/80 text-[11px] rounded-xl font-medium hover:text-white transition flex items-center gap-1.5 shadow-sm truncate">
              🔊 ${word}
            </button>
          `).join('')}
        </div>
      </div>
    `).join('<hr class="border-slate-700/50 my-6" />');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">📖 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-4 leading-relaxed">${data.desc}</p>
      <div class="space-y-6 bg-slate-900/20 p-4 rounded-2xl border border-slate-700/50 max-h-[450px] overflow-y-auto">${tabsHTML}</div>
    `;
  } else if (moduleKey === "emotions") {
    let rowsHTML = data.framework.map(item => `
      <div class="p-3 bg-slate-900/40 rounded-xl border border-slate-700 flex gap-4 items-center hover:border-amber-500/30 transition">
        <div class="text-sm font-black text-amber-400 uppercase w-14 border-r border-slate-700 py-1 tracking-wider text-center">${item.w}</div>
        <div class="text-xs text-slate-300 leading-relaxed font-medium">${item.purpose}</div>
      </div>
    `).join('');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">🧠 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="space-y-2">${rowsHTML}</div>
    `;
  } else if (moduleKey === "verbs") {
    let verbsHTML = data.actions.map(verb => `
      <div class="p-4 bg-slate-900/40 border border-slate-700/80 rounded-xl flex justify-between items-center gap-4">
        <span class="text-xs font-semibold text-slate-200">"${verb}"</span>
        <button onclick="testPronunciation('${verb.replace(/'/g, "\\'")}')" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-[11px] font-bold rounded-lg transition shadow-md shrink-0">
          🎤 Read
        </button>
      </div>
    `).join('');
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">🗣️ ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div id="pronounce-feedback" class="mb-4 text-xs bg-slate-900 p-3 rounded-xl text-slate-400 italic">Select an action step...</div>
      <div class="space-y-2.5">${verbsHTML}</div>
    `;
  } else if (moduleKey === "playlist") {
    container.innerHTML = `
      <h2 class="text-2xl font-black text-white flex items-center gap-2">🎵 ${data.title}</h2>
      <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">${data.desc}</p>
      <div class="flex flex-wrap gap-3 mb-5">
        <button id="playlist-tab-songs" onclick="switchPlaylistTab('songs', ypCurriculum.playlist)">Songs</button>
        <button id="playlist-tab-friend" onclick="switchPlaylistTab('friend', ypCurriculum.playlist)">Write about a friend</button>
      </div>
      <div id="playlist-subtab-content"></div>
    `;
    switchPlaylistTab(playlistActiveSubtab, ypCurriculum.playlist);
  }
  currentModule = moduleKey;
}

let currentTargetTargetId = "";
function startGroomingCamera(targetId) {
  currentTargetTargetId = targetId;
  const videoElement = document.getElementById("webcam-preview");
  const placeholder = document.getElementById("cam-placeholder");
  const snapBtn = document.getElementById("snap-btn");

  navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } })
    .then(stream => {
      activeStream = stream;
      videoElement.srcObject = stream;
      videoElement.classList.remove("hidden");
      placeholder.classList.add("hidden");
      snapBtn.removeAttribute("disabled");
      snapBtn.className = "px-5 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl cursor-pointer";
    })
    .catch(err => {
      console.error(err);
    });
}

function capturePhoto() {
  if (!currentTargetTargetId) return;
  const video = document.getElementById("webcam-preview");
  const canvas = document.getElementById("hidden-canvas");
  const context = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/png");

  studentProfile[currentTargetTargetId + 'Photo'] = dataUrl;
  const targetSlot = document.getElementById(`slot-${currentTargetTargetId}`);
  if (targetSlot) targetSlot.innerHTML = `<img src="${dataUrl}" class="w-full h-full object-cover rounded-lg"/>`;

  stopWebcam();
  sendDataToBackend(); 
}

function stopWebcam() {
  if (activeStream) {
    activeStream.getTracks().forEach(track => track.stop());
    activeStream = null;
  }
}

function speakWord(targetText) {
  const speakEngine = new SpeechSynthesisUtterance(targetText);
  speakEngine.lang = "en-US";
  window.speechSynthesis.speak(speakEngine);
}

function testPronunciation(targetPhrase) {
  const feedbackBox = document.getElementById("pronounce-feedback");
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    feedbackBox.textContent = "❌ Speech processing blocked.";
    return;
  }

  const captureEngine = new SpeechRecognition();
  captureEngine.lang = 'en-US';
  feedbackBox.innerHTML = `🎙 Speak now...`;
  captureEngine.start();

  captureEngine.onresult = (event) => {
    feedbackBox.innerHTML = `🏆 Heard: "${event.results[0][0].transcript}"`;
  };
}

setModuleButtonsState(false);
const learnerForm = document.getElementById('learner-form');
if (learnerForm) {
  learnerForm.addEventListener('submit', saveStudentInfo);
}
