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

            function disableRightClick(event) {
                event.preventDefault();
            }

            function disableShortcuts(event) {
                const forbiddenKeys = [67, 86, 85, 117, 123, 73, 82];
                if (forbiddenKeys.includes(event.keyCode)) {
                    event.preventDefault();
                }
            }

            function detectDevTool(allow) {
                if (isNaN(+allow)) allow = 100;
                var start = performance.now();
                eval("debugger");
                var end = performance.now();
                if (isNaN(start) || isNaN(end) || end - start > allow) {
                    window.location.reload();
                }
            }

            function attachHandlers() {
                window.addEventListener('resize', detectDevTool);
                window.addEventListener('mousemove', detectDevTool);
                window.addEventListener('focus', detectDevTool);
                window.addEventListener('blur', detectDevTool);
                window.addEventListener('contextmenu', disableRightClick);
                window.addEventListener('keydown', disableShortcuts);
                disableCopyPaste(document.body);
                disableCopyPaste(document.querySelector("input[type='text']"));
            }

            if (window.attachEvent) {
                if (document.readyState === "complete" || document.readyState === "interactive") {
                    detectDevTool();
                    ["resize", "mousemove", "focus", "blur", "contextmenu", "keydown"].forEach(function (event) {
                        window.attachEvent('on' + event, detectDevTool);
                    });
                    attachHandlers();
                } else {
                    setTimeout(arguments.callee, 0);
                }
            } else {
                window.addEventListener('load', detectDevTool);
                attachHandlers();
            }
        })();
