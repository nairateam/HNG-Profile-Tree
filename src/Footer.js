import slack from './assets/slack.svg'
import git from './assets/git.svg'
import vector from './assets/Vector.svg'
import i4g from './assets/I4G.svg'

const Footer = () => {
    return ( 
        <section className="footer">
            <div className="top__footer">
                <img src={slack} alt="slack" />
                <img src={git} alt="slack" />
            </div>
            <div className="bottom__footer">
                <img src={vector} alt="Zuri" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src={i4g} alt="I$G" />
            </div>
        </section>
     );
}
 
export default Footer;