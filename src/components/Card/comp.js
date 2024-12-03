import React, { useState, useEffect } from 'react';
import './comp.css';

import { ReactComponent as Low } from '../../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as High } from '../../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as Medium } from '../../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as UrgentColor } from '../../assets/icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as UrgentNoColor } from '../../assets/icons_FEtask/SVG - Urgent Priority grey.svg';
import { ReactComponent as NoPriority } from '../../assets/icons_FEtask/No-priority.svg';


import { ReactComponent as Todo} from '../../assets/icons_FEtask/To-do.svg';
import { ReactComponent as InProgress } from '../../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as Done } from '../../assets/icons_FEtask/Done.svg';
import { ReactComponent as Cancelled } from '../../assets/icons_FEtask/Cancelled.svg';
import { ReactComponent as Backlog } from '../../assets/icons_FEtask/Backlog.svg';




const cardData = {
  id: 'CAM-1',
  title: 'Update User Profile Page UI',
  tag: ['Feature request', "Feature not available"],
  userId: 'usr-1',
  status: 'In progress',
  priority: 4,
  available: true
};

const Card = () => {
  const [pri, setPri] = useState(null);
  const [stat, setStat] = useState(null);


  // Effect to set priority icon
  useEffect(() => {
    if (cardData.priority === 0) {
      setPri(<NoPriority />);
    } else if (cardData.priority === 1) {
      setPri(<Low />);
    } else if (cardData.priority === 2) {
      setPri(<Medium />);
    } else if (cardData.priority === 3) {
      setPri(<High />);
    } else if (cardData.priority === 4) {
      setPri(<UrgentNoColor />);
    }

    if (cardData.status === "Todo") {
        setStat(<Todo/>);
      } else if (cardData.status === "In progress") {
        setStat(<InProgress />);
      } else if (cardData.status === "Backlog") {
        setStat(<Backlog />);
      } else if (cardData.status === "Done") {
        setStat(<Done/>);
      } else if (cardData.status === "Cancelled") {
        setStat(<Cancelled/>);
      }
  

  }, [cardData.priority, cardData.status]);



  return (
<>

    <div className="card">
      <div className="card-header">
        <p className="card-id">{cardData.id}</p>
        <div className='profile-container'>
        <img
          className="profile-pic"
          src={`https://via.placeholder.com/40?text=${cardData.userId}`}
          alt="Profile"
        />
        {console.log(cardData.available)}
            <span className= {`card-profile-avialable ${cardData.available?'true' : 'false'}`}></span>
      </div>
      </div>
      <div className='card-title-container'>

        <span className='card-status'>{stat}</span>
      
      <span><h3 className="card-title">{cardData.title}</h3></span>

      </div>
      <div className="card-footer">
        <div className='card-priority'>
          <span className="icon" >{pri}</span>
        </div>
        <div>

        
        {cardData.tag.map((tags)=>{

            return(
                  <div className='card-tag'>
                  <span className='tag-dot'></span>
                  <span className="tag-text">{tags}</span>
                  </div>
            )
        })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
