// ============================================================================
// 1. CURRICULUM DATA
// ============================================================================
const ypCurriculum = {

  founder: {
    title: "Profile & Identity",
    desc: "Introduce yourself and write a reflection about a friend.",
    facts: [
      { label: "Identity", text: "My professional name is [Your Name]." },
      { label: "Location", text: "I am based in [Your City/Country]." },
      { label: "Motivation", text: "I chose hospitality because [Your Reason]." }
    ]
  },

  grooming: {
    title: "Grooming & Cleanliness",
    desc: "Review the grooming standards below. Each area must meet hotel standards before you save progress.",
    pillars: [
      { area: "Hair & Face", rule: "Hair neatly styled or tied back. Face clean and well-presented." },
      { area: "Smile & Teeth", rule: "Warm, genuine smile. Fresh breath. Clean, well-maintained teeth." },
      { area: "Hands & Nails", rule: "Short, clean nails. No chipped polish. Hands visibly clean." },
      { area: "Uniform", rule: "Pressed and spotless. Name badge visible on left chest." },
      { area: "Fragrance", rule: "Subtle fragrance only. Never overwhelming." }
    ]
  },

  tone: {
    title: "Vocal Mechanics & Tone",
    desc: "Practice these 5 telephone dialogs one by one. Speak clearly and at a warm, friendly pace. You must pass each dialog before moving to the next.",
    dialogs: [
      {
        id: 1,
        prompt: "Answer the phone with a warm greeting.",
        target: "Good morning, thank you for calling the Grand Hotel, this is Alex speaking, how may I assist you today?",
        hint: "Speak slowly and warmly — smile as you say it!"
      },
      {
        id: 2,
        prompt: "A guest asks to be connected to housekeeping.",
        target: "Of course, please hold for just one moment while I connect you to our housekeeping team.",
        hint: "Emphasise 'of course' — it sounds caring and eager."
      },
      {
        id: 3,
        prompt: "A guest wants to know the check-out time.",
        target: "Our standard check-out time is twelve noon. However, we are happy to arrange a late check-out upon request.",
        hint: "Say 'twelve noon' clearly, not 'twelve' alone."
      },
      {
        id: 4,
        prompt: "A guest reports a noise complaint.",
        target: "I sincerely apologise for the inconvenience. I will personally ensure this is resolved for you right away.",
        hint: "Convey genuine concern — slow down on 'sincerely apologise'."
      },
      {
        id: 5,
        prompt: "A guest is checking in and you need their name.",
        target: "Welcome to the Grand Hotel. May I kindly have your full name for the reservation please?",
        hint: "Sound welcoming first, then professional."
      }
    ]
  },

  greetings: {
    title: "Greeting Scripts & Problem Solving",
    desc: "Study and practise these greeting and problem-solving scripts used in luxury hospitality.",
    sections: [
      {
        heading: "📞 Telephone Greetings",
        items: [
          "Good morning / afternoon / evening, thank you for calling [Hotel Name]. How may I assist you?",
          "Front desk, this is [Your Name] speaking. How can I help you today?",
          "Thank you for your patience. I will look into that for you right away.",
          "I am happy to transfer your call. Please hold for just a moment.",
          "Is there anything else I can assist you with before we end the call?"
        ]
      },
      {
        heading: "🏨 In-Person Greetings",
        items: [
          "Good [morning/afternoon/evening], welcome to [Hotel Name]. My name is [Name]. How may I assist you?",
          "It is a pleasure to have you with us. May I have your reservation name please?",
          "Allow me to escort you to the front desk.",
          "Your comfort is our top priority. Please do not hesitate to ask for anything.",
          "We hope you enjoy a wonderful stay with us."
        ]
      },
      {
        heading: "🔧 Problem Solving Scripts",
        items: [
          "I understand your concern and I sincerely apologise for the inconvenience.",
          "I will personally look into this and have it resolved for you immediately.",
          "Allow me to offer you a complimentary [service/upgrade] as a token of our apology.",
          "I have escalated this to our manager who will contact you within [timeframe].",
          "Thank you for bringing this to our attention — your feedback helps us serve you better.",
          "I want to make sure this is handled to your complete satisfaction.",
          "Please rest assured that we take all guest concerns very seriously."
        ]
      },
      {
        heading: "🌟 VIP & Special Occasion Scripts",
        items: [
          "On behalf of the entire team, we wish you a very happy anniversary.",
          "We have prepared a small surprise for you in your room. We hope you enjoy it.",
          "As a valued guest, you have been upgraded to our deluxe suite at no extra charge.",
          "Your preferences have been noted and everything is prepared exactly as requested."
        ]
      }
    ]
  },

  general: {
    title: "Fundamentals, Alphabets & Numbers",
    desc: "Study the hospitality alphabet and number conventions, then complete the fill-in exercises.",
    alphabetData: [
      { letter: "A", word: "Amenities", usage: "Our amenities include a pool, spa, and gym." },
      { letter: "B", word: "Bellboy", usage: "The bellboy will assist you with your luggage." },
      { letter: "C", word: "Concierge", usage: "Please speak to the concierge for restaurant reservations." },
      { letter: "D", word: "Departure", usage: "What time is your departure?" },
      { letter: "E", word: "Escalation", usage: "I will escalate this matter to the duty manager." },
      { letter: "F", word: "Feedback", usage: "Your feedback is greatly appreciated." },
      { letter: "G", word: "Guest Relations", usage: "Guest relations will handle your request." },
      { letter: "H", word: "Hospitality", usage: "Hospitality is the art of making guests feel welcome." },
      { letter: "I", word: "Itinerary", usage: "May I help you plan your itinerary?" },
      { letter: "J", word: "Junior Suite", usage: "You have been upgraded to our junior suite." },
      { letter: "K", word: "Keycard", usage: "Here is your keycard for room three-zero-two." },
      { letter: "L", word: "Lobby", usage: "Please wait for us in the lobby." },
      { letter: "M", word: "Minibar", usage: "The minibar is restocked daily." },
      { letter: "N", word: "No-show", usage: "The reservation was marked as a no-show." },
      { letter: "O", word: "Occupancy", usage: "Tonight we are at full occupancy." },
      { letter: "P", word: "Porterage", usage: "Porterage service is available twenty-four hours." },
      { letter: "Q", word: "Queen Bed", usage: "Your room features a queen bed and city view." },
      { letter: "R", word: "Reservation", usage: "Your reservation is confirmed for two nights." },
      { letter: "S", word: "Suite", usage: "The presidential suite is on the top floor." },
      { letter: "T", word: "Turndown", usage: "Turndown service is offered each evening." },
      { letter: "U", word: "Upgrade", usage: "We are pleased to offer you a complimentary upgrade." },
      { letter: "V", word: "Valet", usage: "Valet parking is available at the main entrance." },
      { letter: "W", word: "Wake-up Call", usage: "I have scheduled your wake-up call for six a.m." },
      { letter: "X", word: "Xtra Mile", usage: "We always go the extra mile for our guests." },
      { letter: "Y", word: "Yield Management", usage: "Room rates are managed through yield management." },
      { letter: "Z", word: "Zero Complaints", usage: "Our goal is zero complaints and perfect service." }
    ],
    fillExercises: [
      { question: "The guest asked for an ________ to the airport.", answer: "itinerary", hint: "Begins with I — a planned schedule." },
      { question: "Please contact our ________ for local restaurant tips.", answer: "concierge", hint: "Begins with C — the information expert." },
      { question: "Your room has been upgraded to a ________ suite.", answer: "junior", hint: "Begins with J — smaller than a full suite." },
      { question: "The ________ is restocked with drinks each morning.", answer: "minibar", hint: "Begins with M — in-room refreshments." },
      { question: "I will arrange a ________ call for you at seven a.m.", answer: "wake-up", hint: "Begins with W — a morning alarm service." }
    ]
  },

  scenario: {
    title: "Recorded Audio Challenge",
    desc: "Listen carefully, then record yourself reading the full passage. You must achieve 85% accuracy to save.",
    passage: "Good evening, and welcome to the Grand Horizon Hotel. My name is Sarah, and I will be your personal host during your stay with us. On behalf of our entire team, we are truly delighted to have you here. Should you require anything at all — whether it is dining reservations, local recommendations, or simply a warm cup of tea — please do not hesitate to dial zero from your room telephone. We wish you a most comfortable and memorable stay."
  },

  vocabulary: {
    title: "Whiteboard Matrix Vocabulary",
    desc: "Pronounce each hospitality term clearly. You must score 85% accuracy to pass.",
    words: [
      { word: "Accommodate", phonetic: "uh-KOM-uh-dayt", example: "We can accommodate your early check-in request." },
      { word: "Facilitate", phonetic: "fuh-SIL-ih-tayt", example: "Allow me to facilitate your transfer to the airport." },
      { word: "Anticipate", phonetic: "an-TIS-ih-payt", example: "We anticipate your needs before you ask." },
      { word: "Ensure", phonetic: "en-SHOOR", example: "I will ensure your room is ready." },
      { word: "Coordinate", phonetic: "koh-OR-dih-nayt", example: "I will coordinate with the kitchen team for you." },
      { word: "Impeccable", phonetic: "im-PEK-uh-bul", example: "Our service standards are impeccable." },
      { word: "Complimentary", phonetic: "kom-pluh-MEN-tuh-ree", example: "Breakfast is complimentary for all guests." },
      { word: "Reservation", phonetic: "rez-er-VAY-shun", example: "Your reservation has been confirmed." }
    ]
  },

  emotions: {
    title: "Handling Emotional Guests",
    desc: "Study these strategies for de-escalating difficult guest situations with empathy and professionalism.",
    scenarios: [
      {
        situation: "Guest is angry about room not being ready.",
        wrongResponse: "It's not my fault, I just started my shift.",
        rightResponse: "I completely understand your frustration and I sincerely apologise. Allow me to check on your room status immediately and offer you a refreshment in our lounge while you wait.",
        principle: "Never deflect blame. Own the situation and offer immediate action."
      },
      {
        situation: "Guest is upset about a billing error.",
        wrongResponse: "You should have checked your bill before paying.",
        rightResponse: "I apologise for this oversight. Let me review your account right now and ensure this is corrected without delay.",
        principle: "Acknowledge, apologise, act — in that order."
      },
      {
        situation: "Guest is crying due to a personal matter.",
        wrongResponse: "I cannot help with personal problems.",
        rightResponse: "I can see this is a difficult moment. Please allow me to find you a quiet, comfortable space. Can I arrange some tea or water for you?",
        principle: "Show humanity first. Practical help follows empathy."
      },
      {
        situation: "Guest complains that the food was poor.",
        wrongResponse: "The chef is very experienced, you may have unusual taste.",
        rightResponse: "I am truly sorry to hear that. Your experience matters greatly to us. May I arrange a replacement dish or speak to our chef to correct this right away?",
        principle: "Never dismiss guest feedback. Offer a real remedy."
      }
    ]
  },

  verbs: {
    title: "Active Verbs Pronunciation",
    desc: "Practise pronouncing these hospitality action verbs clearly. Each must score 85% accuracy.",
    actions: [
      { verb: "Accommodate", phonetic: "uh-KOM-uh-dayt" },
      { verb: "Facilitate", phonetic: "fuh-SIL-ih-tayt" },
      { verb: "Anticipate", phonetic: "an-TIS-ih-payt" },
      { verb: "Ensure", phonetic: "en-SHOOR" },
      { verb: "Coordinate", phonetic: "koh-OR-dih-nayt" },
      { verb: "Delegate", phonetic: "DEL-ih-gayt" },
      { verb: "Communicate", phonetic: "kuh-MYOO-nih-kayt" },
      { verb: "Acknowledge", phonetic: "ak-NOL-ij" }
    ]
  },

  numbers: {
    title: "Tricky Numbers Speaking Test",
    desc: "These number pairs sound similar but mean different things. Listen carefully and speak clearly. You must say the exact number shown.",
    pairs: [
      {
        target: "nineteen",
        similar: "ninety",
        context: "Your room number is nineteen.",
        tip: "Stress the TEEN — nine-TEEN"
      },
      {
        target: "thirteen",
        similar: "thirty",
        context: "Your reservation is for thirteen guests.",
        tip: "Stress the TEEN — thir-TEEN"
      },
      {
        target: "fifteen",
        similar: "fifty",
        context: "Check-out is at fifteen hundred hours.",
        tip: "Stress the TEEN — fif-TEEN"
      },
      {
        target: "sixteen",
        similar: "sixty",
        context: "The conference room holds sixteen people.",
        tip: "Stress the TEEN — six-TEEN"
      },
      {
        target: "seventeen",
        similar: "seventy",
        context: "Your bill is seventeen dollars and fifty cents.",
        tip: "Stress the TEEN — seven-TEEN"
      }
    ]
  },

  playlist: {
    title: "Rhythm Lounge & Reflection",
    desc: "A space to reflect and wind down. Share your thoughts on today's training."
  }
};

