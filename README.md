<h1 align="center">🚀 QR Code Generator</h1>

<p align="center">
  <b>A modern, minimal, and easy-to-use QR Code Generator built with Node.js and Express.</b><br>
  Generate QR codes from URLs instantly, preview them in the browser, download them, and keep a history —
  <b>without using any third-party QR APIs.</b>
</p>

<hr>

<h2>🌟 Highlights</h2>
<ul>
  <li>✨ Clean & minimalist UI</li>
  <li>⚡ Instant QR generation</li>
  <li>📥 One-click QR download</li>
  <li>🗂️ Automatic QR image storage</li>
  <li>📝 URL history logging</li>
  <li>🧠 Beginner-friendly & easy to extend</li>
</ul>

<hr>

<h2>🖼️ Demo Flow</h2>
<ol>
  <li><b>Enter</b> any valid URL</li>
  <li><b>Click</b> on <i>Generate</i></li>
  <li><b>Preview</b> the QR code</li>
  <li><b>Download</b> it instantly</li>
</ol>

<p><i>Simple. Fast. Reliable.</i></p>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
  <tr>
    <th align="left">Layer</th>
    <th align="left">Technology</th>
  </tr>
  <tr>
    <td><b>Backend</b></td>
    <td>Node.js, Express</td>
  </tr>
  <tr>
    <td><b>QR Engine</b></td>
    <td>qr-image</td>
  </tr>
  <tr>
    <td><b>Frontend</b></td>
    <td>HTML, CSS, JavaScript</td>
  </tr>
  <tr>
    <td><b>Storage</b></td>
    <td>Local File System</td>
  </tr>
</table>

<hr>

<h2>📂 Project Structure</h2>

<pre>
qr-code-generator/
 ├── index.js
 ├── package.json
 ├── URL.txt
 ├── public/
 │    ├── index.html
 │    ├── style.css
 │    └── script.js
</pre>

<hr>

<h2>🚀 Getting Started</h2>

<h3>1️⃣ Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>2️⃣ Run the Server</h3>
<pre><code>node index.js</code></pre>

<h3>3️⃣ Open in Browser</h3>
<pre><code>http://localhost:3000</code></pre>

<hr>

<h2>📌 How It Works</h2>
<ul>
  <li>QR codes are generated <b>locally</b> using Node.js</li>
  <li>Each QR image is saved with a <b>unique timestamp-based filename</b></li>
  <li>All submitted URLs are <b>appended line-by-line</b> in <code>URL.txt</code></li>
  <li>Browser caching issues are avoided by design</li>
</ul>

<hr>

<h2>📄 Generated Files</h2>
<ul>
  <li><code>qr_&lt;timestamp&gt;.png</code> → Generated QR codes</li>
  <li><code>URL.txt</code> → History of all entered URLs</li>
</ul>

<pre>
https://google.com
https://github.com
</pre>

<hr>

<h2>🎯 Ideal For</h2>
<ul>
  <li>📘 Learning Node.js + frontend integration</li>
  <li>🎓 College projects & demonstrations</li>
  <li>🛠️ Utility tools</li>
  <li>🏁 Hackathons</li>
  <li>💼 Portfolio projects</li>
</ul>

<hr>

<h2>🔮 Future Enhancements</h2>
<ul>
  <li>🎨 QR color & size customization</li>
  <li>🌙 Dark mode UI</li>
  <li>📜 QR history viewer</li>
  <li>⏱️ Timestamped URL logs</li>
  <li>🧹 Automatic cleanup of old QR files</li>
</ul>

<hr>

<h2>🤝 Contributing</h2>
<p>
  Contributions, suggestions, and improvements are always welcome.<br>
  Feel free to <b>fork the repository</b> and submit a <b>pull request</b>.
</p>

<hr>

<h2>📜 License</h2>
<p>
  This project is <b>open-source</b> and free to use for learning and personal projects.
</p>

<hr>

<p align="center">
  ⭐ If you found this project helpful, consider giving it a <b>star</b>!
</p>
