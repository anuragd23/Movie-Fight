const fetchData = async () => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '819b0d6b',
            s: 'avengers'
        }
    });

    console.log(response.data);
}

fetchData();