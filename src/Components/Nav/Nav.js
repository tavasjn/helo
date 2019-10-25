import React, {Component} from 'react';
import {connect} from 'react-redux';
import Dashboard from '../../home_logo.png';
import New from '../../new_logo.png';
import Logout from '../../shut_down.png';
import {Link} from 'react-router-dom';
import no_image from '../../no_image.jpg'


class Nav extends Component {
    render(){
        console.log(this.props)
        return (
            <div className='nav-bar'>
                <div>
                    <Link to='/post'><img src={no_image} alt='' className='nav-img'/></Link>
                </div>
                <div>
                    UserName: Here
                </div>
                <div>
                    <Link to='/dashboard'><img src={Dashboard} alt='' className='nav-img'/></Link>
                </div>
                <div>
                    <Link to='/form'><img src={New} alt='' className='nav-img'/></Link>
                </div>
                <div className='logout'>
                    <div>
                        <Link to='/'><img src={Logout} alt='' className='nav-img'/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;