// ============================================================================
// 2. STATE & SESSION
// ============================================================================
let studentData = {
  name: "", email: "", phone: "",
  interviewAnswer: "", friendReflection: "",
  progress: {}
};
let currentModule = null;
let currentDialogIndex = 0;
let passedDialogs = [];
let currentVerbIndex = 0;
let passedVerbs = [];
let currentNumberIndex = 0;
let passedNumbers = [];

const googleSheetWebAppUrl = "https://script.google.com/macros/s/AKfycbzZ6LB8l-XiH9E8bmJoLaubN7NX_-rLf3Dutp3km_yscpyQS1JMDSGf6p41KpyAdDF-/exec";

// ============================================================================
// 3. UTILITY FUNCTIONS
// ============================================================================
function fixSlang(t) {
  return t.replace(/\b(gonna|wanna|gotta|lemme|kinda|yeah)\b/gi, (m) =>
    ({ gonna: "going to", wanna: "want to", gotta: "got to", lemme: "let me", kinda: "kind of", yeah: "yes" })[m.toLowerCase()] || m
  );
}

function calculateAccuracy(spoken, target) {
  const s = spoken.trim().toLowerCase();
  const t = target.trim().toLowerCase();
  const m = Array(t.length + 1).fill(null).map(() => Array(s.length + 1).fill(null));
  for (let i = 0; i <= t.length; i++) m[i][0] = i;
  for (let j = 0; j <= s.length; j++) m[0][j] = j;
  for (let i = 1; i <= t.length; i++)
    for (let j = 1; j <= s.length; j++)
      m[i][j] = t[i - 1] === s[j - 1] ? m[i - 1][j - 1] : Math.min(m[i][j - 1] + 1, m[i - 1][j] + 1, m[i - 1][j - 1] + 1);
  return ((Math.max(t.length, s.length) - m[t.length][s.length]) / Math.max(t.length, s.length)) * 100;
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function saveToLocalStorage() {
  localStorage.setItem("yp_student_session", JSON.stringify(studentData));
}

function showToast(msg, type = "success") {
  const toast = document.createElement("div");
  const color = type === "success" ? "bg-emerald-600" : type === "error" ? "bg-rose-600" : "bg-indigo-600";
  toast.className = `fixed bottom-6 right-6 z-50 ${color} text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-xl animate-fade-in`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function markModuleComplete(moduleId) {
  studentData.progress[moduleId] = true;
  saveToLocalStorage();
  const btn = document.getElementById("btn-" + moduleId);
  if (btn) {
    btn.classList.add("active");
    if (!btn.querySelector(".done-badge")) {
      const badge = document.createElement("span");
      badge.className = "done-badge ml-auto text-emerald-400 text-xs font-bold";
      badge.textContent = "✓";
      btn.appendChild(badge);
    }
  }
}

// ============================================================================
// 4. SUBMISSION TO GOOGLE SHEETS (with proper error handling)
// ============================================================================
async function submitToSheet(payload) {
  try {
    const response = await fetch(googleSheetWebAppUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return true;
  } catch (err) {
    console.warn("Sheet submission failed:", err);
    return false;
  }
}

async function saveProgress(moduleId, extraData = {}) {
  const payload = {
    timestamp: new Date().toISOString(),
    studentName: studentData.name,
    studentEmail: studentData.email,
    studentPhone: studentData.phone,
    module: moduleId,
    ...extraData
  };

  saveToLocalStorage();
  const submitted = await submitToSheet(payload);
  markModuleComplete(moduleId);

  if (submitted) {
    showToast("✅ Progress saved and submitted!", "success");
  } else {
    showToast("💾 Progress saved locally. Sheet sync unavailable.", "info");
  }
}

// ============================================================================
// 5. MODULE RENDERER
// ============================================================================
window.switchModule = function (id) {
  currentModule = id;

  // Remove active from all nav btns
  document.querySelectorAll(".module-btn").forEach(b => b.classList.remove("active"));
  const activeBtn = document.getElementById("btn-" + id);
  if (activeBtn) activeBtn.classList.add("active");

  const container = document.getElementById("workspace-container");
  container.classList.remove("flex", "justify-center", "items-center", "text-center");
  container.classList.add("animate-fade-in");

  switch (id) {
    case "founder": renderFounder(container); break;
    case "grooming": renderGrooming(container); break;
    case "tone": renderTone(container); break;
    case "greetings": renderGreetings(container); break;
    case "general": renderGeneral(container); break;
    case "scenario": renderScenario(container); break;
    case "vocabulary": renderVocabulary(container); break;
    case "emotions": renderEmotions(container); break;
    case "verbs": renderVerbs(container); break;
    case "numbers": renderNumbers(container); break;
    case "playlist": renderPlaylist(container); break;
    default: container.innerHTML = `<p class="text-slate-400">Module coming soon.</p>`;
  }
};

// ============================================================================
// 6. MODULE: PROFILE & IDENTITY
// ============================================================================
function renderFounder(container) {
  const data = ypCurriculum.founder;
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">${data.title}</h2>
    <p class="text-sm text-slate-400 mb-6">${data.desc}</p>

    <div class="space-y-4 mb-6">
      ${data.facts.map(f => `
        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
          <div class="text-[10px] uppercase font-bold tracking-widest text-indigo-400 mb-1">${f.label}</div>
          <p class="text-sm text-slate-300 font-medium">${f.text}</p>
        </div>
      `).join("")}
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-4">
      <h3 class="text-sm font-black text-white mb-1">✍️ Friend Reflection</h3>
      <p class="text-[11px] text-slate-400 mb-3">Write at least <strong class="text-indigo-400">25 words</strong> about a friend — who they are, what makes them special, and what you admire about them.</p>
      <textarea id="friend-reflection-input" class="w-full min-h-[100px] bg-slate-950 border border-slate-800 text-slate-100 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500 transition font-medium leading-relaxed" placeholder="e.g. My best friend Amara is someone I have known since school. She is thoughtful, generous, and always knows how to make people feel welcome...">${studentData.friendReflection || ""}</textarea>
      <div id="friend-word-count" class="text-[10px] text-slate-500 mt-1">${countWords(studentData.friendReflection || "")} / 25 words minimum</div>
    </div>

    <button onclick="saveFounder()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition">💾 Save Profile & Reflection</button>
    <p id="founder-feedback" class="mt-3 text-xs font-bold"></p>
  `;

  document.getElementById("friend-reflection-input").addEventListener("input", function () {
    const wc = countWords(this.value);
    document.getElementById("friend-word-count").textContent = wc + " / 25 words minimum";
  });
}

window.saveFounder = function () {
  const reflection = document.getElementById("friend-reflection-input").value.trim();
  const fb = document.getElementById("founder-feedback");
  if (countWords(reflection) < 25) {
    fb.textContent = "❌ Please write at least 25 words in your friend reflection.";
    fb.style.color = "#f87171";
    return;
  }
  studentData.friendReflection = reflection;
  fb.textContent = "✅ Profile saved!";
  fb.style.color = "#34d399";
  saveProgress("founder", { friendReflection: reflection });
};

// ============================================================================
// 7. MODULE: GROOMING
// ============================================================================
function renderGrooming(container) {
  const data = ypCurriculum.grooming;
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">${data.title}</h2>
    <p class="text-sm text-slate-400 mb-6">${data.desc}</p>
    <div class="space-y-3 mb-6">
      ${data.pillars.map((p, i) => `
        <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-start gap-4">
          <div class="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-sm font-black shrink-0">${i + 1}</div>
          <div class="flex-1">
            <div class="text-xs font-black text-white mb-0.5">${p.area}</div>
            <div class="text-xs text-slate-400">${p.rule}</div>
          </div>
          <input type="checkbox" id="groom-check-${i}" class="w-4 h-4 accent-indigo-500 shrink-0 mt-1">
        </div>
      `).join("")}
    </div>
    <button onclick="saveGrooming()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition">💾 Confirm & Save Grooming Check</button>
    <p id="grooming-feedback" class="mt-3 text-xs font-bold"></p>
  `;
}

window.saveGrooming = function () {
  const data = ypCurriculum.grooming;
  const fb = document.getElementById("grooming-feedback");
  const allChecked = data.pillars.every((_, i) => document.getElementById(`groom-check-${i}`).checked);
  if (!allChecked) {
    fb.textContent = "❌ Please confirm all grooming standards are met.";
    fb.style.color = "#f87171";
    return;
  }
  fb.textContent = "✅ Grooming standards confirmed!";
  fb.style.color = "#34d399";
  saveProgress("grooming", { groomingConfirmed: true });
};

// ============================================================================
// 8. MODULE: TONE (5 Dialogs)
// ============================================================================
function renderTone(container) {
  currentDialogIndex = 0;
  passedDialogs = [];
  renderToneDialog(container);
}

function renderToneDialog(container) {
  const dialogs = ypCurriculum.tone.dialogs;
  if (currentDialogIndex >= dialogs.length) {
    renderToneComplete(container);
    return;
  }
  const d = dialogs[currentDialogIndex];
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">Vocal Mechanics & Tone</h2>
    <p class="text-sm text-slate-400 mb-4">Dialog ${currentDialogIndex + 1} of ${dialogs.length}</p>

    <div class="flex gap-2 mb-6">
      ${dialogs.map((_, i) => `<div class="flex-1 h-1.5 rounded-full ${i < currentDialogIndex ? 'bg-emerald-500' : i === currentDialogIndex ? 'bg-indigo-500' : 'bg-slate-800'}"></div>`).join("")}
    </div>

    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 mb-4">
      <div class="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-2">Situation</div>
      <p class="text-sm text-white font-medium mb-4">${d.prompt}</p>
      <div class="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Say This:</div>
      <blockquote id="tone-target" class="text-base text-slate-200 italic leading-relaxed border-l-4 border-indigo-500 pl-4">${d.target}</blockquote>
      <p class="text-[11px] text-amber-400 mt-3">💡 ${d.hint}</p>
    </div>

    <div class="flex gap-3 flex-wrap">
      <button id="tone-start-btn" onclick="runToneTest()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2">
        🎤 Start Speaking
      </button>
      <button id="tone-save-btn" disabled onclick="passToneDialog()" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition opacity-50 flex items-center gap-2">
        ✅ Next Dialog
      </button>
    </div>
    <p id="tone-feedback" class="mt-4 text-sm font-bold"></p>
  `;
}

function renderToneComplete(container) {
  container.innerHTML = `
    <div class="text-center space-y-4 py-8">
      <span class="text-5xl">🏆</span>
      <h2 class="text-2xl font-black text-white">All 5 Dialogs Passed!</h2>
      <p class="text-slate-400 text-sm">Excellent vocal performance. Your pacing and pronunciation are hotel-ready.</p>
      <button onclick="saveProgress('tone', {dialogsPassed: 5})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition mt-4">
        💾 Save Tone Progress
      </button>
    </div>
  `;
}

window.runToneTest = function () {
  const fb = document.getElementById("tone-feedback");
  const startBtn = document.getElementById("tone-start-btn");
  const target = document.getElementById("tone-target").textContent.toLowerCase().replace(/[.,?!]/g, "");

  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    fb.textContent = "⚠️ Speech recognition not supported in this browser. Try Chrome.";
    fb.style.color = "#fbbf24";
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;

  startBtn.textContent = "🔴 Listening...";
  startBtn.classList.add("pulse-recording");
  fb.textContent = "Speak now — slowly and clearly...";
  fb.style.color = "#94a3b8";

  recognition.onresult = (e) => {
    startBtn.textContent = "🎤 Start Speaking";
    startBtn.classList.remove("pulse-recording");
    const spoken = fixSlang(e.results[0][0].transcript.toLowerCase().replace(/[.,?!]/g, ""));
    const accuracy = calculateAccuracy(spoken, target);

    if (accuracy < 85) {
      fb.innerHTML = `❌ Accuracy: ${accuracy.toFixed(0)}% — try again. Speak slowly and clearly.<br><span class="text-xs text-slate-400 font-normal">You said: "${spoken}"</span>`;
      fb.style.color = "#f87171";
    } else {
      fb.textContent = `✅ Excellent! Accuracy: ${accuracy.toFixed(0)}%`;
      fb.style.color = "#34d399";
      const saveBtn = document.getElementById("tone-save-btn");
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.classList.remove("opacity-50");
      }
    }
  };

  recognition.onerror = (e) => {
    startBtn.textContent = "🎤 Start Speaking";
    startBtn.classList.remove("pulse-recording");
    fb.textContent = "⚠️ Error: " + e.error + ". Please try again.";
    fb.style.color = "#fbbf24";
  };

  recognition.start();
};

window.passToneDialog = function () {
  passedDialogs.push(currentDialogIndex);
  currentDialogIndex++;
  const container = document.getElementById("workspace-container");
  renderToneDialog(container);
};

// ============================================================================
// 9. MODULE: GREETINGS & PROBLEM SOLVING
// ============================================================================
function renderGreetings(container) {
  const data = ypCurriculum.greetings;
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">${data.title}</h2>
    <p class="text-sm text-slate-400 mb-6">${data.desc}</p>
    <div class="space-y-6 mb-6">
      ${data.sections.map(section => `
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h3 class="text-sm font-black text-white mb-3">${section.heading}</h3>
          <ul class="space-y-2">
            ${section.items.map((item, i) => `
              <li class="flex gap-3 text-xs text-slate-300 leading-relaxed">
                <span class="text-indigo-400 font-black shrink-0">${i + 1}.</span>
                <span>"${item}"</span>
              </li>
            `).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
    <button onclick="saveProgress('greetings', {reviewed: true})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition">💾 Save Progress</button>
  `;
}

// ============================================================================
// 10. MODULE: GENERAL (Alphabets, Fill-In, Numbers Info)
// ============================================================================
function renderGeneral(container) {
  const data = ypCurriculum.general;
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">${data.title}</h2>
    <p class="text-sm text-slate-400 mb-6">${data.desc}</p>

    <div class="mb-6">
      <h3 class="text-sm font-black text-white mb-3">📚 Hospitality Alphabet</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
        ${data.alphabetData.map(a => `
          <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-lg font-black text-indigo-400">${a.letter}</span>
              <span class="text-xs font-bold text-white">${a.word}</span>
            </div>
            <p class="text-[10px] text-slate-500 italic leading-relaxed">"${a.usage}"</p>
          </div>
        `).join("")}
      </div>
    </div>

    <div class="mb-6">
      <h3 class="text-sm font-black text-white mb-3">✏️ Fill-In Exercises</h3>
      <div class="space-y-4">
        ${data.fillExercises.map((ex, i) => `
          <div class="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
            <p class="text-sm text-slate-300 mb-2">${ex.question.replace("________", `<input id="fill-${i}" type="text" placeholder="________" class="bg-slate-800 border border-slate-700 text-white rounded-lg px-2 py-0.5 text-sm focus:outline-none focus:border-indigo-500 w-32">`)}</p>
            <p class="text-[10px] text-amber-400 italic">💡 Hint: ${ex.hint}</p>
            <p id="fill-result-${i}" class="text-[11px] font-bold mt-1"></p>
          </div>
        `).join("")}
      </div>
      <button onclick="checkFillExercises()" class="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition">Check Answers</button>
    </div>

    <button onclick="saveProgress('general', {reviewed: true})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition">💾 Save Progress</button>
  `;
}

window.checkFillExercises = function () {
  const exercises = ypCurriculum.general.fillExercises;
  let allCorrect = true;
  exercises.forEach((ex, i) => {
    const input = document.getElementById(`fill-${i}`);
    const result = document.getElementById(`fill-result-${i}`);
    if (!input) return;
    const val = input.value.trim().toLowerCase();
    if (val === ex.answer.toLowerCase()) {
      result.textContent = "✅ Correct!";
      result.style.color = "#34d399";
      input.classList.add("border-emerald-500");
    } else {
      result.textContent = `❌ Try again. (Hint: starts with "${ex.answer[0].toUpperCase()}")`;
      result.style.color = "#f87171";
      input.classList.add("border-rose-500");
      allCorrect = false;
    }
  });
  if (allCorrect) showToast("🎉 All answers correct!", "success");
};

// ============================================================================
// 11. MODULE: SCENARIO (Long Passage Recording)
// ============================================================================
function renderScenario(container) {
  const data = ypCurriculum.scenario;
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">${data.title}</h2>
    <p class="text-sm text-slate-400 mb-6">${data.desc}</p>

    <div class="p-5 bg-slate-900 border border-l-4 border-indigo-500 rounded-2xl mb-4">
      <div class="text-[10px] uppercase font-bold text-indigo-400 tracking-widest mb-2">Read This Passage:</div>
      <p id="scenario-target" class="text-sm text-slate-200 italic leading-relaxed">${data.passage}</p>
    </div>

    <div class="flex gap-3 flex-wrap">
      <button id="scenario-start-btn" onclick="runScenarioTest()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2">
        🎤 Start Recording
      </button>
      <button id="scenario-save-btn" disabled onclick="saveProgress('scenario', {passageScore: window._scenarioScore})" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition opacity-50 flex items-center gap-2">
        💾 Save Progress
      </button>
    </div>
    <p id="scenario-feedback" class="mt-4 text-sm font-bold"></p>
  `;
}

window.runScenarioTest = function () {
  const fb = document.getElementById("scenario-feedback");
  const startBtn = document.getElementById("scenario-start-btn");
  const target = document.getElementById("scenario-target").textContent.toLowerCase().replace(/[.,?!-]/g, "");

  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    fb.textContent = "⚠️ Speech recognition not supported. Please use Google Chrome.";
    fb.style.color = "#fbbf24";
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  startBtn.textContent = "🔴 Recording...";
  startBtn.classList.add("pulse-recording");
  fb.textContent = "Reading now — speak the full passage slowly and clearly...";
  fb.style.color = "#94a3b8";

  recognition.onresult = (e) => {
    startBtn.textContent = "🎤 Start Recording";
    startBtn.classList.remove("pulse-recording");
    const spoken = fixSlang(e.results[0][0].transcript.toLowerCase().replace(/[.,?!-]/g, ""));
    const accuracy = calculateAccuracy(spoken, target);
    window._scenarioScore = accuracy.toFixed(0);

    if (accuracy < 85) {
      fb.innerHTML = `❌ Accuracy: ${accuracy.toFixed(0)}% — please try again. Speak clearly and at a measured pace.<br><span class="text-xs text-slate-500">You said: "${spoken.substring(0, 100)}..."</span>`;
      fb.style.color = "#f87171";
    } else {
      fb.textContent = `✅ Excellent reading! Accuracy: ${accuracy.toFixed(0)}%`;
      fb.style.color = "#34d399";
      const saveBtn = document.getElementById("scenario-save-btn");
      if (saveBtn) { saveBtn.disabled = false; saveBtn.classList.remove("opacity-50"); }
    }
  };

  recognition.onerror = (e) => {
    startBtn.textContent = "🎤 Start Recording";
    startBtn.classList.remove("pulse-recording");
    fb.textContent = "⚠️ Error: " + e.error;
    fb.style.color = "#fbbf24";
  };

  recognition.start();
};

// ============================================================================
// 12. MODULE: VOCABULARY
// ============================================================================
function renderVocabulary(container) {
  currentVerbIndex = 0;
  passedVerbs = [];
  renderVocabWord(container);
}

function renderVocabWord(container) {
  const words = ypCurriculum.vocabulary.words;
  if (currentVerbIndex >= words.length) {
    container.innerHTML = `
      <div class="text-center space-y-4 py-8">
        <span class="text-5xl">🏆</span>
        <h2 class="text-2xl font-black text-white">All Words Mastered!</h2>
        <p class="text-slate-400 text-sm">Your vocabulary pronunciation is hotel-ready.</p>
        <button onclick="saveProgress('vocabulary', {wordsPassed: ${words.length}})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition mt-4">💾 Save Vocabulary Progress</button>
      </div>`;
    return;
  }
  const w = words[currentVerbIndex];
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">Whiteboard Matrix Vocabulary</h2>
    <p class="text-sm text-slate-400 mb-4">Word ${currentVerbIndex + 1} of ${words.length}</p>
    <div class="flex gap-2 mb-6">
      ${words.map((_, i) => `<div class="flex-1 h-1.5 rounded-full ${i < currentVerbIndex ? 'bg-emerald-500' : i === currentVerbIndex ? 'bg-indigo-500' : 'bg-slate-800'}"></div>`).join("")}
    </div>
    <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl mb-4 text-center">
      <div class="text-4xl font-black text-white mb-1">${w.word}</div>
      <div class="text-indigo-400 text-sm mb-2">${w.phonetic}</div>
      <p class="text-xs text-slate-400 italic">"${w.example}"</p>
    </div>
    <div class="flex gap-3">
      <button id="vocab-start-btn" onclick="runVocabTest()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2">🎤 Pronounce It</button>
      <button id="vocab-next-btn" disabled onclick="nextVocabWord()" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition opacity-50 flex items-center gap-2">✅ Next Word</button>
    </div>
    <p id="vocab-feedback" class="mt-4 text-sm font-bold"></p>
  `;
}

window.runVocabTest = function () {
  const word = ypCurriculum.vocabulary.words[currentVerbIndex].word;
  const fb = document.getElementById("vocab-feedback");
  const startBtn = document.getElementById("vocab-start-btn");

  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    fb.textContent = "⚠️ Speech recognition not supported in this browser. Try Chrome.";
    fb.style.color = "#fbbf24";
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  startBtn.textContent = "🔴 Listening...";
  startBtn.classList.add("pulse-recording");

  recognition.onresult = (e) => {
    startBtn.textContent = "🎤 Pronounce It";
    startBtn.classList.remove("pulse-recording");
    const spoken = e.results[0][0].transcript.toLowerCase().trim();
    const accuracy = calculateAccuracy(spoken, word.toLowerCase());
    if (accuracy < 85) {
      fb.innerHTML = `❌ Accuracy: ${accuracy.toFixed(0)}% — you said "${spoken}". Try again.`;
      fb.style.color = "#f87171";
    } else {
      fb.textContent = `✅ Well pronounced! Accuracy: ${accuracy.toFixed(0)}%`;
      fb.style.color = "#34d399";
      const nextBtn = document.getElementById("vocab-next-btn");
      if (nextBtn) { nextBtn.disabled = false; nextBtn.classList.remove("opacity-50"); }
    }
  };

  recognition.onerror = (e) => {
    startBtn.textContent = "🎤 Pronounce It";
    startBtn.classList.remove("pulse-recording");
    fb.textContent = "⚠️ Error: " + e.error;
    fb.style.color = "#fbbf24";
  };

  recognition.start();
};

window.nextVocabWord = function () {
  passedVerbs.push(currentVerbIndex);
  currentVerbIndex++;
  renderVocabWord(document.getElementById("workspace-container"));
};

// ============================================================================
// 13. MODULE: EMOTIONS
// ============================================================================
function renderEmotions(container) {
  const data = ypCurriculum.emotions;
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">${data.title}</h2>
    <p class="text-sm text-slate-400 mb-6">${data.desc}</p>
    <div class="space-y-4 mb-6">
      ${data.scenarios.map((s, i) => `
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div class="text-[10px] uppercase tracking-widest font-bold text-amber-400 mb-1">Scenario ${i + 1}</div>
          <p class="text-sm font-bold text-white mb-3">${s.situation}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div class="p-3 bg-rose-900/20 border border-rose-900/50 rounded-xl">
              <div class="text-[10px] font-bold text-rose-400 uppercase mb-1">❌ Wrong Response</div>
              <p class="text-xs text-slate-300 italic">"${s.wrongResponse}"</p>
            </div>
            <div class="p-3 bg-emerald-900/20 border border-emerald-900/50 rounded-xl">
              <div class="text-[10px] font-bold text-emerald-400 uppercase mb-1">✅ Right Response</div>
              <p class="text-xs text-slate-300 italic">"${s.rightResponse}"</p>
            </div>
          </div>
          <div class="text-[10px] text-indigo-300 italic">💡 Principle: ${s.principle}</div>
        </div>
      `).join("")}
    </div>
    <button onclick="saveProgress('emotions', {reviewed: true})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition">💾 Save Progress</button>
  `;
}

// ============================================================================
// 14. MODULE: VERBS
// ============================================================================
function renderVerbs(container) {
  currentVerbIndex = 0;
  passedVerbs = [];
  renderVerbWord(container);
}

function renderVerbWord(container) {
  const actions = ypCurriculum.verbs.actions;
  if (currentVerbIndex >= actions.length) {
    container.innerHTML = `
      <div class="text-center space-y-4 py-8">
        <span class="text-5xl">🏆</span>
        <h2 class="text-2xl font-black text-white">All Verbs Mastered!</h2>
        <p class="text-slate-400 text-sm">Excellent pronunciation across all active verbs.</p>
        <button onclick="saveProgress('verbs', {verbsPassed: ${actions.length}})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition mt-4">💾 Save Verbs Progress</button>
      </div>`;
    return;
  }
  const v = actions[currentVerbIndex];
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">Active Verbs Pronunciation</h2>
    <p class="text-sm text-slate-400 mb-4">Verb ${currentVerbIndex + 1} of ${actions.length}</p>
    <div class="flex gap-2 mb-6">
      ${actions.map((_, i) => `<div class="flex-1 h-1.5 rounded-full ${i < currentVerbIndex ? 'bg-emerald-500' : i === currentVerbIndex ? 'bg-indigo-500' : 'bg-slate-800'}"></div>`).join("")}
    </div>
    <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl mb-4 text-center">
      <div class="text-4xl font-black text-white mb-1">${v.verb}</div>
      <div class="text-indigo-400 text-sm">${v.phonetic}</div>
    </div>
    <div class="flex gap-3">
      <button id="verb-start-btn" onclick="runVerbTest()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2">🎤 Pronounce It</button>
      <button id="verb-next-btn" disabled onclick="nextVerbWord()" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition opacity-50 flex items-center gap-2">✅ Next Verb</button>
    </div>
    <p id="verb-feedback" class="mt-4 text-sm font-bold"></p>
  `;
}

window.runVerbTest = function () {
  const verb = ypCurriculum.verbs.actions[currentVerbIndex].verb;
  const fb = document.getElementById("verb-feedback");
  const startBtn = document.getElementById("verb-start-btn");

  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    fb.textContent = "⚠️ Speech recognition not supported. Try Chrome.";
    fb.style.color = "#fbbf24";
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  startBtn.textContent = "🔴 Listening...";
  startBtn.classList.add("pulse-recording");

  recognition.onresult = (e) => {
    startBtn.textContent = "🎤 Pronounce It";
    startBtn.classList.remove("pulse-recording");
    const spoken = e.results[0][0].transcript.toLowerCase().trim();
    const accuracy = calculateAccuracy(spoken, verb.toLowerCase());
    if (accuracy < 85) {
      fb.innerHTML = `❌ Accuracy: ${accuracy.toFixed(0)}% — you said "${spoken}". Try again.`;
      fb.style.color = "#f87171";
    } else {
      fb.textContent = `✅ Correct! Accuracy: ${accuracy.toFixed(0)}%`;
      fb.style.color = "#34d399";
      const nextBtn = document.getElementById("verb-next-btn");
      if (nextBtn) { nextBtn.disabled = false; nextBtn.classList.remove("opacity-50"); }
    }
  };

  recognition.onerror = (e) => {
    startBtn.textContent = "🎤 Pronounce It";
    startBtn.classList.remove("pulse-recording");
    fb.textContent = "⚠️ Error: " + e.error;
    fb.style.color = "#fbbf24";
  };

  recognition.start();
};

window.nextVerbWord = function () {
  passedVerbs.push(currentVerbIndex);
  currentVerbIndex++;
  renderVerbWord(document.getElementById("workspace-container"));
};

// ============================================================================
// 15. MODULE: TRICKY NUMBERS
// ============================================================================
function renderNumbers(container) {
  currentNumberIndex = 0;
  passedNumbers = [];
  renderNumberTest(container);
}

function renderNumberTest(container) {
  const pairs = ypCurriculum.numbers.pairs;
  if (currentNumberIndex >= pairs.length) {
    container.innerHTML = `
      <div class="text-center space-y-4 py-8">
        <span class="text-5xl">🎉</span>
        <h2 class="text-2xl font-black text-white">All 5 Numbers Passed!</h2>
        <p class="text-slate-400 text-sm">You can clearly distinguish and pronounce tricky number pairs.</p>
        <button onclick="saveProgress('numbers', {numbersPassed: ${pairs.length}})" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl text-sm transition mt-4">💾 Save Numbers Progress</button>
      </div>`;
    return;
  }
  const p = pairs[currentNumberIndex];
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">Tricky Numbers Speaking Test</h2>
    <p class="text-sm text-slate-400 mb-4">Number ${currentNumberIndex + 1} of ${pairs.length}</p>
    <div class="flex gap-2 mb-6">
      ${pairs.map((_, i) => `<div class="flex-1 h-1.5 rounded-full ${i < currentNumberIndex ? 'bg-emerald-500' : i === currentNumberIndex ? 'bg-indigo-500' : 'bg-slate-800'}"></div>`).join("")}
    </div>
    <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl mb-4">
      <div class="flex items-center justify-center gap-6 mb-4">
        <div class="text-center">
          <div class="text-5xl font-black text-white mb-1">${p.target}</div>
          <div class="text-[10px] uppercase tracking-widest text-emerald-400 font-bold">SAY THIS</div>
        </div>
        <div class="text-slate-600 font-bold text-2xl">vs</div>
        <div class="text-center opacity-40">
          <div class="text-5xl font-black text-slate-500 mb-1">${p.similar}</div>
          <div class="text-[10px] uppercase tracking-widest text-rose-400 font-bold">NOT THIS</div>
        </div>
      </div>
      <div class="text-center p-3 bg-slate-800 rounded-xl text-sm text-slate-300 italic mb-2">"${p.context}"</div>
      <p class="text-center text-[11px] text-amber-400">💡 ${p.tip}</p>
    </div>
    <div class="flex gap-3">
      <button id="num-start-btn" onclick="runNumberTest()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition flex items-center gap-2">🎤 Say The Number</button>
      <button id="num-next-btn" disabled onclick="nextNumber()" class="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-xs transition opacity-50 flex items-center gap-2">✅ Next Number</button>
    </div>
    <p id="num-feedback" class="mt-4 text-sm font-bold"></p>
  `;
}

window.runNumberTest = function () {
  const target = ypCurriculum.numbers.pairs[currentNumberIndex].target;
  const similar = ypCurriculum.numbers.pairs[currentNumberIndex].similar;
  const fb = document.getElementById("num-feedback");
  const startBtn = document.getElementById("num-start-btn");

  if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
    fb.textContent = "⚠️ Speech recognition not supported. Try Chrome.";
    fb.style.color = "#fbbf24";
    return;
  }

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  startBtn.textContent = "🔴 Listening...";
  startBtn.classList.add("pulse-recording");

  recognition.onresult = (e) => {
    startBtn.textContent = "🎤 Say The Number";
    startBtn.classList.remove("pulse-recording");
    const spoken = e.results[0][0].transcript.toLowerCase().trim();

    if (spoken.includes(similar) && !spoken.includes(target)) {
      fb.innerHTML = `❌ You said "${spoken}" — that sounds like <strong>${similar}</strong>. Say <strong>${target}</strong> clearly with stress on the TEEN ending.`;
      fb.style.color = "#f87171";
      return;
    }

    if (!spoken.includes(target)) {
      fb.innerHTML = `❌ Not recognised as "${target}". You said: "${spoken}". Try again.`;
      fb.style.color = "#f87171";
      return;
    }

    fb.textContent = `✅ Perfect! "${target}" is clear and correct.`;
    fb.style.color = "#34d399";
    const nextBtn = document.getElementById("num-next-btn");
    if (nextBtn) { nextBtn.disabled = false; nextBtn.classList.remove("opacity-50"); }
  };

  recognition.onerror = (e) => {
    startBtn.textContent = "🎤 Say The Number";
    startBtn.classList.remove("pulse-recording");
    fb.textContent = "⚠️ Error: " + e.error;
    fb.style.color = "#fbbf24";
  };

  recognition.start();
};

window.nextNumber = function () {
  passedNumbers.push(currentNumberIndex);
  currentNumberIndex++;
  renderNumberTest(document.getElementById("workspace-container"));
};

// ============================================================================
// 16. MODULE: PLAYLIST / REFLECTION
// ============================================================================
function renderPlaylist(container) {
  container.innerHTML = `
    <h2 class="text-2xl font-black text-white mb-1">Rhythm Lounge & Reflection</h2>
    <p class="text-sm text-slate-400 mb-6">Wind down and reflect on today's training session.</p>
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-4">
      <h3 class="text-sm font-black text-white mb-1">📝 Training Reflection</h3>
      <p class="text-[11px] text-slate-400 mb-3">What was your biggest learning today? What will you practise before the next session? (Minimum 20 words)</p>
      <textarea id="playlist-reflection" class="w-full min-h-[100px] bg-slate-950 border border-slate-800 text-slate-100 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500 transition font-medium leading-relaxed" placeholder="Write your reflection here..."></textarea>
      <div id="playlist-wc" class="text-[10px] text-slate-500 mt-1">0 / 20 words minimum</div>
    </div>
    <button onclick="savePlaylist()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition">💾 Save Reflection</button>
    <p id="playlist-feedback" class="mt-3 text-xs font-bold"></p>
  `;
  document.getElementById("playlist-reflection").addEventListener("input", function () {
    document.getElementById("playlist-wc").textContent = countWords(this.value) + " / 20 words minimum";
  });
}

window.savePlaylist = function () {
  const text = document.getElementById("playlist-reflection").value.trim();
  const fb = document.getElementById("playlist-feedback");
  if (countWords(text) < 20) {
    fb.textContent = "❌ Please write at least 20 words.";
    fb.style.color = "#f87171";
    return;
  }
  fb.textContent = "✅ Reflection saved!";
  fb.style.color = "#34d399";
  saveProgress("playlist", { reflection: text });
};

// ============================================================================
// 17. INITIALIZATION
// ============================================================================

// Word count listener for interview answer
const studentAnswerEl = document.getElementById("student-answer");
if (studentAnswerEl) {
  studentAnswerEl.addEventListener("input", function () {
    const wc = countWords(this.value);
    const counter = document.getElementById("word-count-interview");
    if (counter) counter.textContent = wc + " / 50 words minimum";
  });
}

document.getElementById("learner-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const ans = document.getElementById("student-answer").value.trim();
  const fb = document.getElementById("answer-feedback");

  if (countWords(ans) < 50) {
    fb.textContent = "❌ Please write at least 50 words in your interview answer.";
    fb.classList.remove("hidden");
    return;
  }

  fb.classList.add("hidden");

  studentData.name = document.getElementById("student-name").value;
  studentData.email = document.getElementById("student-email").value;
  studentData.phone = document.getElementById("student-phone").value;
  studentData.interviewAnswer = ans;

  // Try to restore from local storage
  const saved = localStorage.getItem("yp_student_session");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.name === studentData.name) {
        studentData = { ...studentData, ...parsed };
      }
    } catch (e) { /* ignore */ }
  }

  saveToLocalStorage();

  // Show learner summary in header
  document.getElementById("summary-name").textContent = studentData.name;
  document.getElementById("summary-email").textContent = studentData.email;
  document.getElementById("summary-phone").textContent = studentData.phone;
  document.getElementById("learner-summary").classList.remove("hidden");

  // Hide registration
  document.getElementById("registration-section").classList.add("hidden");

  // Enable all nav buttons
  document.querySelectorAll(".module-btn").forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("opacity-60", "cursor-not-allowed");
  });

  // Restore previously completed modules
  if (studentData.progress) {
    Object.keys(studentData.progress).forEach(moduleId => {
      markModuleComplete(moduleId);
    });
  }

  // Submit registration to sheet
  submitToSheet({
    timestamp: new Date().toISOString(),
    studentName: studentData.name,
    studentEmail: studentData.email,
    studentPhone: studentData.phone,
    module: "registration",
    interviewAnswer: ans
  });

  // Open first module
  switchModule("founder");

  showToast("🎉 Welcome, " + studentData.name + "! Training unlocked.", "success");
});
