package com.server.fundplusnamingserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class FundplusnamingserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(FundplusnamingserverApplication.class, args);
	}

}
