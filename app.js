// ============================================================================
// 1. CURRICULUM DATA (You can edit the text inside these quotes later if needed)
// ============================================================================
const ypCurriculum = {
  founder: { 
    title: "Trainer Profile & Identity", 
    desc: "Introduce yourself. Fill in the brackets below, then write a short paragraph combining them.", 
    facts: [
      {label: "Identity", text: "My professional name is [Your Name]."}, 
      {label: "Location", text: "I am based in [Your City/Country]."},
      {label: "Motivation", text: "I chose hospitality because [Your Reason]."}
    ] 
  },
  grooming: { 
    title: "Grooming & Cleanliness Check", 
    desc: "Review the luxury standards, then take a photo of your face, teeth, and hands using the camera tool below.", 
    pillars: [
      {area: "Hair & Face", rule: "Hair must be neatly tied back or styled. Facial hair must be cleanly shaven or neatly trimmed."}, 
      {area: "Smile & Teeth", rule: "Breath must be fresh, teeth brushed. A warm, clean smile is your best uniform."},
      {area: "Hands & Nails", rule: "Nails must be short, clean, and unpolished. Hands must be sanitized."}
    ] 
  },
  tone: { 
    title: "Vocal Mechanics & Tone", 
    desc: "How we speak matters just as much as what we say.", 
    pillars: [
      {element: "Pitch", tip: "Keep your voice warm and steady. Avoid going too high when stressed."}, 
      {element: "Pacing", tip: "Speak clearly and unhurried. Let the guest absorb what you are saying."}
    ] 
  },
  greetings: { 
    title: "Greeting Scripts & Escalation", 
    desc: "Standard phrases for the front desk.", 
    actions: [
      "Good morning, warmly welcome to our property. How may I assist you today?", 
      "Please allow me a moment to look into that for you.", 
      "I apologize for the inconvenience. Let me connect you with my manager immediately."
    ] 
  },
  general: { 
    title: "Fundamentals & Alphabets", 
    desc: "The NATO Phonetic Alphabet for clear communication.", 
    actions: ["Alpha, Bravo, Charlie, Delta, Echo", "Foxtrot, Golf, Hotel, India, Juliet", "Kilo, Lima, Mike, November, Oscar"] 
  },
  scenario: { 
    title: "Recorded Audio Challenge", 
    desc: "Read the scenario below out loud. Use the audio recorder to capture your voice.", 
    scenarioText: "A VIP guest arrives 3 hours before check-in time. Their suite is currently occupied. Warmly apologize, offer them complimentary access to the executive lounge, and assure them you will prioritize their room clearing." 
  },
  vocabulary: { 
    title: "Whiteboard Matrix Vocabulary", 
    desc: "Key terminology for luxury hospitality operations.", 
    actions: ["Concierge", "Itinerary", "Amenities", "Turndown Service", "Occupancy Rate", "RevPAR"] 
  },
  emotions: { 
    title: "Handling Emotional Guests", 
    desc: "The W Framework for de-escalation.", 
    framework: [
      {w: "Who", purpose: "Acknowledge the person and their feelings first. 'I understand you are frustrated.'"}, 
      {w: "What", purpose: "Clarify the problem exactly. 'So the AC in your room is making a loud noise.'"},
      {w: "When", purpose: "Provide a specific timeframe for the solution. 'I will have engineering there in 5 minutes.'"}
    ] 
  },
  verbs: { 
    title: "Active Verbs Pronunciation", 
    desc: "Strong verbs convey confidence.", 
    actions: ["Accommodate", "Facilitate", "Anticipate", "Ensure", "Coordinate"] 
  },
  playlist: { 
    title: "Rhythm Lounge & Reflection", 
    desc: "Final thoughts. Use the recorder to leave any final notes for your instructor.", 
    actions: ["Speak clearly and reflect on what you learned today."] 
  }
};

// ============================================================================
// 2. CORE APP CONFIGURATION & STATE
// ============================================================================
const googleSheetWebAppUrl = "https://script.google.com/macros/s/AKfycbzZ6LB8l-XiH9E8bmJoLaubN7NX_-rLf3Dutp3km_yscpyQS1JMDSGf6p41KpyAdDF-/exec"; 

let studentData = {
  name: "", email: "", phone: "", interviewAnswer: "", friendReflection: "Not submitted",
  facePhoto: "", teethPhoto: "", fingersPhoto: "", audioRecording: ""
};

