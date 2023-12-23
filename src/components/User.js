const User = ({name,role,Contact})=>{
    return (<div>
        <h1>Name : {name}</h1>
        <h3>Role : {role}</h3>
        <h3>Contact: {Contact}</h3>
    </div>);
}

export default User;