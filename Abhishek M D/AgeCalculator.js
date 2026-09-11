function calculateAge(dobString) 
{
    const birthDate = new Date(dobString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) 
    {
        age--;
    }

    return age;
}

console.log(calculateAge("1995-12-25")); 
console.log(calculateAge("2002-03-10"));
