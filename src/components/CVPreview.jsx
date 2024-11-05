import "../styles/CVPreview.css"
import html2pdf from 'html2pdf.js';

export default function CVPreview({ generalInfo, experience, projects, education, skills }) {
	const generatePDF = () => {
		const element = document.querySelector(".cvPreview");
		// Define options for the PDF
		const options = {
			margin: 0,                // Set margins if needed
			filename: 'resume.pdf', // Output PDF filename
			image: { type: 'jpeg', quality: 0.98 },
			html2canvas: { scale: 2 },      // Increase scale for better quality
			jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
		};

		// Use html2pdf to generate PDF with selectable text
		html2pdf().set(options).from(element).save();
	}
	return (
		<>
			<div className="cvPreview">
				<div className="previewGeneralInfo">
					<div className="header">
						<h1 className="fullname">{generalInfo.fullname}</h1>
						<div className="links">
							<div>{generalInfo.number}</div>
							<div><a href={'mailto:' + generalInfo.email}>{generalInfo.email}</a></div>
							<div><a href={generalInfo.github} target="_blank">{generalInfo.github}</a></div>
							<div><a href={generalInfo.linkedin} target="_blank">{generalInfo.linkedin}</a></div>
							<div><a href={generalInfo.website} target="_blank">{generalInfo.website}</a></div>
						</div>
					</div>
					<div className="profile">
						<div className="title">PROFILE</div>
						<div className="description">{generalInfo.description}</div>
					</div>
				</div>

				<div className="previewExperience">
					<div className="title">EXPERIENCE</div>
					<div className="items">
						{
							experience.map((job) => (
								<div key={job.id} className="job">
									<div className="about">
										<div className="role">{job.role}</div>
										<div className="dates">{job.startMonth} {job.startYear} - {job.endMonth} {job.endYear}</div>
										<div className="companyName">{job.companyName}</div>
										<div className="location">{job.location}</div>
									</div>
									<ul className="description">
										<li>{job.description}</li>
									</ul>
								</div>
							))
						}
					</div>
				</div>
				<div className="previewProjects">
					<div className="title">PERSONAL PROJECTS</div>
					<div className="items">
						{
							projects.map((project) => (
								<div key={project.id} className="project">
									<div className="about">
										<div className="name">{project.name}</div>
										<div className="technologiesUsed">{project.technologiesUsed}</div>
									</div>
									<ul className="description">
										<li>{project.description}</li>
									</ul>
								</div>
							))
						}
					</div>
				</div>
				<div className="previewEducation">
					<div className="title">EDUCATION</div>
					<div className="items">
						{
							education.map((institution) => (
								<div key={institution.id} className="education">
									<div className="institutionName">{institution.institutionName}</div>
									<div className="location">{institution.location}</div>
									<div className="programmeName">{institution.programmeName}</div>
									<div className="dates">{institution.startMonth} {institution.startYear} - {institution.endMonth} {institution.endYear}</div>
								</div>
							))
						}
					</div>
				</div>
				<div className="previewSkills">
					<div className="title">TECHNICAL SKILLS</div>
					<div className="details">
						<div><b>Languages:</b> {skills.languages}</div>
						<div><b>Frameworks and Libraries:</b> {skills.frameworks}</div>
						<div><b>Development Tools:</b> {skills.tools}</div>
						<div><b>Courses and Certificates:</b> {skills.certifications}</div>
					</div>
				</div>
			</div>
			<button className="resumeDownloadBtn" onClick={generatePDF}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z" /></svg>
			</button>
		</>
	)
}