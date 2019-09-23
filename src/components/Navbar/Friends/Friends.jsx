import React from 'react';
import style from './Friends.module.css';


const Friends = (props) => {

    let friends = [
        {id: 0, name: "Davran"},
        {id: 1, name: "Belek"},
        {id: 2, name: "Edil"}
    ];


    return (
        <div className={style.friend + " ml-2"} >
            <div className={style.friendsHead} >
                <h3 >Friends</h3>
            </div>

            <div className={style.friends}>
                <ul>
                    <li>
                        <div className={style.friendItem}>
                            <img src="https://banner2.kisspng.com/20180810/tuk/kisspng-chargeback-merchant-services-company-entrepreneurs-om-lp-i-norge-5b6d364e22c9b1.1562506015338839821425.jpg" alt="friend image"/>
                            <h6>{friends[0].name}</h6>
                        </div>
                    </li>

                    <li>
                        <div className={style.friendItem}>
                            <img src="https://banner2.kisspng.com/20180810/tuk/kisspng-chargeback-merchant-services-company-entrepreneurs-om-lp-i-norge-5b6d364e22c9b1.1562506015338839821425.jpg" alt="friend image"/>
                            <h6>{friends[1].name}</h6>
                        </div>
                    </li>

                    <li>
                        <div className={style.friendItem}>
                            <img src="https://banner2.kisspng.com/20180810/tuk/kisspng-chargeback-merchant-services-company-entrepreneurs-om-lp-i-norge-5b6d364e22c9b1.1562506015338839821425.jpg" alt="friend image"/>
                            <h6>{friends[2].name}</h6>
                        </div>
                    </li>


                </ul>

            </div>

        </div>

    )
};

export default Friends;