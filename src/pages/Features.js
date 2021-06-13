import server from '../img/server.png'
import server2 from '../img/server2.png'
import Cards from '../Cards/Cards'
import {FaServer} from 'react-icons/fa'
import {FaNetworkWired} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {FaDatabase} from 'react-icons/fa'
import {FaPowerOff} from 'react-icons/fa'
import {FaUpload} from 'react-icons/fa'
function Features(){
    return <div className="features">
        <header>
            <section>
            <h1 className="mainhead">Features</h1>
            <p>Check out the features of Loruki that separate us from the competition</p>
            </section>
            <img src={server} alt=""/>
        </header>
        <main>
            <section>
        <h1 className="subhead">The Loruki Platform</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!</p>
            </section>
            <img src={server2} alt=""/>
        </main>
        <grid>
            <div id="a" className="card">
                <FaServer className="icons"/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo saepe corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias quia molestiae ea, libero nihil deserunt. Molestias, eum? Necessitatibus!</p>
            </div>
            <div id="b" className="card">
                <FaNetworkWired className="icons"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a itaque debitis qui vel dignissimos ipsum!</p>
            </div>
            <div id="c" className="card">
                <FaLaptopCode className="icons"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.</p>
            </div>
            <div id="d" className="card">
                <FaDatabase className="icons"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!</p>
            </div>
            <div id="e" className="card">
                <FaPowerOff className="icons"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.</p>
            </div>
            <div id="f" className="card">
                <FaUpload className="icons"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, magnam.</p>
            </div>
        </grid>
    </div>
}
export default Features