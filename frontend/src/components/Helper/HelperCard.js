import "../../styles/helper-card.css"

function HelperCard({ item })
{
    const { imgUrl, title, desc } = item;
    return (
        <>
            <div className='helper_item'>
                <div className='helper_img'>
                    <img src={imgUrl} alt=''></img>
                </div>
                <p>
                    <b >{title} </b>
                    {desc}
                </p>
                {/* <h5>{title}</h5>
            <p>{desc}</p>  */}
            </div>
        </>
    );
}

export default HelperCard;