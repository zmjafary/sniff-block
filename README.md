# Sniff-Block.js - Boost Your Web App Security

Sniff-Block.js is a simple JavaScript library that strengthens your web application's security by preventing actions like copy-pasting, right-clicking, and the use of developer tools.

## How Sniff-Block.js Works

Sniff-Block.js uses event listeners to block unwanted actions and detect the use of developer tools:

### 1. **Disable Copy-Paste:**
   - Stops users from copying or pasting content within specific elements by listening for events like `mousedown`, `selectstart`, `copy`, and more.

### 2. **Detect Developer Tools:**
   - Measures the time taken to evaluate a `debugger` statement.
   - If it takes too long, it assumes developer tools are active and takes action, like clearing the document.

### 3. **Disable Right-Click:**
   - Blocks the context menu when users right-click on the web page, preventing access to browser functions.

### 4. **Disable Developer Tools Shortcut:**
   - Listens for the specific key combination (Ctrl+Shift+I or Cmd+Option+I) used to open developer tools and prevents it.

## What Sniff-Block.js Does

### 1. **Enhanced Content Security:**
   - Protects sensitive information by stopping copy-pasting within specific elements.

### 2. **Developer Tools Detection:**
   - Quickly identifies the use of developer tools and takes security measures to safeguard your app.

### 3. **Prevention of Right-Click Actions:**
   - Blocks the context menu, adding an extra layer of protection against unauthorized actions.

### 4. **Shortcut Disabling:**
   - Prevents the opening of developer tools using the keyboard shortcut, discouraging potential attempts to inspect or manipulate the web page.

## Usage

Integrating Sniff-Block.js into your web app is easy. Just include the script in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/zmjafary/sniff-block@latest/sniff-block.js"></script>
```

The script will automatically run, applying security measures to the entire document and specific input fields.

## Compatibility

Sniff-Block.js works smoothly on various browsers, tested and verified for modern web browsers.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to contribute, report issues, or suggest improvements. Your feedback is appreciated!
