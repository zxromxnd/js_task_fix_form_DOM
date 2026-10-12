"use strict";var inputs=document.querySelectorAll("form input");inputs.forEach(function(e){var t=e.name,a=e.id,l=document.createElement("label");l.className="field-label",l.setAttribute("for",a);var n=t[0].toUpperCase()+t.slice(1);l.textContent=n,e.placeholder=n,e.parentElement.append(l)});
//# sourceMappingURL=js_task_fix_form_DOM.7bb6eff7.js.map
