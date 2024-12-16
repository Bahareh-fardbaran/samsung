(function app() {


    const USERS_LIST = [
        { id: 1, userName: "sample 1", pass: "123456" },
        { id: 2, userName: "sample 2", pass: "123456" },
        { id: 3, userName: "sample 3", pass: "123456" },
        { id: 4, userName: "sample 4", pass: "123456" },

    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email');
        const pass = document.getElementById('pass');
        const user = USERS_LIST.filter( item => item.userName.toLowerCase() === email.value.toLowerCase().trim());
        console.log(user);
        if (user.length && pass.value === user[0].pass) {
console.log('login success');

        }else{
            console.log('invalid credential');
            
        }
    }

    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', handleSubmit)
})()

