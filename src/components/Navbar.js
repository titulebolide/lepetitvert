import './Navbar.css';
import React from 'react';


class Navbar extends React.Component {
    state = {
        fixNavbar : false,
        activeSection: "",
        phoneNavbar: false,
        navbarPhoneActive: false
    }

    sections = [
        {id : "philosophie", name: "Notre Philosophie"},
        {id : "demarche", name: "Notre Démarche"},
        {id : "contact", name: "Nous Contacter"}
    ]

    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
        if (window.innerWidth < 800) {
            this.setState({phoneNavbar: true})
        }
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        let phoneNavbar = false
        if (window.innerWidth < 800) {
            phoneNavbar = true
        }
        if (this.state.phoneNavbar !== phoneNavbar) {
            this.setState({phoneNavbar})
        }
    }

    handleScroll = () => {
        if (window.scrollY > window.innerHeight - 70 && !this.state.fixNavbar) {
            this.setState({fixNavbar: true})
        } else if (window.scrollY < window.innerHeight - 70 && this.state.fixNavbar) {
            this.setState({fixNavbar: false})
        }
        let activeSection = ""
        for (let id of this.sections.map(key => key.id)) {
            let offsetTop = document.getElementById(id).offsetTop
            let screenHeight = window.innerHeight
            if (offsetTop - (screenHeight / 2) < window.scrollY && window.scrollY < offsetTop - 70) {
                activeSection = id
                break
            }
        }
        if (activeSection !== this.state.activeSection) {
            this.setState({activeSection})
        }
    }

    scrollFunction = (x) => {
        return 1/(1+Math.exp(-(x-0.5)/0.1))
    }

    scrollTo = (pos) => {
        let initPos = window.scrollY
        let scrollToStep = (i) => {
            window.scrollTo(0, initPos + this.scrollFunction(i/100)*(pos-initPos))
            if (i < 100) {
                setTimeout(() => scrollToStep(i+1), 4)
            }
        }
        scrollToStep(0)
    }

    navigateTo = (id) => {
        if (this.state.phoneNavbar) {
            this.setState({navbarPhoneActive: false})
        }
        let height = document.getElementById(id).offsetTop
        let goal = height - 300
        this.scrollTo(goal)
    }

    handleClickNavbarPhone = () => {
        this.setState({navbarPhoneActive : !this.state.navbarPhoneActive})
    }

    render = () => (
        <>
            <div className={'navbar' + (this.state.fixNavbar ? ' navbar-fixed' : '') + (this.state.phoneNavbar ? ' hidden' : '')}>
                <div className='logo' onClick={() => {window.location="/"}}>
                    <span>L</span>
                    <span>P</span>
                    <span className='logo-V'>V</span>
                </div>
                <div className='nav-section-ct'>
                    {
                        this.sections.map((section) => (
                            <div key={section.id} className={'nav-section clickable' + (this.state.activeSection === section.id ? ' active-section' : '')} onClick={() => {this.navigateTo(section.id)}}>
                                {section.name}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={"navbar-phone" + (!this.state.phoneNavbar ? ' hidden' : '') + (this.state.navbarPhoneActive ? ' navbar-phone-active' : '')} onClick={this.handleClickNavbarPhone}>
                <div className='navbar-phone-button'>
                    <div className='navbar-phone-dash navbar-phone-dash-top'></div>
                    <div className='navbar-phone-dash navbar-phone-dash-center'></div>
                    <div className='navbar-phone-dash navbar-phone-dash-bottom'></div>
                </div>
                
                <div className='navbar-phone-content'>
                    {
                        this.sections.map((section) => (
                            <div key={section.id} className='navbar-phone-section' onClick={() => {this.navigateTo(section.id)}}>
                                {section.name}
                            </div>
                        ))
                    }
                </div>
            
            </div>

        </>
        
    )
}


export default Navbar;