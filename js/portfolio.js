fetch('https://asia-south1-artstation-data-fetch.cloudfunctions.net/api/portfolio-data/aayush_dgamer/1552818')
.then(response => response.json())
.then(data => {
  console.log("Hey")
  console.log(data)
})
.catch(error => {
  console.error('Error fetching data:', error);
});