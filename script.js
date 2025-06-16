import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js"; 
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDBR7-eY0fIVEW2usRbawXAD49j4N2bc9U",
    authDomain: "wwmmcgc-web-mmc.firebaseapp.com",
    projectId: "wwmmcgc-web-mmc",
    storageBucket: "wwmmcgc-web-mmc.appspot.com",
    messagingSenderId: "301934627104",
    appId: "1:301934627104:web:5dbb8ac196924b77e86f45"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Community Form Link Redirect
const communityFormLink = document.getElementById("community-form-link");
if (communityFormLink) {
    communityFormLink.addEventListener("click", (event) => {
        event.preventDefault();
        // Replace with the actual Google Form link below
        const googleFormLink = "https://docs.google.com/forms/d/12mqc03IIJ5ZSvRKXolegoAA_URIKxZRXbJ1h6yIDby0/edit?pli=1";
        window.location.href = googleFormLink;
    });
}

// Join Community Button Redirect
const joinCommunityBtn = document.getElementById("join-community-btn");
if (joinCommunityBtn) {
    joinCommunityBtn.addEventListener("click", () => {
        const whatsappLink = "https://chat.whatsapp.com/C6wiOXZnQN6HUIhf3dZQ1S";
        window.location.href = whatsappLink;
    });
}

const aboutCommunityBtn = document.getElementById("about-community-btn");
if (aboutCommunityBtn) {
  aboutCommunityBtn.addEventListener("click", () => {
    window.location.href = "about.html";  // Replace with your actual page URL
  });
}

// Logout Box Toggle
const arrowIcon = document.getElementById("arrow-icon");
const logoutBox = document.getElementById("logout-box");

if (arrowIcon && logoutBox) {
    arrowIcon.addEventListener("click", () => {
        logoutBox.style.display = logoutBox.style.display === "block" ? "none" : "block";
    });
}

// Logout Button Redirect to Login Page
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
        try {
            await signOut(auth);
            window.location.href = "login.html";
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    });
}
// Existing imports and Firebase initialization here...

// Back Button Redirect to Homepage
const backButton = document.getElementById("back-button");
if (backButton) {
  backButton.addEventListener("click", () => {
    window.location.href = "home.html";  // Change if your homepage filename is different
  });
}

// Top Join Button Redirect to WhatsApp Community
const topJoinButton = document.getElementById("top-join-btn");
if (topJoinButton) {
  topJoinButton.addEventListener("click", () => {
    // Add your WhatsApp community invite link here
    const whatsappCommunityLink = "https://chat.whatsapp.com/C6wiOXZnQN6HUIhf3dZQ1S";
    window.location.href = whatsappCommunityLink;
  });
}

// Bottom Join Button Redirect to WhatsApp Community
const bottomJoinButton = document.getElementById("bottom-join-btn");
if (bottomJoinButton) {
  bottomJoinButton.addEventListener("click", () => {
    // Add your WhatsApp community invite link here (can be same or different)
    const whatsappCommunityLink = "https://chat.whatsapp.com/C6wiOXZnQN6HUIhf3dZQ1S";
    window.location.href = whatsappCommunityLink;
  });
}

/// Clan Directory Cards Redirect to WhatsApp Clan Groups
// Assuming each clan card has a data attribute for the WhatsApp link
const clanCards = document.querySelectorAll(".clan-card");
clanCards.forEach((card) => {
  card.addEventListener("click", () => {
    const clanWhatsAppLink = card.getAttribute("data-whatsapp-link");
    if (clanWhatsAppLink) {
      window.location.href = clanWhatsAppLink;
    } else {
      alert("WhatsApp link not available for this clan.");
    }
  });
});

