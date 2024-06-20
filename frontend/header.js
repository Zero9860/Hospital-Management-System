document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/header.css">
</head>
<body>
    <nav class="navbar background h-nav-resp">
        <ul class="nav-list v-class-resp">
            <div class="logo">
                <li><a href="home.html">Home</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="dep.html">Department</a></li>
                <li><a href="bookings.html" style="white-space:nowrap">My Bookings</a></li>
                <li id="add-depart"><a href="depBack.html">Add Depart</a></li>


            </div>
        </ul>
        <p id="username" style="padding-left:2%;white-space:nowrap;font-size:1.5rem;color:#66ec66"> </p>
        <button id="logout" onclick="handleLogout()" style="cursor:pointer;padding:0.35%;background-color:blue;color:whitesmoke;margin-left:50%;border-radius:10%;border:none; white-space:nowrap"> Log Out</button>
        <div class="rightNav v-class-resp">
            <button class="btns fa" >  <a href="signup.html" style="color:white; text-decoration:none">Book an Appointment </a></button>
        </div>
        <div class="hand">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </nav>
</body>
</html>
<script> 
document.addEventListener('DOMContentLoaded', function() {
    let user = sessionStorage.getItem("user");
    let username = document.getElementById('username');
    let logoutButton = document.getElementById('logout');
    let dep = document.getElementById('add-depart');
    dep.style.display = "none"

    if (user) {
        username.innerHTML = "Welcome " + user;
        logoutButton.style.display = "block"; // Show the logout button
       
    } else {
        logoutButton.style.display = "none"; // Hide the logout button if no user is logged in
    }
        if (sessionStorage.getItem('role') == 2){
        document.getElementById('add-depart').style.display = "block";}
});
const handleLogout = ()=>{
    const ans = confirm("Are you sure you want to Logout?")
    if(!ans){
    return
    }
    sessionStorage.clear()
    logoutButton = "none"
    username.innerHTML = ""
        document.getElementById('logout').style.display = "none"; // Hide the logout button
        window.location.href="home.html"

    }
</script>
`)