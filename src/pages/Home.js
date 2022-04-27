import './Home.css';
import React from 'react';
import Navbar from '../components/Navbar.js'

class Home extends React.Component {
  render = () => (
    <div className='page-ct'>
      <div className="fullpage">
        <div className='home'>
          <div className='home-content'>
            <div className='title'>
              <div className='title-1'>
                <span>Le</span>
              </div>
              <div className='title-2'>
                <span>Petit</span>
              </div>
              <div className='title-3'>
                <span>Vert</span>
              </div>
            </div>
            <div className='glass'>
              <img src='/static/glass.svg' alt='logo'/>
            </div>
            <div className='desc'>
              <div className='desc-content'>
                À l'interface entre les ressources des produit laitiers et du naturel du sirop de menthe, nous présentons le petit vert.
                Le savoir faire des agriculteurs francais et la subtilité des arômes de la menthe s'allient dans une boisson unique à laquelle cette page rend hommage 
              </div> 
            </div>
            
          </div>
          
        </div>  
        <Navbar/>
      </div>
      <div className='page-sections-ct'>
        <div id='philosophie' className='page-section'>
          <div className='page-section-title'>
            Notre philosophie
          </div>
          <div className='page-section-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc aliquet bibendum enim. Vel pretium lectus quam id leo. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Tellus rutrum tellus pellentesque eu. Consectetur adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu. Eu consequat ac felis donec et odio. Est sit amet facilisis magna etiam tempor orci eu. Venenatis urna cursus eget nunc. Commodo elit at imperdiet dui accumsan sit amet nulla.
          </div>
        </div>

        <div id='demarche' className='page-section'>
          <div className='page-section-title'>
            Notre démarche
          </div>
          <div className='page-section-text'>
            In ornare quam viverra orci sagittis eu. Tincidunt arcu non sodales neque sodales ut. Dui id ornare arcu odio ut sem nulla. Vitae et leo duis ut. Gravida cum sociis natoque penatibus. At imperdiet dui accumsan sit amet nulla facilisi. Id donec ultrices tincidunt arcu non sodales neque. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Id cursus metus aliquam eleifend mi in nulla. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Ullamcorper malesuada proin libero nunc. At elementum eu facilisis sed odio morbi quis commodo odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Magna sit amet purus gravida quis.
          </div>
        </div>

        <div id='contact' className='page-section'>
          <div className='page-section-title'>
            Nous contacter
          </div>
          <div className='page-section-text'>
            Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Lacus viverra vitae congue eu. Risus quis varius quam quisque. Egestas quis ipsum suspendisse ultrices. Nibh venenatis cras sed felis eget. Adipiscing commodo elit at imperdiet dui accumsan. Pellentesque sit amet porttitor eget dolor. Pellentesque nec nam aliquam sem et tortor consequat. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Commodo ullamcorper a lacus vestibulum sed. Integer vitae justo eget magna fermentum iaculis eu. Eu scelerisque felis imperdiet proin fermentum leo vel. Sagittis nisl rhoncus mattis rhoncus. Posuere ac ut consequat semper viverra nam libero justo. Quam quisque id diam vel quam elementum pulvinar. Scelerisque purus semper eget duis at tellus at urna condimentum. Maecenas pharetra convallis posuere morbi. Massa massa ultricies mi quis hendrerit dolor magna. Sollicitudin ac orci phasellus egestas tellus rutrum tellus.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home;
