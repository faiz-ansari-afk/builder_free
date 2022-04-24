import React from "react";

export default function Footer() {
  return (
    <div className="block">
      <div className="footer__block">
        <ul className="footer-nav">
          <li className="footer-nav-item"><a className="footer-nav-item-link" href="">About us</a></li>
          <li className="footer-nav-item"><a className="footer-nav-item-link" href="">programs</a></li>
          <li className="footer-nav-item"><a className="footer-nav-item-link" href="">Blogs</a></li>
          <li className="footer-nav-item"><a className="footer-nav-item-link" href="">careers</a></li>
          <li className="footer-nav-item"><a className="footer-nav-item-link" href="">faq's</a></li>
          <li className="footer-nav-item"><a className="footer-nav-item-link" href="">contact us</a></li>
        </ul>
        <div className="copyright">
            <p>© All Right Reserved Team Builders India |&nbsp;</p><small>Made with passion ❤️</small>
        </div>
      </div>
      <div className="sticky-footer-mobile">
      <ul className="sfooter-nav">
          <li className="sfooter-nav-item"><a className="sfooter-nav-item-link" href="">Call Us</a></li>
          <li className="sfooter-nav-item"><a className="sfooter-nav-item-link" href="">Whatsapp</a></li>
          <li className="sfooter-nav-item"><a className="sfooter-nav-item-link" href="">Inquire now</a></li>
        </ul>
      </div>
    </div>
  );
}