let activeMediaStream = null;
let mediaRecorder = null;
let audioChunks = [];

// ============================================================================
// 3. SESSION RESTORE (FIX FOR REFRESHING PAGE)
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  const savedSession = localStorage.getItem("yp_student_session");
  if (savedSession) {
    studentData = JSON.parse(savedSession);
    
    document.getElementById('registration-section').classList.add('hidden');
    document.getElementById('learner-summary').classList.remove('hidden');
    document.getElementById('summary-name').textContent = studentData.name;
    document.getElementById('summary-email').textContent = studentData.email;
    document.getElementById('summary-phone').textContent = studentData.phone;

    const buttons = document.querySelectorAll('#curriculum-nav button');
    buttons.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('cursor-not-allowed', 'opacity-60', 'bg-slate-900', 'text-slate-500');
      btn.classList.add('bg-slate-800', 'text-slate-200', 'hover:bg-indigo-900/40', 'hover:text-indigo-300');
    });

    injectFinalSubmitButton();
    setTimeout(() => { switchModule('founder'); }, 100);
  }
});

// ============================================================================
// 4. INITIALIZATION & FORM SUBMISSION
// ============================================================================
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

  studentData.name = document.getElementById('student-name').value;
  studentData.email = document.getElementById('student-email').value;
  studentData.phone = document.getElementById('student-phone').value;
  studentData.interviewAnswer = answer;

  // Save to Local Storage so it survives a refresh!
  localStorage.setItem("yp_student_session", JSON.stringify(studentData));

  document.getElementById('registration-section').classList.add('hidden');
  document.getElementById('learner-summary').classList.remove('hidden');
  document.getElementById('summary-name').textContent = studentData.name;
  document.getElementById('summary-email').textContent = studentData.email;
  document.getElementById('summary-phone').textContent = studentData.phone;

  const buttons = document.querySelectorAll('#curriculum-nav button');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('cursor-not-allowed', 'opacity-60', 'bg-slate-900', 'text-slate-500');
    btn.classList.add('bg-slate-800', 'text-slate-200', 'hover:bg-indigo-900/40', 'hover:text-indigo-300');
  });

  injectFinalSubmitButton();
  switchModule('founder');
});

// ============================================================================
// 5. MODULE NAVIGATION
// ============================================================================
window.switchModule = function(moduleId) {
  if (activeMediaStream) {
    activeMediaStream.getTracks().forEach(track => track.stop());
    activeMediaStream = null;
  }

  const container = document.getElementById('workspace-container');
  
  if (ypCurriculum[moduleId]) {
    const data = ypCurriculum[moduleId];
    let mediaUI = appendMediaInterfaces(moduleId);

    container.innerHTML = `
      <div class="w-full text-left animate-fade-in">
        <h2 class="text-2xl font-black text-white mb-2">${data.title}</h2>
        <p class="text-sm text-slate-400 mb-6">${data.desc}</p>
        <div class="space-y-4">
          ${renderContent(moduleId, data)}
        </div>
        ${mediaUI}
      </div>
    `;
  }
}

