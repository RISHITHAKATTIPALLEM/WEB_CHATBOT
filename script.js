const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user");
  userInput.value = "";

  showTypingIndicator();

  setTimeout(() => {
    const reply = getBotReply(message);
    removeTypingIndicator();
    displayMessage(reply, "bot");
  }, 1000);
}

function displayMessage(msg, sender) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);
  messageDiv.innerHTML = parseEmojis(msg);
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
  const typing = document.createElement("div");
  typing.classList.add("message", "bot-message");
  typing.id = "typing";
  typing.innerHTML = "<i>Typing...</i>";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById("typing");
  if (typing) typing.remove();
}

function parseEmojis(msg) {
  return msg
    .replace(":)", "😊")
    .replace(":(", "😢")
    .replace(":D", "😁")
    .replace("<3", "❤️");
}

function getBotReply(message) {
    const userMsg = message.toLowerCase();
  
    // Greeting detection
    if (/(^|\s)(hi|hello|hey|howdy|yo|good morning|good evening|good afternoon)(\s|$)/.test(userMsg)) {
      return "Hey there! 👋 I'm your personal portfolio chatbot. Ask me about MAX's education, skills, projects, or contact info.";
    }
  
    // Summary / About
    if (
      userMsg.includes("summary") ||
      userMsg.includes("about you") ||
      userMsg.includes("about rishitha") ||
      userMsg.includes("who are you") ||
      userMsg.includes("profile")
    ) {
      return `📖 Here's a quick summary:<br>
      MAX is a passionate and fast-learning engineering student with a strong foundation in computer science and a keen interest in AI/ML. 
      She enjoys exploring cutting-edge technologies and solving real-world problems through projects, internships, and self-learning. 🚀`;
    }
  
    // Education
    if (userMsg.includes("education") || userMsg.includes("study") || userMsg.includes("college")) {
      return "🎓 Rishitha is pursuing B.Tech in Computer Science (AI/ML) at Dayananda Sagar University, Bangalore. Expected graduation: May 2025. CGPA: 8.62/10.";
    }
  
    // Projects
    if (userMsg.includes("project") || userMsg.includes("built") || userMsg.includes("work")) {
      return `🛠️ MAX has worked on:<br>
      - 🚀 Predictive API for Manufacturing (FastAPI + ML)<br>
      - 📰 Fake News Detection using NLP (96% accuracy)<br>
      - 🔥 Hate News Detection with 94% precision/recall<br>
      - 🤖 AI Chatbot for Programming Assistance (Neural Networks + NLP)`;
    }
  
    // Technical Skills
    if (userMsg.includes("skill") || userMsg.includes("technology") || userMsg.includes("tools") || userMsg.includes("languages")) {
      return `💡 MAX is skilled in:<br>
      - Languages: Python, JavaScript, HTML, CSS, Java<br>
      - ML/AI: Machine Learning, Deep Learning, NLP<br>
      - Frameworks: scikit-learn, TensorFlow, Flask, MongoDB<br>
      - Tools: Git/GitHub, Google Colab, VS Code`;
    }
  
    // Internship
    if (userMsg.includes("intern") || userMsg.includes("experience") || userMsg.includes("rinex")) {
      return "💼 MAX completed a Data Science internship at Rinex Technology (May–June 2022), gaining hands-on experience in data analysis and problem-solving.";
    }
  
    // Certifications
    if (userMsg.includes("certification") || userMsg.includes("courses") || userMsg.includes("training")) {
      return `📜 Certifications:<br>
      - JavaScript (HackerRank)<br>
      - Introduction to AI (Great Learning)<br>
      - Python for Machine Learning (Great Learning)<br>
      - JSP (Udemy)`;
    }
  
    // Contact info
    if (userMsg.includes("contact") || userMsg.includes("email") || userMsg.includes("phone") || userMsg.includes("reach")) {
      return `📞 You can contact MAX here:<br>
      📧 maxjohnson99@gmail.com<br>
      ☎️ +91 9967583567<br>
      🔗 <a href="https://www.linkedin.com/in/20rishitha-kattipallem-9r9a" target="_blank">LinkedIn</a> | 
      <a href="https://github.com/RISHITHAKATTIPALLEM" target="_blank">GitHub</a>`;
    }
  
    // Goodbye
    if (userMsg.includes("bye") || userMsg.includes("goodbye") || userMsg.includes("see you")) {
      return "Goodbye! 👋 It was nice chatting. Explore more any time!";
    }
  
    // Fallback response
    return "Hmm 🤔 I didn’t catch that. Try asking about education, skills, projects, summary, or contact info.";
  }
  