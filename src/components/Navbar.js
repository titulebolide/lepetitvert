import './Navbar.css';
import React from 'react';

class Navbar extends React.Component {
    state = {
        fixNavbar : false
    }

    componentWillMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > window.innerHeight - 70 && !this.state.fixNavbar) {
            this.setState({fixNavbar: true})
        } else if (window.scrollY < window.innerHeight - 70 && this.state.fixNavbar) {
            this.setState({fixNavbar: false})
        }
    }

    scrollFunction = (x) => {
        return 1/(1+Math.exp(-(x-0.5)/0.1))
    }

    scrollTo = (pos) => {
        let initPos = window.scrollY
        let scrollToStep = (i) => {
            console.log(initPos + i/100*(pos-initPos), pos)
            window.scrollTo(0, initPos + this.scrollFunction(i/100)*(pos-initPos))
            if (i < 100) {
                setTimeout(() => scrollToStep(i+1), 4)
            }
        }
        scrollToStep(0)
    }

    navigateTo = (id) => {
        let height = document.getElementById(id).offsetTop
        let goal = height - 300
        this.scrollTo(goal)
    }


    render = () => (
        <div className='navbar' style = { this.state.fixNavbar ? {'position' : 'fixed'} : {}}>
            <div className='logo' onClick={() => {window.location="/"}}>
                <span>L</span>
                <span>P</span>
                <span className='logo-V'>V</span>
            </div>
            <div className='nav-section-ct'>
                <div className='nav-section clickable' onClick={() => {this.navigateTo('philosophie')}}>
                    Notre philosophie
                </div>
                <div className='nav-section clickable' onClick={() => {this.navigateTo('demarche')}}>
                    Notre démarche
                </div>
                <div className='nav-section clickable' onClick={() => {this.navigateTo('contact')}}>
                    Nous contacter
                </div>
            </div>
        </div>
    )
}


export default Navbar;