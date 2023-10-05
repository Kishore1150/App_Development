package com.fundplus.ServiceImpl;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fundplus.Dto.request.Authenticationrequest;
import com.fundplus.Dto.request.Userregisterrequest;
import com.fundplus.Dto.response.Authenticationresponse;
import com.fundplus.Model.User;
import com.fundplus.Model.enumerate.Role;
import com.fundplus.Repo.Userrepo;
import com.fundplus.Service.Authservice;
import com.fundplus.Util.Jwtutil;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;



@Service
@Transactional
@RequiredArgsConstructor
public class Authserviceimpl implements Authservice{


    private final Userrepo userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final Jwtutil jwtUtil;

    @Override
    public boolean userRegistration(Userregisterrequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .firstName(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf("USER"))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public Authenticationresponse userAuthentication(Authenticationrequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        return Authenticationresponse.builder()
                .token(token)
                .build();
    }


}
