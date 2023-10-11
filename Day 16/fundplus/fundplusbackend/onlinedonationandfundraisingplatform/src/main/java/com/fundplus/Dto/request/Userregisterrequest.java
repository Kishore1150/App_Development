package com.fundplus.Dto.request;

import com.fundplus.Model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Userregisterrequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String role;

}

