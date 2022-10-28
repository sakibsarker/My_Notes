const getRoll=()=>{
    setTimeout(()=>{
        console.log(`api getting roll no`)
        let rollno=[1,2,3,4,5]
        console.log(rollno)
        setTimeout((roll_no)=>{
            const bioData={
                name:"sakib",
                age:22
            }
            console.log(`roll num is ${roll_no} my name is ${bioData.name} and age is ${bioData.age}`)
            setTimeout((name)=>{
                bioData.gender='male'
                console.log(`roll ${roll_no} name ${bioData.name} age ${bioData.age} and gender ${bioData.gender}`)
            },3000,bioData.name)
        },2000,rollno[1])
    },3000)
}
getRoll()
