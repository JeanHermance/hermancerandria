export function Section(){
    const section = document.createElement('section');
    section.innerHTML = `
                <h1 id="question">Who am I?</h1>
                <div id="description">
                    <h2>Developer <br>full-stack Web & Mobile,<br> UI/UX designer and Data Analyst</h2>
                    <p>"Young professional with a passion for creating innovative digital solutions."</p>
                </div>
        `
    section.id = "about";
    return section;
}