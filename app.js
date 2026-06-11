// --- KEEP YOUR ypCurriculum OBJECT AT THE TOP HERE ---

// Updated URL
const googleSheetWebAppUrl = "https://script.google.com/macros/s/AKfycbzZ6LB8l-XiH9E8bmJoLaubN7NX_-rLf3Dutp3km_yscpyQS1JMDSGf6p41KpyAdDF-/exec"; 

let studentData = {
  name: "", 
  email: "", 
  phone: "", 
  interviewAnswer: "", 
  friendReflection: "Not submitted",
  facePhoto: "", 
  teethPhoto: "", 
  fingersPhoto: "", 
  audioRecording: ""
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

  studentData.name = document.getElementById('student-name').value;
  studentData.email = document.getElementById('student-email').value;
  studentData.phone = document.getElementById('student-phone').value;
  studentData.interviewAnswer = answer;

  document.getElementById('learner-form').parentElement.classList.add('hidden');
  document.getElementById('learner-summary').classList.remove('hidden');
  document.getElementById('summary-name').textContent = studentData.name;
  document.getElementById('summary-email').textContent = studentData.email;
  document.getElementById('summary-phone').textContent = studentData.phone;

  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('cursor-not-allowed', 'opacity-60');
    btn.classList.add('hover:bg-indigo-900/40', 'hover:text-indigo-300');
  });

  injectFinalSubmitButton();
  switchModule('founder');
});

// --- 2. MODULE NAVIGATION ---
window.switchModule = function(moduleId) {
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
        ${typeof appendMediaInterfaces === 'function' ? appendMediaInterfaces(moduleId) : ''}
      </div>
    `;
  }
}

// --- 3. UI RENDERING (FIXED BLANKS & WRITING EXERCISE) ---
function renderContent(id, data) {
  if (id === 'founder') {
    let html = data.facts.map(f => {
      // This regex turns [Choose a Name] into a typed input box
      let textWithInputs = f.text.replace(/\[(.*?)\]/g, '<input type="text" placeholder="$1" class="bg-slate-800 border border-slate-600 text-white px-2 py-1 rounded mx-1 text-xs focus:outline-none focus:border-indigo-500 inline-block w-32">');
      return `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${f.label}</span><p class="text-xs text-slate-300 leading-loose">${textWithInputs}</p></div>`;
    }).join('');
    
    // Adding the missing Writing Exercise text area
    html += `
      <div class="mt-6 p-4 bg-slate-900 border border-slate-700 rounded-xl">
        <h3 class="text-sm font-bold text-white mb-2">📝 Writing Exercise: Friend Reflection</h3>
        <p class="text-[11px] text-slate-400 mb-3">Write a short paragraph combining the facts above into a smooth introduction.</p>
        <textarea onchange="studentData.friendReflection = this.value" class="w-full min-h-[100px] bg-slate-950 border border-slate-800 text-slate-100 rounded-xl p-3 text-xs focus:outline-none focus:border-indigo-500 transition" placeholder="Write your reflection here..."></textarea>
      </div>
    `;
    return html;
  }
  
  if (id === 'grooming' || id === 'tone') return data.pillars.map(p => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${p.area || p.element}</span><p class="text-xs text-slate-300">${p.rule || p.tip}</p></div>`).join('');
  if (id === 'emotions') return data.framework.map(w => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><span class="block text-[10px] font-bold text-indigo-400 uppercase">${w.w}</span><p class="text-xs text-slate-300">${w.purpose}</p></div>`).join('');
  if (id === 'verbs') return data.actions.map(a => `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300">${a}</div>`).join('');
  if (id === 'scenario') return `<div class="p-6 bg-indigo-900/30 rounded-xl border border-indigo-500/50 text-indigo-100 text-sm italic">"${data.scenarioText}"</div>`;
  return `<div class="p-4 bg-slate-950 rounded-xl border border-slate-800"><p class="text-xs text-slate-500">Standard content loaded.</p></div>`;
}

// ... (Keep your existing appendMediaInterfaces, startCamera, snapPhoto, startRecording, and stopRecording functions exactly as they were in the original file) ...

// --- 5. FINAL SUBMISSION TO BACKEND ---
function injectFinalSubmitButton() {
  const nav = document.querySelector('nav');
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
    headers: { 'Content-Type': 'text/plain;charset=utf-8' } // text/plain prevents strict CORS preflight blocks
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
