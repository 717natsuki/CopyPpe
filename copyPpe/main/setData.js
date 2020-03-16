

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAbP6Ul0V4XeeKksseTkMAvyGjXNVpGdTY",
  authDomain: "copy-7b6d4.firebaseapp.com",
  projectId: "copy-7b6d4",
});
var db = firebase.firestore();


function function1() {
  var words = document.getElementById("myTextarea").value;
  var somevalue;
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://nandemo-proj.work/api/v1/copipe', true)
  xhr.setRequestHeader("Content-Type", "application/json")
  var data = JSON.stringify({
    "text": words
  });

  xhr.send(data)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var somevalue = xhr.responseText
      somevalue = somevalue.slice(1);

      // Removing the last character
      somevalue = somevalue.slice(0, somevalue.length - 1);

      document.getElementById("demo").innerHTML = somevalue;
      var ts = new Date();

      var db_of_translate = db.collection("translate_text").doc(ts.toJSON());
      return db_of_translate.set({
          before_text: words,
          after_text: somevalue,
        })
        .then(function() {
          console.log("Document successfully updated!");
          console.log(words);
          // console.log(Date(Date.now().seconds*100))
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  }

}
