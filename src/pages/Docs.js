
import docs from '../img/docs.png' 
import {FaInfo} from 'react-icons/fa'
function Docs(){
    return <div className="docs">
        <header>
        <section>
            <h1 className="mainhead">Docs</h1>
            <p>Learn how to work with the Loruki platform</p>
            </section>
            <img src={docs} alt=""/>
        </header>
        <div className="main">
    <div>
        <main className="card">
            <h6>Essentials</h6>
            <ul>
                <li ><a href="#" className="act">Introduction</a></li>
                <li><a href="#">About Loruki</a></li>
                <li><a href="#">Installation</a></li>
            </ul>
            <h6>Deployment</h6>
            <ul>
                <li><a href="#">Setting ip a container</a></li>
                <li><a href="#">Using the CLI</a></li>
                <li><a href="#">Managing the resources</a></li>
                <li><a href="#">Upgrade and downgrade</a></li>
            </ul>
        </main>
    </div>
    <div>
        <section className="card">
            <h5>Introduction</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio illo facere perferendis laborum? Similique recusandae incidunt eos dolorum aliquam ipsam unde perspiciatis laudantium totam quam laborum velit, at maxime minus?</p>
            <green><FaInfo style={{marginRight:'1rem'}}/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, animi?</green>
            <h6>Lorem, ipsum dolor.</h6>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima totam magni eius vitae velit id, atque veritatis! At, vero porro.</p>
            <button>Install CLI</button>
            <h6>Requirements</h6>
            <p>Windows 10, Mac OSX, Linux</p><br/>
            <p>Node.js v12 or higher</p>
            <h6>Install</h6>
            <p>Mac (Homebrew)</p>
            <grey>$ brew install loruki-cli</grey>
            <p>NPM</p>
            <grey>$ npm install loruki-cli</grey>
            <p>Yarn</p>
            <grey>$ yarn install loruki-cli</grey>
        </section>
    </div>
    </div>
    </div>
}
export default Docs