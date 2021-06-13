import { useHistory } from 'react-router-dom'
import Cards from '../Cards/Cards'
function Block1(){
    const history=useHistory();
    function navAway(){
        history.push("/features")
    }
    return <div className="block1" >
        <section data-aos="fade-right" data-aos-duration="1000">
            <h1>easier deployment</h1>
            <p>Deploy web apps of all kinds, from large scale enterprise APIs to static websites for individuals. Fill out the form to try a demo of our platform</p>
            <button onClick={navAway}>Read More</button>
        </section>
        <div data-aos="fade-left" data-aos-duration="1000">
        <Cards >
            <form action="" >
                <h2>request a demo</h2>
                <input type="text" placeholder="Name"/><br/>
                <input type="text" name="comp" placeholder="Company Name"/><br/>
                <input type="email" name="email" placeholder="Email"/><br/>
                <button>Send</button>
            </form>
        </Cards>
        </div>
    </div>
}
export default Block1