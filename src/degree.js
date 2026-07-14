export function Degree(){
    const degree = document.createElement('div');
    degree.innerHTML = `
        <h1>My degree & certification</h1>
        <div id="degree">
            <div class="degree">
                <img src="/icon/third.png" alt="">
                <h3>Competitive Programming</h3>
            </div>
            <div class="degree">
                <img src="/icon/degree.png" alt="">
                <h3>Bachelor's Degree</h3>
            </div>
            <div class="degree">
                <img src="/icon/certificat.png" alt="">
                <h3>Missionaire</h3>
            </div>
            <div class="degree">
                <img src="/icon/first.png" alt="">
                <h3>Month Of Innovation</h3>
            </div>
        </div>
    `;

    degree.id="certification"
    return degree;
}