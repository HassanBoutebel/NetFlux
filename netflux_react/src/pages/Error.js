import React from 'react';

function Error({msg}) {
    return (<>
        <img alt="Congratulation, you have found john-travolta.gif"
             src="https://c.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif"/>
            <p >{msg} </p>
        </>

    );
}

export default Error;