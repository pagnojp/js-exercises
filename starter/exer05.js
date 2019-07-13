const users = [
    {
        name: "João",
        skills: ["Javascript", "React", "Node"]
    },
    {
        name: "Pedro",
        skills: ["PHP", "MySQL", "jQuery"]
    }
];

users.map(user => console.log(`${user.name} have this skills: ${user.skills.join(" ")}`));