// =============================================
//  NURUZZAMAN SHAWON · PORTFOLIO JS
// =============================================

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
      });
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));

// ── Reveal animations ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      // Trigger skill bar animations
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// Also trigger skill bars if already in view
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        setTimeout(() => { bar.style.width = bar.dataset.width + '%'; }, 200);
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('#skills').forEach(s => skillObserver.observe(s));

// ── Terminal animation ──
const terminalLines = [
  { prompt: '$', cmd: 'whoami', output: 'nuruzzaman.shawon' },
  { prompt: '$', cmd: 'cat expertise.txt', output: 'Cybersecurity | AI | ML | Research' },
  { prompt: '$', cmd: 'ls publications/', output: '25 peer-reviewed papers found' },
  { prompt: '$', cmd: 'ping research-impact', output: 'Global reach: 40+ countries' },
  { prompt: '$', cmd: 'uptime --teaching', output: '10+ years | 500+ students mentored' },
  { prompt: '$', cmd: 'status --affiliation', output: 'Pacific States University · Active' },
];

const terminalBody = document.getElementById('terminal-body');
let lineIndex = 0;

function typeLine(lineObj, callback) {
  const div = document.createElement('div');
  div.className = 't-line';
  const prompt = document.createElement('span');
  prompt.className = 'prompt';
  prompt.textContent = lineObj.prompt + ' ';
  div.appendChild(prompt);
  terminalBody.appendChild(div);

  const cmd = document.createElement('span');
  cmd.className = 'cmd';
  div.appendChild(cmd);

  let i = 0;
  const type = setInterval(() => {
    if (i < lineObj.cmd.length) {
      cmd.textContent += lineObj.cmd[i++];
    } else {
      clearInterval(type);
      setTimeout(() => {
        const out = document.createElement('div');
        out.className = 't-line';
        const outSpan = document.createElement('span');
        outSpan.className = 'output';
        outSpan.textContent = '→ ' + lineObj.output;
        out.appendChild(outSpan);
        terminalBody.appendChild(out);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        setTimeout(callback, 400);
      }, 300);
    }
  }, 60);
}

function runTerminal() {
  if (lineIndex >= terminalLines.length) {
    // Add cursor and restart after pause
    const cursor = document.createElement('span');
    cursor.className = 't-cursor';
    terminalBody.appendChild(cursor);
    setTimeout(() => {
      terminalBody.innerHTML = '';
      lineIndex = 0;
      runTerminal();
    }, 3000);
    return;
  }
  typeLine(terminalLines[lineIndex++], runTerminal);
}

setTimeout(runTerminal, 800);

// ── Contact form ──
const form = document.getElementById('contact-form');
const toast = document.getElementById('toast');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  toast.textContent = '✓ Message sent! I\'ll get back to you soon.';
  toast.classList.add('show');
  form.reset();
  setTimeout(() => toast.classList.remove('show'), 4000);
});

// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
