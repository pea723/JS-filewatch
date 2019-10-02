# JS-filewatcher

Demonstrate file watching by JS relying on Native File API(debut on Chrome 78).

# Requirement

- Chrome 78 installed (only beta exists for the time writing this).
- Native File API enabled (enable it from [here](chrome://flags)).

# How it works

This get entries in selected directory every seconds once you hit the button, select the directory and let Chrome access to it.   Every files in the directory are treated as File, so that you can read the content by using FileReader. You can check this by clicking name of the file listed in the middle of the page.