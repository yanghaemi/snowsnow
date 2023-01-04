function input(){
    let inputname = document.getElementById("index").value;
    console.log(inputname);

    if(isNaN(inputname)){
        switch(inputname){
            case "박정현": 
                num = 0;
                break;
            case "복무창": 
                num =1;
                break;
            case "오민석": 
                num =2;
                break;
            case "한규원": 
                num = 3;
                break;
            case "김도영": 
                num = 4;
                break;
            case "김준호": 
                num = 5;
                break;
            case "문희범": 
                num = 6;
                break;
            default:
                break;
        }  
    }
    else{
        num = inputname
    }
    var address = "https://my-json-server.typicode.com/smashh712/json_placeholder/members/"+num;
    fetch(address)
        .then((response) => response.json())     //json으로 바꾸기
        .then((data) => {
            console.log(data);
            const birthday = document.createElement("div");
            birthday.textContent = data.name.substr(0,3)+"님의 "+"생일은 "+data.birth.substr(0,2)+"년"+data.birth.substr(2,2)+"월"+data.birth.substr(4,2)+"일"+"입니다";
            const userInfo = document.getElementById("userInfo");
            userInfo.appendChild(birthday);
        })
        .catch(error=>{
            console.log("에러");
            alert("존재하지 않음")
        })
}