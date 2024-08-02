const users =[
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com'
    }

]

const filterUsers = (users, searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return users.filter(user => user.name.toLowerCase().includes(lowerCaseSearchTerm));
}