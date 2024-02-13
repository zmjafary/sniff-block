(function () {
    function disableCopyPaste(element) {
        if (element) {
            ["mousedown", "selectstart", "copy", "cut", "paste", "dragstart", "drop"].forEach(function (event) {
                element.addEventListener(event, function (e) {
                    e.preventDefault();
                    return false;
                });
            });
        }
    }

    function detectDevTool(allow) {
        allow = isNaN(+allow) ? 100 : +allow;
        var start = +new Date();
        eval("debugger");
        var end = +new Date();
        if (isNaN(start) || isNaN(end) || end - start > allow) {
            document.body.innerHTML = '';
        }
    }

    function disableRightClick(event) {
        event.preventDefault();
    }

    function disableShortcuts(event) {
        const forbiddenKeys = [67, 86, 85, 117, 123, 73, 82];
        if (forbiddenKeys.includes(event.keyCode)) {
            event.preventDefault();
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        disableCopyPaste(document.body);
        disableCopyPaste(document.querySelector("input[type='text']"));
    });

    function attachEventListeners() {
        detectDevTool();
        ["resize", "mousemove", "focus", "blur"].forEach(function (event) {
            window.addEventListener(event, detectDevTool);
        });
        document.addEventListener('contextmenu', disableRightClick);
        document.addEventListener('keydown', disableShortcuts);
    }

    if (window.attachEvent) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            attachEventListeners();
        } else {
            setTimeout(arguments.callee, 0);
        }
    } else {
        window.addEventListener('load', attachEventListeners);
    }
})();
