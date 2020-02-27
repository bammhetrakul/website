const getProjectContent = () => {
	const url = window.location.pathname
  const filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.html'))

	const projectItem = projectsData.find( item => item.ref === filename )

	const imagesUrls = projectItem.images.map((imagesUrl) => {
		return `<img class="projectImage" src="../projects/images/${imagesUrl}">`
	})

	getMainHeader('body', '../index.html')

	const getCurrentIndex = () => {
		let result = 0
		projectsData.map((projectsDataItem, index) => {
			if(projectsDataItem.ref === projectItem.ref) {
				result = index
			}
		})
		return result
	}

	const projectsAmount = projectsData.length
	const previousProject = projectsData[getCurrentIndex()-1]
	const nextProject = projectsData[getCurrentIndex()+1]

	const getPreviousNextLinks = () => {
		if(getCurrentIndex() === 0) {
			return `
				<a class="nextLink" href="./${nextProject.ref}.html">→<br />Next —<br />${nextProject.title}</a>
			`
		}
		if(projectsAmount === getCurrentIndex()+1) {
			return `
				<a href="./${previousProject.ref}.html">← <br />Previous —<br />${previousProject.title}</a>
			`
		}
		if(projectsAmount > getCurrentIndex()+1) {
			return `
				<a href="./${previousProject.ref}.html">← <br />Previous —<br />${previousProject.title}</a>
				<br />
				<a class="nextLink" href="./${nextProject.ref}.html">→<br />Next —<br />${nextProject.title}</a>
			`
		}
	}

	document.querySelector(`body`).innerHTML += `
		<div class="projectContent">
			<h1 class="projectTitle">${projectItem.title}</h1>
			${imagesUrls.join('')}
			<div class="previousNextLinksSection">
				${getPreviousNextLinks()}
			</div>
		</div>
	`

  document.querySelector('#headTitle').innerHTML = projectItem.title
}