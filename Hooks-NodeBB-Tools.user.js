// ==UserScript==
// @name         Hooks NodeBB Tools
// @namespace    https://madrichim.ovh
// @version      0.2
// @updateURL    https://github.com/ShlomoCode/Hooks-NodeBB-Tools/raw/main/
// @description  כלי בדיקת הוקים לאתרי נודביבי
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
        $(window).on(action, function(event, data) {
            console.log("Data:");
            console.log(data);
            console.log("Event:");
            console.log(event);
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

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which === 81) {
        testAction();
    }
});