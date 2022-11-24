import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Item from '../components/home/Item';
import Loading from '../../components/Loading';

import './home.scss'
import CartAlert from '../../components/CartAlert';


export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);
    const navigate = useNavigate();
    const getData = (url) => {
        return axios.get(url)
    };
    useEffect(() => {
        getData('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s')
        .then((respone) => {
            setData(respone?.data?.drinks)
            setLoading(false)
            console.log(respone?.data?.drinks)})
        .catch((erro) =>{
            setErro(true)
            setLoading(false)
            console.log('co loi')})
    }, []);

    const onLogout = () => {
        navigate('/login')
        localStorage.setItem("isLogin", "false")
    }
  return (
    <div className='home-items'>
        <header className='home-items-header'>
            <div onClick={onLogout} className='logout'>
                <Link>Logout</Link>
            </div>
            <h1>Welcome to Cocktail's World</h1>
            <Link to='/cart'><CartAlert/></Link>
            
        </header>
        
        <main className='home-items-list'>
            {loading && (<div style={{margin: 'auto'}}><Loading/></div>)}
            {erro && (<div style={{margin: 'auto'}}>No Internet</div>)}
            {data.map((item) => {
                return (
                    <>
                    <Item id={item.idDrink} value={item}/>
                    </>
                )
            })}
        </main>
    </div>
  )
}
