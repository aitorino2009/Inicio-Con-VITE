import { Navbar } from './components/navbar.js';
import { Section } from './components/section.js';
const app = document.body;
app.append(
  Navbar(),
  Section("Esta es Sección1"),
  Section("Esta es Sección2")
);