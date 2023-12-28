const portfolioListChild = (data) => {
  return $(`
  <li>
      <figure>
          <img src="${data.cover.small_square_url}" alt="${data.title}" />
          <div><span>${data.title}</span></div>
      </figure>
  </li>
  `)
}

const portfolioDetailListChild = (data) => {
  return $(`
  <li>
      <figure>
          <figcaption>
              <h3>${data.title}</h3>
              <div class="row open-sans-font">
                  <div class="col-6 mb-2">
                      <i class="fa fa-file-text-o pr-2"></i>
                      <span class="project-label">Project </span>
                      : 
                      <span class="ft-wt-600 uppercase">${data.title}</span>
                  </div>
                  <div class="col-6 mb-2">
                      <i class="fa fa-external-link pr-2"></i>
                      <span class="project-label">Preview </span>: 
                      <span class="ft-wt-600 uppercase">
                          <!--<a href="${data.permalink}" target="_blank">${data.title} (Art Station)</a>-->
                          <a href="${data.permalink}" target="_blank">Art Station</a>
                      </span>
                  </div>
                  <div class="col-6 mb-2">
                  </div>
                  <div class="col-6 mb-2">
                  </div>
              </div>
          </figcaption>
          <img src="${data.cover.small_square_url}" alt="${data.title}" />
      </figure>
  </li>
  `)
}

fetch('https://asia-south1-artstation-data-fetch.cloudfunctions.net/api/portfolio-data/aayush_dgamer/1552818')
.then(response => response.json())
.then(data => {
  // remove all children
  $('#portfolioList').empty()
  $('#portfolioDetailList').empty()
  // add children
  data.data.forEach((work)=>{
    $('#portfolioList').append(portfolioListChild(work))
    $('#portfolioDetailList').append(portfolioDetailListChild(work))
  })
  customization($)
})
.catch(error => {
  console.error('Error fetching data:', error);
  // fallback to a hardcoded JSON
  $('#portfolioList').empty()
  $('#portfolioDetailList').empty()
  // add children
  const data = portfolioFallbackData
  data.data.forEach((work)=>{
    $('#portfolioList').append(portfolioListChild(work))
    $('#portfolioDetailList').append(portfolioDetailListChild(work))
  })
  customization($)
});