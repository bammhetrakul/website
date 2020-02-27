const setCurrentProject = (item) => {
	return item
}

const projectStyles = `
	<style>
		${projectsData.map((project, index) => `
			body.project-${index} .imagesMenuImage.image-${index} {
				opacity: 1;
			}
		`).join('')}
	</style>
`

document.head.innerHTML += projectStyles

const projectIntros = projectsData.map((project, index) => {
	document.querySelector('.imagesMenuImageSection').innerHTML += `
		<div
			class="imagesMenuImage image-${index}"
			style="background-image: url(./projects/images/${project.introImage})"
		></div>
	`

	return `
		<div>
			<h2 class="introProjectTitle" onmouseover="
				document.body.classList = '',
				document.body.classList.add('project-' + ${index})
			"
			onmouseout="document.body.classList = ''"
			>
				<a class="introProjectLink" href="projects/${project.ref}.html">
	  			${project.title}
				</a>
			</h2>
    </div>
	`
})

introSection.innerHTML = projectIntros.join('')
