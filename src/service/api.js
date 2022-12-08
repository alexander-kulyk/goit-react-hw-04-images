import axios from 'axios';

const KEY = '30901823-3559667aaedc24b5df855bd98';
const URL = 'https://pixabay.com/api/'


const getImages = async (inputValue, page) =>{
    return await axios.get(`${URL}?q=${inputValue}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
   
};

//return await axios.get(`${URL}?q=${valueInput}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)

// fetch(`https://pixabay.com/api/?q=cat&page=1&key=30901823-3559667aaedc24b5df855bd98&image_type=photo&orientation=horizontal&per_page=12`)
//    .then(resp => resp.json()).then(console.log)



export {getImages} 