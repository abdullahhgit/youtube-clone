import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': '234a122fb4mshe36abc0c27b33b1p172fd9jsn94bae23260a8',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};