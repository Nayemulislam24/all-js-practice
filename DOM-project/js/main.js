// Get for Josn data Convert to json data js object
const milestonesData = JSON.parse(data).data;

// load milestone data
function loadMilestone() {
  const milestones = document.querySelector(".milestones");
  milestones.innerHTML = `${milestonesData.map(function(milestone){
    return ` <div class="milestone border-b">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" /></div>
          <div>
            <p>
              Milestone ${milestone.name} name
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          <div class="module border-b">
            <p>Module Name</p>
          </div>
        </div>
      </div>`;
  }).join("")}`;
}

//functon call
loadMilestone();
