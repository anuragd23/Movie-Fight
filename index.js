const fetchData = async (searchTerm) => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: '819b0d6b',
            s: searchTerm
        }
    });

    console.log(response.data);
}

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    fetchData(event.target.value);
});