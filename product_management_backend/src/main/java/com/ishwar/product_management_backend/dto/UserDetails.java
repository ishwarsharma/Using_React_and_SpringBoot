// This class is used to received information which is not entity class 
// and will not go to database so we will not annoted this class.
// All we do is to received the user information and pass it to the user.
package com.ishwar.product_management_backend.dto;

public class UserDetails {

    private String username;
    private String password;
    private String fullname;

    // need to generate constructor
    public UserDetails(String username, String password, String fullname) {
        this.username = username;
        this.password = password;
        this.fullname = fullname;
    }

    // default constructor
    public UserDetails() {
    }

    // generate getter and setter
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

}
