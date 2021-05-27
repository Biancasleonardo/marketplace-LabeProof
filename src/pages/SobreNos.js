import React from 'react'
import Design from '../components/Design/Design'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "../tailwind.output.css"

export default class SobreNos extends React.Component {
    render(){
        return (
            <div>
                <Header />
				<Design />
                <div>
                    <h1 className="text-blue-700 font-bold text-4xl uppercase text-center mb-3 mt-12">Equipe LABEPROF</h1>
                    <h3 className="text-black  uppercase text-center mb-12">Apaixonados, sonhadores, utópicos, implicados, sérios, engajados, poliglotas e sempre prontos para uma aventura. Brasileiros, portugueses, belgas, franceses, ingleses, italianos, espanhóis, uma americana, dois indianos duas alemãs, uma japonesa, uma chilena, argentinos, uma holandesa, um indonésio e duas mexicanas, dois alemães e três colombianos.  </h3>
                    <h3 className="text-black  uppercase text-center mb-48">LABEPROF é composto por quase 100 colaboradores situados na Embaixada do Intercâmbio de Saberes prontos a transmitir suas paixões em 28 países e 14 línguas.</h3>
                </div>
                <Footer />
            </div>
        )
    }
}