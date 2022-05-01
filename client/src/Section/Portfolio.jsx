import './Portfolio.css'
import Card from '../Components/Card.jsx'
import Button from '../Components/Button.jsx'
import img_ecomerce from '../assets/images/img-projects/ecomerce.webp'
import img_dogs from '../assets/images/img-projects/dogs.webp'
import img_pokemon from '../assets/images/img-projects/pokemon.webp'




function Portfolio() {
    return (
        <>
            
                <div class="container mx-auto w-full">              
                    <Card number='01' 
                    img={img_ecomerce}
                    badge='Ecomerce App'
                    title='Ecomerce App, Stack PERN.' 
                    information='Project Objectives Build an App using React, Redux, Node and Sequelize.'
                    rute='/project-pokemon'
                    />
                    <Card number='02' 
                    img={img_pokemon}
                    badge='Pokemon App'
                    title='Pokemon App, Stack PERN.' 
                    information='Project Objectives Build an App using React, Redux, Node and Sequelize.'
                    rute='/project-pokemon'
                    />
                    <Card number='03' 
                    img={img_dogs}
                    badge='Pokemon App'
                    title='Dog App, Stack PERN.' 
                    information='Project Objectives Build an App using React, Redux, Node and Sequelize.'
                    rute='/project-pokemon'
                    />
                    <Button name='See all projects'/>
                </div>
           
        </>
    );
}

export default Portfolio;
