const github = new Github;

const ui = new UI;

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', searchFun);

function searchFun(){
    const userText = document.getElementById('searchUser').value;

    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User not found', 'alert alert-danger')

            } else {
                ui.showProfile(data.profile)
                ui.showRepos(data.repos);
            }
        })
    } else {
        ui.clearProfile();
    }
}