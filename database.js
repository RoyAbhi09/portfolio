const firebaseConfig = {
    apiKey: "AIzaSyDbNGluAGmDPj87mdNaVNj4_vLf8UcKQSw",
    authDomain: "test-e6fde.firebaseapp.com",
    databaseURL: "https://test-e6fde-default-rtdb.firebaseio.com",
    projectId: "test-e6fde",
    storageBucket: "test-e6fde.appspot.com",
    messagingSenderId: "830288171631",
    appId: "1:830288171631:web:6e3f1ee9cbfe0ca267b39a"
  };
  
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal("Name");
    var emailid = getElementVal("Email");
    var msgContent = getElementVal("Subject");
    saveMessages(name, emailid, msgContent);
    document.querySelector(".alert").style.display = "block";
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (Name, Email, Subject) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      Name: Name,
      EmailAddress: Email,
      Message: Subject,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };