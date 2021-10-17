import React, { useEffect, useState } from 'react';
import './HomeBody.css';
import { Container } from 'react-bootstrap';
import loadingGif from '../../../Images/loading-buffering.gif';
import HomeBodyInfo from '../HomeBodyInfo/HomeBodyInfo';
import axios from 'axios';
import { useHistory } from 'react-router';
const HomeBody = () => {
    let history = useHistory();

    const btnHandle = (EventTitle) => {
        const eventTitle = EventTitle.EventTitle;
        const url = `/Register/${eventTitle}`;
        history.push(url);
    }

    const [serviceInfo, setServiceInfo] = useState();
    let i = 0;
    useEffect(() => {
        const baseUrl = 'https://murmuring-shelf-27420.herokuapp.com/serviceInfo';
        axios.get(baseUrl)
            .then(result => {
                setServiceInfo(result.data)
            }
            )
            .catch(err => alert(`${err}`));
    }, [])
    return (
        <div>
            <Container style={{ marginTop: '60px' }}>
                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>I GROW BY HELPING PEOPLE IN NEDD</h2>
                <div style={{ textAlign: 'center' }}>
                    <input id="input-highlight"></input>
                    <button id="button-highlight">Search</button>
                </div>
                {
                    serviceInfo ? <div className="row">
                        {
                            serviceInfo.map(info => <HomeBodyInfo btnHandle={btnHandle} i={i++} info={info} key={info._id}></HomeBodyInfo>)
                        }
                    </div> : <div style={{ textAlign: 'center' }}>
                        <img src={loadingGif} alt="" />
                        <h5>Loading, Please wait</h5>
                    </div>
                }
            </Container>
        </div>
    );
};

export default HomeBody;