const mail = document.getElementById("email");
const nom = document.getElementById("name");
const msg = document.getElementById("msg");
const form = document.getElementById("contact");
const info = [nom,mail,msg]
console.log(mail,nom,msg);

    function removestyle(elt){
        elt.classList.remove("redborder");
    }

function verify(infos){
    var num_True = 0;;
    infos.forEach((info, index) => {
        console.log(info, info.vlaue)
        if (index === 2) {
            return
        }
        if (info.value == '') {
            info.placeholder="veiller renseigner les informations de ce champ";
            info.classList.add("redborder","placeholder")
            num_True --;
        }else{
            num_True++;
            removestyle(info)
        }
    });
    if (info[2].value.length < 150){
        console.log(info[2].value.length < 150)
        info[2].classList.add("redborder","placeholder");
        info[2].placeholder = "Votre commentaire doit faire minimun 150 mots";
        num_True --;
    }else{
        num_True ++;
        removestyle(info[2])
    }
    var counter = 0;
    var email = infos[1].value;
    for(var i in email){
        if (email[i] =="@" || email[i] == ".") {
            counter++;
        }
    }
    if(counter != 2){
        num_True --;
        infos[1].classList.add("redborder");
    }else{
        num_True++;
        removestyle(info[1])
    }
    return num_True;
}

function verf(){
    form.addEventListener(("submit"),(e)=>{
        e.preventDefault();
        const i = verify(info);
        if (i == 3) {
            form.submit();
        }
    })
}

form.addEventListener(("keydown"),(e)=>{
    if (e.key ==='Enter') {
        e.preventDefault();
        document.getElementById("valid").submit;  
    }
})