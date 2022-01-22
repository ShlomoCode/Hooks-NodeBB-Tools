// ==UserScript==
// @name         Hooks NodeBB Tools
// @namespace    https://madrichim.ovh
// @version      1.2
// @updateURL    https://github.com/ShlomoCode/Hooks-NodeBB-Tools/raw/main/
// @description  כלי בדיקת הוקים לאתרי נודביבי
// @author       ShlomoCode
// @match        https://mitmachim.top/*
// @match        https://tchumim.com/*
// ==/UserScript==
function testAction() {
    let action;
    action = prompt("אנא הכנס שם הוק מלא שברצונך לבדוק.");
    let TypeHook;
    TypeHook = action.match(/(action|event:)/g);
    if (TypeHook) {
        app.alertSuccess(`ההוק "${action}" התווסף למצב בדיקה.`, 2050);
        switch (TypeHook[0]) {
            case "action":
                $(window).on(action, function(event, data) {
                    console.log("Data Hook:");
                    console.log(data);
                    console.log("Data Event Hook:");
                    console.log(event);
                    alert(`שים לב: ההוק "${action}" הופעל כעת!`);
                });
                break;
            case "event:":
                socket.on(action, function(data) {
                    console.log("Data Hook:");
                    console.log(data);
                    alert(`שים לב: ההוק "${action}" הופעל כעת!`);
                });
                break;
        }
    } else {
        app.alertError("לא הוזן שם הוק תקין!", 2200);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.which === 81) {
        testAction();
    }
});