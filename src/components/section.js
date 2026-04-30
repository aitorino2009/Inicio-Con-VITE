export function Section(contenido) {
    const section = document.createElement('section');
    section.textContent = contenido;
    return section;
}