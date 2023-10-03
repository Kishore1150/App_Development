package com.fundplus.Model;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

// import org.springframework.security.core.GrantedAuthority;
// import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User  implements UserDetails{


  @Id
  private String id;
  private String password;
  private String firstName;
  private String lastName;
  private String gender;
  private String email;
  private String date;
  private String location;
  private String country;
  private long mobileNumber;
  private String biographical;
  private String website;
  private int pincode;


  @Lob
  @Column(name = "image", columnDefinition = "LONGBLOB")
  private byte[] userImage;
  @Lob
  @Column(name = "userprofileimage", columnDefinition = "LONGBLOB")
  private byte[] profileImage;
   @OneToMany(cascade = CascadeType.ALL)
  @JoinColumn(name="JoinColumn_user_id",referencedColumnName ="id")
  private List<Usercarddetails> usercarddetails;



   @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      return null;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }


}

