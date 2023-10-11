package com.fundplus;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "Onlinedonationandfundraisingplatform",
				version = "1.1.2",
				description = "Application for donation and fundraising ",
				contact = @Contact(
						name = "Kishore Kumar",
						email = "kishorekumarb2003@gmail.com"
						)
				)
		)
@SpringBootApplication
public class OnlinedonationandfundraisingplatformApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinedonationandfundraisingplatformApplication.class, args);
		System.out.println("Lets start fundraising");
	}

}
