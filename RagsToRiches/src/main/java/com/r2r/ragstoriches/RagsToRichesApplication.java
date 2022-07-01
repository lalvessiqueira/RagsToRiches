package com.r2r.ragstoriches;

import com.r2r.ragstoriches.Entity.Animal;
import com.r2r.ragstoriches.Repository.AnimalRepository;
import com.r2r.ragstoriches.Service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class RagsToRichesApplication{

    AnimalService animalService;
    public static void main(String[] args) {
        SpringApplication.run(RagsToRichesApplication.class, args);
    }
}
