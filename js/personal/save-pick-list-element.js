window.onload = fillSelects;

function getTeams() {
    return fetch('https://pcfy.redberryinternship.ge/api/teams', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            // 'Authorization': `Bearer ${token}`
        }
    })
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });
}


function getPositions() {
    return fetch('https://pcfy.redberryinternship.ge/api/positions', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',


        }
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
        .then(response => response.data)
        .catch(function (error) {
            console.warn('Something went wrong.', error);
        });


}

function fillSelects() {
    Promise.all([getTeams(), getPositions()]).then(res => {
        const teams = res[0];
        const positions = res[1];

        const groupsByTeamId = {}

        positions.forEach(team => {
            if (team.team_id in groupsByTeamId) {
                groupsByTeamId[team.team_id].push(team);
                return;
            }
            groupsByTeamId[team.team_id] = [team]

        });

        renderTeams(teams);
        const teamPos = localStorage.getItem('team')

        if(teamPos != null) {
            renderPositions(groupsByTeamId[teams[teamPos - 1].id]);
        } else {
            renderPositions(groupsByTeamId[teams[0].id]);
        }

        const teamSelect = document.querySelector('.teams-list');
        const positionList = document.querySelector('.positions-list');
        teamSelect.addEventListener('change', function (e) {
            const currentPositionId = groupsByTeamId[e.target.value][0].id;
            teamsChangeHandler(groupsByTeamId[e.target.value]);
            positionList.value = currentPositionId
            localStorage.setItem(e.target.id, e.target.value);
            localStorage.setItem('position', currentPositionId);
        });

        // save position
        positionList.addEventListener('change', function (e) {
            localStorage.setItem(e.target.id, e.target.value);
        });

        localStorageFormHandler(teamSelect, positionList, groupsByTeamId);

    })
}

function renderTeams(teams) {
    teams.forEach((el) => {
        document.querySelector('.teams-list').innerHTML += (`<option value="${el.id}">${el.name}</option>`);
    });
}

function renderPositions(positions, isNewList = false) {
    const select = document.querySelector('.positions-list');
    if (isNewList) {
        select.innerHTML = '';
        select.value = '';
    }
    positions.forEach((el) => {
        console.log(el.id);
        select.innerHTML += (`<option name="${el.id}" value="${el.id}">${el.name} </option>`);
    });
}


function teamsChangeHandler(teams) {
    renderPositions(teams, true);
}


function localStorageFormHandler(teamSelect, positionListSelect, groupsByTeamId) {
    const teamIndex = localStorage.getItem('team') || 1;
    teamSelect.value = teamIndex;

    const positionIndex = localStorage.getItem('position') || groupsByTeamId[teamIndex][0];

    positionListSelect.value = positionIndex;

    //save
    // document.querySelectorAll(".form-select").forEach((form, idx) => {
    //     if (idx > 1) return;

    //     form.addEventListener("change", function () {
    //         localStorage.setItem(form.id, form.value);
    //     });
    // })

    // //restore
    // document.querySelectorAll(".form-select").forEach((form, idx) => {
    //     if (idx > 1) return;
    //     const indexOfOption = localStorage.getItem(form.id);

    //     // debugger;
    //     if (indexOfOption != null) {
    //         form.value = indexOfOption;

    //     }

    // });

}


