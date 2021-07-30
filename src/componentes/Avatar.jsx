import React,{Fragment} from 'react'

const Avatar = ({urlImg}) => {
    return ( 
        <Fragment>
       <img className="mr-3" src={urlImg} alt=""/>
       </Fragment>
     );
}
 
export default Avatar;