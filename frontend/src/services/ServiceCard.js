import '../styles/service-card.css';

function ServiceCard({item}){
    const {imgUrl , title , desc} = item;
    return(
        <>
         <div className='service_item'>
            <div className='service_img'>
                <img src={imgUrl} alt=''></img>
            </div>
            {/* <p>
                <b >{title} </b> 
                {desc}
            </p> */}
                <h5><b>{title}</b></h5>
            <p>{desc}</p> 
         </div>
        </>
    );
}

export default ServiceCard;