import './Portfolio.css'
import Card from '../Components/Card.jsx'
import Button from '../Components/Button.jsx'
import img_ecomerce from '../assets/images/img-projects/ecomerce.png'
import img_dogs from '../assets/images/img-projects/dogs.png'
import img_pokemon from '../assets/images/img-projects/pokemon.webp'



function Portfolio() {
    return (
        <>
            
                <div class="container mx-auto w-full">              
                    <Card number='01' 
                    img={img_pokemon} 
                    badge='Pokemon App'
                    title=' Project Pokemon FullStack.' 
                    information='Project Objectives Build an App using React, Redux, Node and Sequelize.'
                    />
                    {/* <Card number='02' 
                    img={img_dogs} 
                    badge='modern shop'
                    title='JQ Official Store Website Design.'
                    information='WooCommerce. Hub provides all the tools you need to start selling online. Let your customers to experience WooCommerce at its absolute-best.'
                    />
                    <Card number='03' 
                    img={img_pokemon} 
                    badge='modern shop'
                    title='JQ Official Store Website Design.' 
                    information='WooCommerce. Hub provides all the tools you need to start selling online. Let your customers to experience WooCommerce at its absolute-best.'
                    /> */}
                    <Button name='See all projects'/>
                </div>
           
        </>
    );
}

export default Portfolio;
