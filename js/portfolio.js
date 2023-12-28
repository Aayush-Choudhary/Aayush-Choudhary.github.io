fetch('https://www.artstation.com/users/aayush_dgamer/projects.json?user_id=1552818&page=1&per_page=1')
.then(response => response.json())
.then(data => {
  console.log("Hey")
  console.log(data)
})
.catch(error => {
  console.error('Error fetching data:', error);
});