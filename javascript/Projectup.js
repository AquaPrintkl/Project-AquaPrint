const project_content = [
    ["Current Initiatives","Artificial reefs near Malasia and sustainable fishing collaborations."],
    ["Upcoming Ventures","Partnership for coral restoration in the Great Barrier Reef."]
];


const project_list = document.getElementById("Projects_list")
project_list.innerHTML = ""
for (let i = 0; i<2;i++){
    let initiatives = project_content[i];
    project_list.innerHTML += `<div class="context-box-regular" style="color:var(--darkbrown);background-color: antiquewhite">
    <h5 >${initiatives[0]}</h5>
    <p> ${initiatives[1]}</p>
    </div>`;
};

