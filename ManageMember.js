class Candidator {
    constructor(id, gender, age, phone, email, avatar, name, status) {
        this.id = id;
        this.gender = gender;
        this.age = age;
        this.phone = phone;
        this.email = email;
        this.avatar = avatar;
        this.name = name;
        this.status = status
    }
}

var candidators = [
    new Candidator(1, true, 18, "+1 (203) 561-5427", "thanh23243@gmail.com", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1200.jpg", "Nguyên Nguyễn", "Finished"),
    new Candidator(3, false, 20, "+1 (204) 561-6427", "hoang3243@gmail.com", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg", "Nhàn Hoàng", "Finished"),
    new Candidator(4, true, 21, "+1 (208) 561-5447", "anh123243@gmail.com", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/13.jpg", "Toàn Trương", "Finished"),
    new Candidator(7, true, 25, "+1 (213) 561-1427", "tanh1123243@gmail.com", "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/33.jpg", "Long Trần", "Finished"),
]

function renderCandidate() {
    let htmls = candidators.map(function (can) {
        return `
            <tr>
                <td class="fw-bolder">${can.gender ? "M" : "F"}</td>
                <td>${can.age}</td>
                <td>${can.phone}</td>
                <td>${can.email}</td>
                <td>
                    <div class="candidate-avatar">
                        <img class="avatar-sm" src="${can.avatar}" alt="">
                        <h3>${can.name}</h3>
                    </div>
                </td>
                <td>
                    <span class="status">${can.status}</span>
                </td>
                <td>
                    <span class="times" onclick='removeCandidator(${can.id})' >&times;</span>
                </td>
            </tr>
        `
    })
    document.getElementById('tbCandidate').innerHTML = htmls.join("");
}


function saveCandidator() {
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let gender = Boolean(document.getElementById("gender").value);
    let phone = document.getElementById("phone").value;
    let email =document.getElementById("email").value;
    let avatar = document.getElementById("avatar").value;
    let status = document.getElementById("status").value;
    let id = findMaxId() + 1;

    let candidator = new Candidator(id, gender, age, phone, email, avatar, name, status);
    candidators.push(candidator);

    renderCandidate();

    resetForm()
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("gender").value = "0";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("avatar").value = "";
    document.getElementById("status").value = "0";
}

function findMaxId() {
    let max = 0;
    for (let can of candidators) {
        if (can.id > max) {
            max = can.id
        }
    }

    return max;
}

function removeCandidator(candidatorId) {
    let confirm = window.confirm("Are you sure to remove this candidator?");
    if (confirm) {
        let index = candidators.findIndex(function(can){
            return can.id == candidatorId;
        })
        candidators.splice(index, 1);
        renderCandidate();
    }

}
renderCandidate()