// ============================================================================
// 6. UI RENDERING ENGINE
// ============================================================================
function renderContent(id, data) {
  try {
    if (id === 'founder') {
      let html = data.facts.map(f => {
        let textWithInputs = f.text.replace(/\[(.*?)\]/g, '<input type="text" placeholder="$1" class="bg-slate-800 border border-slate-600 text-white px-2 py-1 rounded mx-1 text-xs focus:outline-none focus:border-indigo-500 inline-block w-32">');
        return `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${f.label}</span><p class="text-xs text-slate-300 leading-loose">${textWithInputs}</p></div>`;
      }).join('');
      
      html += `
        <div class="mt-6 p-4 bg-slate-900 border border-slate-700 rounded-xl">
          <h3 class="text-sm font-bold text-white mb-2">📝 Writing Exercise: Friend Reflection</h3>
          <p class="text-[11px] text-slate-400 mb-3">Write a short paragraph combining the facts above into a smooth introduction.</p>
          <textarea onchange="studentData.friendReflection = this.value; localStorage.setItem('yp_student_session', JSON.stringify(studentData));" class="w-full min-h-[100px] bg-slate-950 border border-slate-800 text-slate-100 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500 transition" placeholder="Write your reflection here...">${studentData.friendReflection !== "Not submitted" ? studentData.friendReflection : ""}</textarea>
        </div>
      `;
      return html;
    }
    
    if (data.pillars) return data.pillars.map(p => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${p.area || p.element}</span><p class="text-xs text-slate-300">${p.rule || p.tip}</p></div>`).join('');
    if (data.framework) return data.framework.map(w => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${w.w}</span><p class="text-xs text-slate-300">${w.purpose}</p></div>`).join('');
    if (data.scenarioText) return `<div class="p-6 bg-indigo-900/30 rounded-xl border border-indigo-500/50 text-indigo-100 text-sm italic shadow-inner">"${data.scenarioText}"</div>`;
    
    let fallbackHtml = '';
    for (let key in data) {
      if (Array.isArray(data[key])) {
        fallbackHtml += data[key].map(item => {
          let text = typeof item === 'string' ? item : (item.word || item.text || item.title || JSON.stringify(item));
          return `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-sm text-slate-200">${text}</div>`;
        }).join('');
      }
    }
    if (fallbackHtml) return fallbackHtml;

    return `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><p class="text-xs text-slate-500">Content Loaded Successfully.</p></div>`;
  } catch (error) {
    return `<div class="p-4 bg-rose-900/30 border border-rose-500 rounded-xl text-rose-300 text-xs">Error rendering module: ${error.message}</div>`;
  }
}

// ============================================================================
// 7. CAMERA & MICROPHONE FUNCTIONS
// ============================================================================
function appendMediaInterfaces(moduleId) {
  let html = '';
  
  if (moduleId === 'grooming') {
    html += `
      <div class="mt-8 p-5 bg-slate-900/80 border border-slate-700 rounded-2xl">
        <h3 class="text-sm font-bold text-white mb-4 flex items-center gap-2"><span>📸</span> Grooming Evidence Upload</h3>
        
        <div class="flex gap-4 mb-4">
          <button onclick="startCamera('face')" class="bg-slate-800 hover:bg-indigo-600 text-xs text-white px-4 py-2 rounded-lg transition">Capture Face</button>
          <button onclick="startCamera('teeth')" class="bg-slate-800 hover:bg-indigo-600 text-xs text-white px-4 py-2 rounded-lg transition">Capture Teeth</button>
          <button onclick="startCamera('fingers')" class="bg-slate-800 hover:bg-indigo-600 text-xs text-white px-4 py-2 rounded-lg transition">Capture Hands</button>
        </div>

        <div id="camera-container" class="hidden flex flex-col items-center mb-4 bg-black rounded-xl overflow-hidden relative w-full max-w-sm mx-auto aspect-[4/3]">
           <video id="video-preview" class="w-full h-full object-cover" autoplay playsinline></video>
           <button id="snap-btn" class="absolute bottom-4 bg-rose-600 text-white font-bold py-2 px-6 rounded-full text-xs shadow-lg hover:bg-rose-500">Snap Photo</button>
        </div>

        <div class="grid grid-cols-3 gap-2 mt-4">
          <div class="text-center"><p class="text-[10px] text-slate-400 mb-1">Face</p><img id="preview-face" class="w-full h-24 object-cover rounded-lg border border-slate-700 bg-slate-950" src="${studentData.facePhoto || ''}"></div>
          <div class="text-center"><p class="text-[10px] text-slate-400 mb-1">Teeth</p><img id="preview-teeth" class="w-full h-24 object-cover rounded-lg border border-slate-700 bg-slate-950" src="${studentData.teethPhoto || ''}"></div>
          <div class="text-center"><p class="text-[10px] text-slate-400 mb-1">Hands</p><img id="preview-fingers" class="w-full h-24 object-cover rounded-lg border border-slate-700 bg-slate-950" src="${studentData.fingersPhoto || ''}"></div>
        </div>
      </div>
    `;
  }

  if (moduleId === 'scenario' || moduleId === 'playlist') {
    html += `
      <div class="mt-8 p-5 bg-slate-900/80 border border-slate-700 rounded-2xl text-center">
        <h3 class="text-sm font-bold text-white mb-2 flex items-center justify-center gap-2"><span>🎙️</span> Audio Recording</h3>
        <p class="text-[10px] text-slate-400 mb-4">Click start to record your voice. Allow microphone permissions if prompted.</p>
        
        <div class="flex justify-center gap-4">
          <button id="btn-record-start" onclick="startRecording()" class="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-xl text-xs shadow-lg transition flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span> Start Recording
          </button>
          <button id="btn-record-stop" onclick="stopRecording()" class="hidden bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl text-xs shadow-lg transition">
            Stop & Save
          </button>
        </div>
        <div id="audio-status" class="mt-3 text-xs font-bold text-emerald-400"></div>
        ${studentData.audioRecording ? '<div class="mt-3 text-xs text-indigo-300">✅ Audio currently saved in memory.</div>' : ''}
      </div>
    `;
  }

  return html;
}

