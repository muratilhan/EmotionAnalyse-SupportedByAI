import React from 'react'
import './home.css'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'
const Home = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault()
        navigate("/questions");
    }

  return (

    <div className='home'>

        <div className='home-title'> 
        <div>
        <img src="https://www.hiwellapp.com/assets/images/test/anksiyete-kaygi-testi.svg" alt="" />
        <img src="https://www.hiwellapp.com/assets/images/test/depresyon-testi.svg" alt="" />
        <img src="https://www.hiwellapp.com/assets/images/test/travma-sonrasi-stres-bozuklugu-testi.svg" alt="" />
        </div>
            <h2> Hemen Psikoljinizi Test Edin! </h2>
            <p>Ücretsiz ve kolayca çözebileceğiniz psikolojik testler ile kendinizi test edin ve psikolojik sıkıntılarınızın düzeyi hakkında bilgi edinin</p>
            <button onClick={(e)=> handleClick(e)}>Test'e Başla</button>
           
        </div>
        

    </div>
  )
}

export default Home