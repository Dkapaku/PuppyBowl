import {useState} from 'react';
import "./searchbar.css"
const DogNames = (props) => {
    const {dogData} = props;
    const [searchBoxInput, setSearchBoxInput] = useState("");
    let filteredDogNames = dogData.filter ((singleDogName) => {
        let namedDog=singleDogName.name.toLowerCase();
        console.log(namedDog)
        return namedDog.includes(searchBoxInput.toLowerCase());
        
        
    })


return (
    <div className="mainBody">

        <input className="searchBox"type="text" placeholder="Dog Name Here" onChange={(event) =>{setSearchBoxInput(event.target.value)}}/>
        <section>
             {
                 filteredDogNames.length ? filteredDogNames.map ((singleDogName,idx) => {
            return (
                <div className="pictures" key ={idx}>
                    <p>Id: {singleDogName.id}</p>
                    <p>Name: {singleDogName.name}</p>
                    <p>Breed:{singleDogName.breed}</p>
                    <img className= "image"style= {{width:"75px", height:"75px"}} src=  {singleDogName.imageURL}></img>
                </div>
            )
        }) : <div>No Such Animal Exists</div>
    }
</section>
</div>
)
}
export default DogNames