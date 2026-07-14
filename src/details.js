export function Details(){
    const details = document.createElement('section');
    details.innerHTML = `
        <div class="content">
            <div class="detail top">
                <h3>UI/UX Design</h3>
                <p>I design clean, modern, and user-centered interfaces that improve usability, increase engagement, and turn ideas into memorable experiences.</p>
            </div>
            <div class=" left">
                <img src="Frame 2.jpg" alt="profile">
            </div>
            <div class="detail right1">
                <h3>Web Development</h3>
                <p>I build fast, responsive, and scalable websites that help businesses grow, engage users, and deliver exceptional digital experiences.</p>
            </div>
            <div class="detail right2">
                <h3>Mobile Development</h3>
                <p>I create intuitive and high-performance mobile applications that provide seamless experiences on both Android.</p>
            </div>
            <div class="detail bottom">
                <h3>Data Analysis</h3>
                <p>I transform raw data into actionable insights through analytics and interactive visualizations, helping businesses make smarter decisions.</p>           
            </div>
        </div>
    `

    details.id = "details";
    return details
}