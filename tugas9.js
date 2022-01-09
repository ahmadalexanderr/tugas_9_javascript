const sumateraTimur = () =>{
    var sultanate = {
        leader : 'Teungku Amir Hamzah',
        states : {
            deli: 'Sultan Mahmud Abdul Jalil Rahmad Shah',
            serdang: 'Sultan Sulaiman Syariful Alam Shah',
            deli: 'Sultan Osman Al Sani Perkasa Alamsyah',
            asahan: 'Sultan Shaibun Abdul Jalil Rahmad Shah III'    
        }
    }

    console.log(sultanate.leader);

    for (let x in sultanate.states){
        console.log(sultanate.states[x]);
    }
}

sumateraTimur();