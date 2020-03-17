

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAbP6Ul0V4XeeKksseTkMAvyGjXNVpGdTY",
  authDomain: "copy-7b6d4.firebaseapp.com",
  projectId: "copy-7b6d4",
});
var db = firebase.firestore();


function function1() {
  var words = document.getElementById("myTextarea").value;
console.log(words.length)

  if (words.length > 400){
    document.getElementById("errorDiv").innerHTML = '４００字以上はできません。';
    console.log('error')
  } else {
    console.log('changing')
    var somevalue;
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://ukasdmj.suishow.tokyo/copipe', true)
    xhr.setRequestHeader("Content-Type", "application/json")
    var data = JSON.stringify({
      "text": words,
      "desu":0
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
}

//
// https://obfuscator.io/
// var _0x6b7a=['setRequestHeader','demo','value','Document\x20successfully\x20updated!','slice','translate_text','application/json','AIzaSyAbP6Ul0V4XeeKksseTkMAvyGjXNVpGdTY','Error\x20updating\x20document:\x20','log','myTextarea','Content-Type','doc','then','stringify','collection','copy-7b6d4','firestore','length','https://nandemo-proj.work/api/v1/copipe','catch','set','POST','status','copy-7b6d4.firebaseapp.com','getElementById','toJSON'];(function(_0x2c01ae,_0x6b7ab7){var _0x30232c=function(_0x4df663){while(--_0x4df663){_0x2c01ae['push'](_0x2c01ae['shift']());}};_0x30232c(++_0x6b7ab7);}(_0x6b7a,0x11d));var _0x3023=function(_0x2c01ae,_0x6b7ab7){_0x2c01ae=_0x2c01ae-0x0;var _0x30232c=_0x6b7a[_0x2c01ae];return _0x30232c;};firebase['initializeApp']({'apiKey':_0x3023('0x13'),'authDomain':_0x3023('0x9'),'projectId':_0x3023('0x1')});var db=firebase[_0x3023('0x2')]();function function1(){var _0x2db39d=document[_0x3023('0xa')](_0x3023('0x16'))[_0x3023('0xe')];var _0x533b86;var _0x4d19d1=new XMLHttpRequest();_0x4d19d1['open'](_0x3023('0x7'),_0x3023('0x4'),!![]);_0x4d19d1[_0x3023('0xc')](_0x3023('0x17'),_0x3023('0x12'));var _0x491d2d=JSON[_0x3023('0x1a')]({'text':_0x2db39d});_0x4d19d1['send'](_0x491d2d);_0x4d19d1['onreadystatechange']=function(){if(_0x4d19d1['readyState']===0x4&&_0x4d19d1[_0x3023('0x8')]===0xc8){var _0x3a6fee=_0x4d19d1['responseText'];_0x3a6fee=_0x3a6fee['slice'](0x1);_0x3a6fee=_0x3a6fee[_0x3023('0x10')](0x0,_0x3a6fee[_0x3023('0x3')]-0x1);document[_0x3023('0xa')](_0x3023('0xd'))['innerHTML']=_0x3a6fee;var _0x34e0c8=new Date();var _0x3c6c2c=db[_0x3023('0x0')](_0x3023('0x11'))[_0x3023('0x18')](_0x34e0c8[_0x3023('0xb')]());return _0x3c6c2c[_0x3023('0x6')]({'before_text':_0x2db39d,'after_text':_0x3a6fee})[_0x3023('0x19')](function(){console[_0x3023('0x15')](_0x3023('0xf'));console[_0x3023('0x15')](_0x2db39d);})[_0x3023('0x5')](function(_0x28c035){console['error'](_0x3023('0x14'),_0x28c035);});}};}
