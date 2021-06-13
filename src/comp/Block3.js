import cloud from '../img/cloud.png'
import node from '../img/node.png'
import python from '../img/python.png'
import csharp from '../img/csharp.png'
import ruby from '../img/ruby.png'
import php from '../img/php.png'
import scala from '../img/scala.png'
import clojure from '../img/clojure.png'
import {Card} from '../Cards/Cards'
import { useHistory } from 'react-router-dom'
function Block3(){
const history=useHistory();
function navAway(){
    history.push("/features")
}
    const sup=[
    {
    lang:'node.js',
    img:node
    },
    {
    lang:'python',
        img:python
    },
    {
    lang:'c#',
        img:csharp
    },
    {
    lang:'ruby',
    img:ruby
    },
    {
    lang:'PHP',
    img:php
    },
    {
    lang:'scala',
    img:scala
    },
    {
    lang:'clojure',
    img:clojure
    },
]
    return <div>
        <div className="block3">
            <section>
            <h1>Extreme Cloud Hosting</h1>
            <p>Cloud hosting like you've never seen. Fast, efficient and scalable</p>
            <button onClick={navAway}>Read More</button>
            </section>
            <section>
                <img src={cloud} alt=""/>
            </section>
        </div>
        <div className="block4">
            <h2>supported languages</h2>
            <section>{sup.map((sup)=> <div className="card"><h4>{sup.lang}</h4><br/><img src={sup.img} alt=""/></div>)}</section>
        </div>
    </div>
}
export default Block3