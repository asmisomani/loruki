import Cards from "../Cards/Cards";
import {FaServer} from 'react-icons/fa'
import {FaUpload} from 'react-icons/fa'
import {FaProjectDiagram} from 'react-icons/fa'

import ss from '../img/cli.png'
function Block2(){
    return <div className="block2" >
        <h4 data-aos="fade-up" data-aos-duration="1000">Welcome to the best platform for building applications of all types with modern architecture and scaling</h4>
        <section data-aos-duration="1000" data-aos="fade-up">
            <part>
                <FaServer className="icons"/>
                <h2>10,349,405</h2>
                <h3>Deployments</h3>
            </part>
            <part>
                <FaUpload className="icons"/>
                <h2>987 TB</h2>
                <h3>Published</h3>
            </part>
            <part>
                <FaProjectDiagram className="icons"/>
                <h2>2,343,265</h2>
                <h3>Projects</h3>
            </part>
        </section>
        <right>
        <img src={ss} alt=""/>
        <card>
            <Cards><p>Easy to use, cross platform CLI</p></Cards>
            <Cards><p>Deploy in seconds</p></Cards>
        </card>
        </right>
    </div>
}
export default Block2