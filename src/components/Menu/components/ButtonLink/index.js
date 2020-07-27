import React from 'react';


function ButtonLink(props) {
    // props => { classNmae: "O que alguém passar", href: "/" }
    console.log(props);
    return (
        <a className={props.className} href={props.href}>
            Novo vídeo
        </a>
    );
}

export default ButtonLink;