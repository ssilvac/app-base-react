import React from 'react';
import './footer.scss';

function Footer(props){

    const { title, titleUrl } = props;

    return(
        <footer>Making the web a better world &nbsp; <a href={titleUrl} target='_blank' rel="noopener noreferrer" className='logo-footer'>{title} &copy;</a></footer>
    );
}

export default Footer;