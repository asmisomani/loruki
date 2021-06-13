import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <section>
        <h2>Loruki</h2>
        <h5>Copyright © 2020</h5>
      </section>

      <section>
        <h5>home</h5>
        <br />
        <h5>feautures</h5>
        <br />
        <h5>docs</h5>
        <br />
      </section>
      <section>
        <FaGithub className="social"/>
        <FaFacebook className="social"/>
        <FaInstagram className="social"/>
        <FaTwitter className="social"/>
      </section>
    </footer>
  );
}
export default Footer;
