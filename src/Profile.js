import profilePicture from './assets/profilepic.png'
import tab from './assets/avatar.svg'
import tabb from './assets/avat.svg'

const Profile = () => {
    return ( 
        <section className="profile_head">
            <img src={tabb} alt="" />
            <img src={tab} alt="" />
            <div>
                <img id="profile__img" src={profilePicture} alt="Profile" />
                <h2 id="twitter">Oluwafemi Olamilekan</h2>
                {/* <p id="slack">My Slack</p> */}
            </div>
        </section>
     );
}
 
export default Profile;