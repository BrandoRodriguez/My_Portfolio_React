
function CardSkill(props) {
    return (
        <>
            <div class="single-skill animate text-white">
                <span class="circle"></span>
                <span class="rectengle"></span>
                <div>
                    <span class="badge text-s">
                        <span class="text-s text-white">
                            {props.abbreviation}
                        </span>
                        {props.name}
                    </span>
                    <h3 class="text-md">
                        {props.description}
                    </h3>
                </div>
            </div>
        </>
    )
}

export default CardSkill;
