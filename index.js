function createTemplate(id) {
  customElements.define(
    id,
    class extends HTMLElement {
      constructor() {
        super();
        let template = document.getElementById(id);
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
    },
  );
}
createTemplate("my-paragraph")
createTemplate("nav-menu")
createTemplate("app-footer")

// vim:sw=2:ai
