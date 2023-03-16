class topaddressstrip extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
        <div class="top_nav">
        <div class="container">
          <div class="contact_link-container">
            <a href="" class="contact_link1">
            <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
              <span>
                2B/1, Phase 1, IDA, Patancheru, Medak District
              </span>
            </a>
            <a href="" class="contact_link2">
            <i class="fa fa-phone  mr-2" aria-hidden="true"></i>
              <span>
                Call : 9381834372
              </span>
            </a>
            <a href="" class="contact_link3">
            <i class="fa fa-envelope  mr-2" aria-hidden="true"></i>
              <span>
              jaifasteners@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define('top-address-strip', topaddressstrip);