window.startCamera = async function(type) {
  const container = document.getElementById('camera-container');
  const video = document.getElementById('video-preview');
  const snapBtn = document.getElementById('snap-btn');
  
  container.classList.remove('hidden');

  try {
    if (activeMediaStream) {
      activeMediaStream.getTracks().forEach(track => track.stop());
    }
    activeMediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
    video.srcObject = activeMediaStream;
    
    snapBtn.onclick = () => snapPhoto(type, video, container);
  } catch (err) {
    alert("Camera access denied or unavailable.");
    container.classList.add('hidden');
  }
}

window.snapPhoto = function(type, video, container) {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  
  const base64Data = canvas.toDataURL('image/jpeg', 0.8);
  studentData[type + 'Photo'] = base64Data;
  localStorage.setItem("yp_student_session", JSON.stringify(studentData));

  document.getElementById('preview-' + type).src = base64Data;
  
  if (activeMediaStream) {
    activeMediaStream.getTracks().forEach(track => track.stop());
    activeMediaStream = null;
  }
  container.classList.add('hidden');
}

window.startRecording = async function() {
  try {
    activeMediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(activeMediaStream);
    audioChunks = [];

    mediaRecorder.ondataavailable = e => {
      if (e.data.size > 0) audioChunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = () => {
        studentData.audioRecording = reader.result;
        localStorage.setItem("yp_student_session", JSON.stringify(studentData));
        document.getElementById('audio-status').textContent = "✅ Audio saved successfully!";
      };
    };

    mediaRecorder.start();
    document.getElementById('btn-record-start').classList.add('hidden');
    document.getElementById('btn-record-stop').classList.remove('hidden');
    document.getElementById('audio-status').textContent = "🔴 Recording in progress...";
    document.getElementById('audio-status').classList.replace('text-emerald-400', 'text-rose-400');
  } catch (err) {
    alert("Microphone access denied or unavailable.");
  }
}

window.stopRecording = function() {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    if (activeMediaStream) {
      activeMediaStream.getTracks().forEach(track => track.stop());
      activeMediaStream = null;
    }
    document.getElementById('btn-record-stop').classList.add('hidden');
    document.getElementById('btn-record-start').classList.remove('hidden');
    document.getElementById('btn-record-start').innerHTML = "↻ Re-record";
    document.getElementById('audio-status').classList.replace('text-rose-400', 'text-emerald-400');
    document.getElementById('audio-status').textContent = "Processing audio...";
  }
}

// ============================================================================
// 8. FINAL SUBMISSION TO BACKEND
// ============================================================================
function injectFinalSubmitButton() {
  const nav = document.getElementById('curriculum-nav');
  if (!document.getElementById('btn-final-submit')) {
      const btn = document.createElement('button');
      btn.id = "btn-final-submit";
      btn.className = "w-full text-center p-4 mt-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition shadow-lg shadow-emerald-600/20";
      btn.innerHTML = "📤 Submit Final Assignment";
      btn.onclick = submitAllDataToGoogle;
      nav.appendChild(btn);
  }
}

function submitAllDataToGoogle() {
  const btn = document.getElementById('btn-final-submit');
  btn.innerHTML = "⏳ Uploading... Please Wait";
  btn.disabled = true;
  btn.classList.replace('bg-emerald-600', 'bg-slate-600');
  
  fetch(googleSheetWebAppUrl, {
    method: 'POST',
    body: JSON.stringify(studentData),
    headers: { 'Content-Type': 'text/plain;charset=utf-8' }
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
      btn.classList.replace('bg-slate-600', 'bg-rose-600');
    }
  })
  .catch(err => {
    alert("Network error: " + err.message);
    btn.innerHTML = "❌ Try Again";
    btn.disabled = false;
    btn.classList.replace('bg-slate-600', 'bg-rose-600');
  });
}
