# Hooks-NodeBB-Tools
סקריפט למציאת הוקים (hooks) באתרי NodeBB. 
הסקריפט מופעל בלחיצה על מקש קונטרול + Q (לא משנה באיזה מצב שפה נמצאים - עברית או אנגלית).

ניתן גם לבדוק כמה הוקים בו זמנית - פשוט לוחצים כמה פעמים על הקונטרול + Q וכל פעם מכניסים הוק אחר לבדיקה.
באם הוכנס הוק - תוקפץ הודעת אישור עם שם ההוק, באם לא הוכנס שם הוק תקין (מתחיל ב"action" או ב"event") - תישלח הודעת שגיאה.

הסקריפט 'עוקב' אחרי ההוק שהוגדר, וכאשר הוא נפלט - מקפיץ alert עם שם ההוק שהופעל, ומדפיס בconsole את המידע שהוחזר ממנו.

להתקנת (או עדכון) הסקריפט יש להיכנס לכתובת הבאה ולאשר: https://github.com/ShlomoCode/Hooks-NodeBB-Tools/raw/main/Hooks-NodeBB-Tools.user.js

**חובה** להתקין **קודם** את התוסף "tampermonkey";
* לכרום: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=iw
* לפיירפוקס: https://addons.mozilla.org/he/firefox/addon/tampermonkey
