var employee={
    firstName:'rakesh',
    lastName:'appaji',
    mobileNumbers:[
        {
            type:'personal',
            numbers:['1233456567']
        },
        {
            type:'office',
            numbers:['1245689090','32143567657']

        }
    ],
    skills:['js', 'rb', 'py'],
    education:[
        {grade: '10th', institution: 'tews'},
        {grade: '12th', institution: 'vijaya'}
    ],
    hobbies: ['', '', '']

};
//get the skills property
console.log('skills', employee.skills);
console.log('first skill', employee.skills[0]);
console.log('all office numbers', employee.mobileNumbers[1].numbers.join(', '));
console.log('list all educational details');
employee.education.forEach(function(detail){
    console.log(`${employee.firstName} studied ${detail.grade} in ${detail.institution}`);
});