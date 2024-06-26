import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
  } from 'react-leaflet'

import Menu from "./components/Menu"

import { useState } from 'react';

import style from './Contacts.module.css'

export const Contacts = () => {
    const geoData = ({lat: 27.988262, long: 86.924994})
    const defaultPhoneNumber = '5541995340694';
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData({...formData, [name]: value});
    }
 
    const handleWhatsAppMessage = () => {
        const {name, email, message} = formData;
        
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}`;

        window.open(whatsappUrl, '_blank');
    }

    return(
        <div className={style.wrapAllContact}>
            <Menu/>
            <h1>CONTACTS</h1>
            <div className={style.wrapTwoDivs}>
                <div className={style.wrapMap}>
                    <h2 className={style.wraphMapa}>Mapa</h2>
                    <MapContainer center={[geoData.lat, geoData.long]} zoom={17} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    {geoData.lat && geoData.lng &&
                        <Marker position={[geoData.lat, geoData.long]}>
                        <Popup>
                        <a target='_blank' href={`https://www.google.com.br/maps/place/Sistema+Fiep+-+Unidade+Centro/@${geoData.lat},${geoData.long},17z/data=!3m1!4b1!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu`}>Google maps view</a>
                        </Popup>
                        </Marker>}
                    </MapContainer>
                </div>
                <div>
                <h2 className={style.wraphWhats}>WhatsApp</h2>
                    <div className={style.inputsDiv}>
                    <div>
                        <input className={style.inputCont} placeholder='Digite o seu nome:' type="text" id='name' name='name' value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div>
                        <input className={style.inputCont} placeholder='Digite o seu email:' type="text" id='email'  name='email' value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <textarea className={style.textCont} placeholder='Digite sua mensagem:' id='message'  name='message' value={formData.message} onChange={handleChange} required ></textarea>
                        
                    </div> 
                    <button onClick={handleWhatsAppMessage} className={style.btn} >Enviar Mensagem</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
