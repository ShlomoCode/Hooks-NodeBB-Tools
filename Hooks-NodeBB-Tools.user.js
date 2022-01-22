// ==UserScript==
// @name         Hooks NodeBB Tools
// @namespace    https://madrichim.ovh
// @version      0.1
// @updateURL    https://github.com/ShlomoCode/Hooks-NodeBB-Tools/raw/main/
// @description  כלי בדיקה לhooks עבור אתרי NodeBB
// @author       ShlomoCode
// @match        https://mitmachim.top/*
// @match        https://tchumim.com/*
// ==/UserScript==

function testAction() {
    let action;
    action = prompt("אנא הכנס שם הוק מלא שברצונך לבדוק.");
    if (action) {
      app.alert({
        title: "הצלחה!",
        message: `ההוק "${action}" התווסף למצב בדיקה.`,
        location: "left-top",
        timeout: 2200,
        type: "success",
      });
      $(window).on(action, () => {
        alert(`שים לב: ההוק "${action}" הופעל כעת!`);
      });
    } else {
      app.alert({
        title: "שגיאה!",
        message: "לא הוזן שם הוק.",
        location: "left-top",
        timeout: 2200,
        type: "info",
      });
    }
  }
  
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which === 81) {
      testAction();
    }
  });
