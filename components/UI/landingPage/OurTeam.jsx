import React, {useState, useEffect} from 'react'
import classes from '../../../styles/ourteam.module.css'
import {ImLinkedin} from 'react-icons/im'
import { urlFor, client } from '../../clientSanity';
import { AppWrap, MotionWrap } from '../../Wrappers';




const OurTeam = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const query = '*[_type == "members"]';
        client.fetch(query).then((data) => {
            console.log(data);
          setMembers(data);
        });
    
      }, []);
  return (
    <div className={`${classes.ot__box_main}`} id='process'>
        <div className={`${classes.sp__box_mainText}`}>
            <h1>Our Team</h1>
            <hr style={{ borderTop: "3px solid #008bc9",
                            width: "100px",
                            margin: "1rem auto auto auto"}}/>
        </div>
        <div className={`${classes.ot__members_main}`}>
            {members.map((data, index) => 
            <div key={index} className={`${classes.ot_card}`}>
                <img src={urlFor(data.imageUrl)} alt="John" style={{width:"100%", borderRadius: "10px"}} />
                <h4 style={{margin: "5px"}}>{data?.name}</h4>
                <p className={`${classes.ot__title}`}>{data?.position}</p>
                <p>{data?.company}</p>
                <p><ImLinkedin size={25} style={{color: '#0A66C2'}}/></p>
            </div>)}
        </div>
    </div>
  )
}

export default AppWrap(
  MotionWrap(OurTeam, `${classes.ot__box_main}`),
  'team',
  'app__primarybg',
);