function check(choice) {
const r = document.getElementById("result");
if (choice === "b") {
r.textContent = "✅ Bonne réponse (niveau B2)";
r.style.color = "green";
} else {
r.textContent = "❌ Mauvaise réponse";
r.style.color = "red";
}
}

let recorder;
let chunks = [];

function startRec() {
navigator.mediaDevices.getUserMedia({ audio: true })
.then(stream => {
recorder = new MediaRecorder(stream);
recorder.start();
chunks = [];

recorder.ondataavailable = e => chunks.push(e.data);
recorder.onstop = () => {
const blob = new Blob(chunks);
document.getElementById("play").src = URL.createObjectURL(blob);
};
});
}

function stopRec() {
recorder.stop();
}
