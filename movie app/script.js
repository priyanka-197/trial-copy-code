const api_key =  '04c35731a5ee918f014970082a0088b1';
const imgPath =  "https://image.tmdb.org/t/p/w1280";
const form = document.querySelector('form')
const input = document.querySelector('input')
const main = document.querySelector('main')

 api_url();
 async function api_url() {
  const url =await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`)
  const resp =await url.json();
  const data1 = resp.results
  fetchdata(data1)

  return data1
}

async function searchmovies(term){
  const searchApi = await fetch('https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='+term);
  const rep = await searchApi.json();
  const data2 = await rep.results;
  console.log(data2);
   fetchdata(data2)
  
 }








  function fetchdata(data){
  
    main.innerHTML = '';
    
      data.forEach((el)=>{
        const {poster_path,title,vote_average,overview} = el
       
        const div = document.createElement('div')
        div.innerHTML = 
        `<div class="movie">
        <img src =" ${imgPath + poster_path}" alt="${vote_average}">
        <div class="movie-info">
            <h3>${title
            }
            </h3>
            <span class = "${getClassByRate(vote_average)}">${vote_average
            }
            </span>
        </div>

        <div class ='overview'>${overview}</div>
        
    </div>`
    main.appendChild(div)
 
})


  }


  function getClassByRate(vote){
    if(vote >=8){
      return 'green'
    }else if(vote >= 5){
      return 'orange';
    }else{
      return 'red';
      }}

      
      form.addEventListener('submit',(e)=>{
        e.preventDefault();
        searchmovies(input.value)
 

       
        if(input.value){
          input.value = '';
       
        }
        
        
        
        })
      
